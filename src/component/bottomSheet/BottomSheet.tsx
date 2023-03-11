import { images } from 'assets'
import { colors, screenHeight, sizes, Style } from 'core'
import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
export interface BottomSheetProps {
	screen?: any
	title?: string
	ref?: any
	hideTitle?: boolean
	style?: any
	titlePosition?: 'left' | 'center'
	onClose?: () => void
}
let height = screenHeight * 0.6

const BottomSheet: React.FC<BottomSheetProps> = forwardRef((props: BottomSheetProps, ref: any) => {
	const translateY = useRef(new Animated.Value(height)).current
	const time = 250
	useImperativeHandle(ref, () => ({
		close: slideDown,
	}))

	useEffect(() => {
		slideUp()
	}, [])

	const slideUp = (): void => {
		Animated.timing(translateY, {
			toValue: 0,
			duration: time,
			useNativeDriver: true,
		}).start()
	}

	const slideDown = (callBack: any): void => {
		Animated.timing(translateY, {
			toValue: height,
			duration: time,
			useNativeDriver: true,
		}).start(() => {
			setTimeout(() => {
				callBack?.()
			}, time / 2)
		})
	}

	const ScreenComponent = props.screen

	return (
		<Animated.View
			onLayout={(e) => (height = e.nativeEvent.layout.height)}
			style={[styles.bottomSheet, { transform: [{ translateY }] }, props.style]}>
			{!props.hideTitle && (
				<View style={[styles.titleView]}>
					<Text
						style={[
							styles.title,
							props.titlePosition === 'left' ? styles.titleLeft : undefined,
						]}>
						{props.title}
					</Text>
					<TouchableOpacity style={styles.btn_close} onPress={props.onClose}>
						<Image source={images.ic_close} style={Style.icon20} />
					</TouchableOpacity>
				</View>
			)}
			<ScreenComponent {...props} requestClose={props.onClose} />
		</Animated.View>
	)
})

export default BottomSheet

const styles = StyleSheet.create({
	bottomSheet: {
		backgroundColor: colors.white,
		borderTopLeftRadius: sizes.s32,
		borderTopRightRadius: sizes.s32,
		width: '100%',
		maxHeight: screenHeight * 0.9,
	},
	titleView: {
		paddingVertical: sizes.s16,
		paddingHorizontal: sizes.s24,
		borderBottomColor: colors.divider,
		borderBottomWidth: sizes.s1,
		...Style.row_center,
		height: sizes.s60,
	},
	title: {
		textAlign: 'center',
		...Style.h6,
	},
	titleLeft: {
		position: 'absolute',
		left: sizes.s24,
	},
	btn_close: {
		padding: sizes.s12,
		position: 'absolute',
		right: sizes.s12,
	},
})
