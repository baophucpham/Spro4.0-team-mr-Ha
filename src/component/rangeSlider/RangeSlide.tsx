import React, {
	forwardRef,
	memo,
	ReactNode,
	useCallback,
	useEffect,
	useImperativeHandle,
	useMemo,
	useRef,
} from 'react'
import {
	Animated,
	GestureResponderEvent,
	PanResponder,
	PanResponderGestureState,
	View,
	ViewProps,
} from 'react-native'

import { colors, sizes, Style } from 'core/index'
import { clamp, getValueForPosition, isLowCloser } from './helpers'
import { useLowHigh, useSelectedRail, useWidthLayout } from './hooks'
import styles from './styles'

const trueFunc = () => true
const falseFunc = () => false

export interface SliderProps extends ViewProps {
	min: number
	max: number
	minRange?: number
	step: number
	low?: number
	high?: number
	allowLabelOverflow?: boolean
	disableRange?: boolean
	disabled?: boolean
	floatingLabel?: boolean
	renderNotch?: (value: number) => ReactNode
	onValueChanged?: (low: number, high: number, byUser: boolean) => void
	onSliderTouchStart?: (low: number, high: number) => void
	onSliderTouchEnd?: (low: number, high: number) => void
	start?: number
	end?: number
}
const thumbWidth = sizes.s28
const Slider = (
	{
		min,
		max,
		minRange = 0,
		step,
		low: lowProp,
		high: highProp,
		floatingLabel = false,
		allowLabelOverflow = false,
		disableRange = false,
		disabled = false,
		onValueChanged,
		onSliderTouchStart,
		onSliderTouchEnd,
		renderNotch = () => <></>,
		start,
		end,
		...restProps
	}: SliderProps,
	ref: any
) => {
	const renderThumb = (data: any) => (
		<View
			style={{
				width: thumbWidth,
				height: thumbWidth,
				backgroundColor: colors.white,
				borderRadius: thumbWidth,
				shadowColor: colors.secondary_text,
				shadowOffset: {
					width: 1,
					height: 3,
				},
				shadowOpacity: 0.43,
				shadowRadius: 3,

				elevation: 15,
			}}
		/>
	)

	const renderRail = () => {
		return <View style={{ backgroundColor: colors.background, height: sizes.s2, flex: 1 }} />
	}

	const renderRailSelected = () => {
		return <View style={{ backgroundColor: colors.primary, height: sizes.s2 }} />
	}

	const { x, y, inPropsRef, inPropsRefPrev, setLow, setHigh } = useLowHigh(
		lowProp,
		disableRange ? max : highProp,
		min,
		max,
		step
	)

	useEffect(() => {
		setLow(start || min)
		setHigh(end || max)
	}, [])

	useImperativeHandle(ref, () => ({
		reset: (x: any, y: any) => {
			setLow(x)
			setHigh(y)
		},
	}))

	const lowThumbXRef = useRef(new Animated.Value(0))
	const highThumbXRef = useRef(new Animated.Value(0))
	const pointerX = useRef(new Animated.Value(0)).current
	const { current: lowThumbX } = lowThumbXRef
	const { current: highThumbX } = highThumbXRef

	const gestureStateRef = useRef({ isLow: true, lastValue: 0, lastPosition: 0 })

	const containerWidthRef = useRef(0)

	const [selectedRailStyle, updateSelectedRail] = useSelectedRail(
		inPropsRef,
		containerWidthRef,
		thumbWidth,
		disableRange
	)

	const updateThumbs = useCallback(() => {
		const { current: containerWidth } = containerWidthRef
		if (!thumbWidth || !containerWidth) {
			return
		}
		const { low, high } = inPropsRef.current
		if (!disableRange) {
			const { current: highThumbX } = highThumbXRef
			const highPosition = ((high - min) / (max - min)) * (containerWidth - thumbWidth)
			highThumbX.setValue(highPosition)
		}
		const { current: lowThumbX } = lowThumbXRef
		const lowPosition = ((low - min) / (max - min)) * (containerWidth - thumbWidth)
		lowThumbX.setValue(lowPosition)
		updateSelectedRail()
		onValueChanged?.(low, high, false)
	}, [disableRange, inPropsRef, max, min, onValueChanged, thumbWidth, updateSelectedRail])

	useEffect(() => {
		const { lowPrev, highPrev } = inPropsRefPrev
		if (
			(lowProp !== undefined && lowProp !== lowPrev) ||
			(highProp !== undefined && highProp !== highPrev)
		) {
			updateThumbs()
		}
	}, [highProp, inPropsRefPrev.lowPrev, inPropsRefPrev.highPrev, lowProp])

	useEffect(() => {
		updateThumbs()
	}, [updateThumbs])

	const handleContainerLayout = useWidthLayout(containerWidthRef, updateThumbs)

	const lowStyles = useMemo(() => {
		return [{ transform: [{ translateX: lowThumbX }] }]
	}, [lowThumbX])

	const highStyles = useMemo(() => {
		return disableRange
			? null
			: [styles.highThumbContainer, { transform: [{ translateX: highThumbX }] }]
	}, [disableRange, highThumbX])

	const railContainerStyles = useMemo(() => {
		return [styles.railsContainer, { marginHorizontal: thumbWidth / 2 }]
	}, [thumbWidth])

	const lowThumb = renderThumb('low')
	const highThumb = renderThumb('high')

	const { panHandlers } = useMemo(
		() =>
			PanResponder.create({
				onStartShouldSetPanResponderCapture: falseFunc,
				onMoveShouldSetPanResponderCapture: falseFunc,
				onPanResponderTerminationRequest: falseFunc,
				onPanResponderTerminate: trueFunc,
				onShouldBlockNativeResponder: trueFunc,

				onMoveShouldSetPanResponder: (
					evt: GestureResponderEvent,
					gestureState: PanResponderGestureState
				) => Math.abs(gestureState.dx) > 2 * Math.abs(gestureState.dy),

				onPanResponderGrant: ({ nativeEvent }, gestureState) => {
					if (disabled) {
						return
					}
					const { numberActiveTouches } = gestureState
					if (numberActiveTouches > 1) {
						return
					}

					const { current: lowThumbX } = lowThumbXRef
					const { current: highThumbX } = highThumbXRef
					const { locationX: downX, pageX } = nativeEvent
					const containerX = pageX - downX

					const { low, high, min, max } = inPropsRef.current
					onSliderTouchStart?.(low, high)
					const containerWidth = containerWidthRef.current

					const lowPosition =
						thumbWidth / 2 + ((low - min) / (max - min)) * (containerWidth - thumbWidth)
					const highPosition =
						thumbWidth / 2 + ((high - min) / (max - min)) * (containerWidth - thumbWidth)

					const isLow = disableRange || isLowCloser(downX, lowPosition, highPosition)
					gestureStateRef.current.isLow = isLow

					const handlePositionChange = (positionInView: number) => {
						const { low, high, min, max, step } = inPropsRef.current
						const minValue = isLow ? min : low + minRange
						const maxValue = isLow ? high - minRange : max
						const value = clamp(
							getValueForPosition(
								positionInView,
								containerWidth,
								thumbWidth,
								min,
								max,
								step
							),
							minValue,
							maxValue
						)
						if (gestureStateRef.current.lastValue === value) {
							return
						}
						const availableSpace = containerWidth - thumbWidth
						const absolutePosition = ((value - min) / (max - min)) * availableSpace
						gestureStateRef.current.lastValue = value
						gestureStateRef.current.lastPosition = absolutePosition + thumbWidth / 2
						;(isLow ? lowThumbX : highThumbX).setValue(absolutePosition)
						onValueChanged?.(isLow ? value : low, isLow ? high : value, true)
						;(isLow ? setLow : setHigh)(value)
						updateSelectedRail()
					}
					handlePositionChange(downX)
					pointerX.removeAllListeners()
					pointerX.addListener(({ value: pointerPosition }) => {
						const positionInView = pointerPosition - containerX
						handlePositionChange(positionInView)
					})
				},

				onPanResponderMove: disabled
					? undefined
					: Animated.event([null, { moveX: pointerX }], { useNativeDriver: false }),

				onPanResponderRelease: () => {
					const { low, high } = inPropsRef.current
					onSliderTouchEnd?.(low, high)
				},
			}),
		[
			pointerX,
			inPropsRef,
			thumbWidth,
			disableRange,
			disabled,
			onValueChanged,
			setLow,
			setHigh,
			updateSelectedRail,
		]
	)

	return (
		<View {...restProps}>
			<View onLayout={handleContainerLayout} style={styles.controlsContainer}>
				<View style={railContainerStyles}>
					{renderRail()}
					<Animated.View style={selectedRailStyle}>{renderRailSelected()}</Animated.View>
				</View>
				<>
					<Animated.Text
						style={[
							lowStyles,
							Style.txt14_secondary,
							{ position: 'absolute', top: -sizes.s22, left: sizes.s8 },
						]}>
						{x}
					</Animated.Text>
					<Animated.View style={lowStyles}>{lowThumb}</Animated.View>
				</>
				{!disableRange && (
					<>
						<Animated.Text
							style={[
								highStyles,
								Style.txt14_secondary,
								{ top: -sizes.s24, left: sizes.s8 },
							]}>
							{y}
						</Animated.Text>
						<Animated.View style={highStyles}>{highThumb}</Animated.View>
					</>
				)}
				<View {...panHandlers} style={styles.touchableArea} collapsable={false} />
			</View>
		</View>
	)
}

export default forwardRef(Slider)
