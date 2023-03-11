import { MutableRefObject, useCallback, useMemo, useRef, useState } from 'react'
import { Animated, I18nManager } from 'react-native'
import { clamp } from './helpers'

/**
 * low and high state variables are fallbacks for props (props are not required).
 * This hook ensures that current low and high are not out of [min, max] range.
 * It returns an object which contains:
 * - ref containing correct low, high, min, max and step to work with.
 * - setLow and setHigh setters
 * @param lowProp
 * @param highProp
 * @param min
 * @param max
 * @param step
 * @returns {{inPropsRef: React.MutableRefObject<{high: (*|number), low: (*|number)}>, setLow: (function(number): undefined), setHigh: (function(number): undefined)}}
 */
export const useLowHigh = (
	lowProp: number | undefined,
	highProp: number | undefined,
	min: number,
	max: number,
	step: number
) => {
	const [x, setX] = useState(min)
	const [y, setY] = useState(max)
	const validLowProp = lowProp === undefined ? min : clamp(lowProp, min, max)
	const validHighProp = highProp === undefined ? max : clamp(highProp, min, max)
	const inPropsRef = useRef({
		low: validLowProp,
		high: validHighProp,
		step,
		// These 2 fields will be overwritten below.
		min: validLowProp,
		max: validHighProp,
	})
	const { low: lowState, high: highState } = inPropsRef.current
	const inPropsRefPrev = { lowPrev: lowState, highPrev: highState }

	// Props have higher priority.
	// If no props are passed, use internal state variables.
	const low = clamp(lowProp === undefined ? lowState : lowProp, min, max)
	const high = clamp(highProp === undefined ? highState : highProp, min, max)

	// Always update values of refs so pan responder will have updated values
	Object.assign(inPropsRef.current, { low, high, min, max })

	const setLow = (value: number) => {
		inPropsRef.current.low = value
		setX(value)
	}
	const setHigh = (value: number) => {
		inPropsRef.current.high = value
		setY(value)
	}

	return { inPropsRef, inPropsRefPrev, setLow, setHigh, x, y }
}

/**
 * Sets the current value of widthRef and calls the callback with new width parameter.
 * @param widthRef
 * @param callback
 * @returns {function({nativeEvent: *}): void}
 */
export const useWidthLayout = (
	widthRef: MutableRefObject<number>,
	callback?: (width: number) => void
) => {
	return useCallback(
		({ nativeEvent }: any) => {
			const {
				layout: { width },
			} = nativeEvent
			const { current: w } = widthRef
			if (w !== width) {
				widthRef.current = width
				if (callback) {
					callback(width)
				}
			}
		},
		[callback, widthRef]
	)
}

interface InProps {
	low: number
	high: number
	min: number
	max: number
	step: number
}

export const useSelectedRail = (
	inPropsRef: MutableRefObject<InProps>,
	containerWidthRef: MutableRefObject<number>,
	thumbWidth: number,
	disableRange: boolean
): any => {
	const { current: left } = useRef(new Animated.Value(0))
	const { current: right } = useRef(new Animated.Value(0))
	const update = useCallback(() => {
		const { low, high, min, max } = inPropsRef.current
		const { current: containerWidth } = containerWidthRef
		const fullScale = (max - min) / (containerWidth - thumbWidth)
		const leftValue = (low - min) / fullScale
		const rightValue = (max - high) / fullScale
		left.setValue(disableRange ? 0 : leftValue)
		right.setValue(disableRange ? containerWidth - thumbWidth - leftValue : rightValue)
	}, [inPropsRef, containerWidthRef, disableRange, thumbWidth, left, right])
	const styles = useMemo(
		() => ({
			position: 'absolute',
			left: I18nManager.isRTL ? right : left,
			right: I18nManager.isRTL ? left : right,
		}),
		[left, right]
	)
	return [styles, update]
}
