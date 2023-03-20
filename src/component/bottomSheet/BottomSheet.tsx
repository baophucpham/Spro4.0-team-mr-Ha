import Icon from 'component/image/Icon';
import { colors, screenHeight, sizes, Style } from 'core';
import { BottomSheetProps } from 'model/Component';
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

const BottomSheet: React.FC<BottomSheetProps> = forwardRef((props: BottomSheetProps, ref: any) => {
	const {
		style,
		screen,
		showHeader = true,
		onClose,
		iconLeft,
		iconRight,
		onPressIconLeft,
		onPressIconRight,
		title,
	} = props || {};

	const [viewHeight, setViewHeight] = useState<number>(0);
	const translateY = new Animated.Value(viewHeight);
	const time = 250;

	useImperativeHandle(ref, () => ({
		close: slideDown,
	}));

	useEffect(() => {
		viewHeight > 0 && slideUp();
	}, [viewHeight]);

	const slideUp = (): void => {
		Animated.timing(translateY, {
			toValue: 0,
			duration: time,
			useNativeDriver: true,
		}).start();
	};

	const slideDown = (callBack: any): void => {
		Animated.timing(translateY, {
			toValue: viewHeight,
			duration: time,
			useNativeDriver: true,
		}).start(() => {
			setTimeout(() => {
				callBack?.();
			}, time / 2);
		});
	};
	const ScreenComponent = screen;

	const renderHeader = () => {
		if (showHeader) {
			return (
				<View style={styles.header}>
					<Icon
						source={iconLeft}
						size={sizes.s24}
						style={{ padding: sizes.s4 }}
						onPress={() => onPressIconLeft?.(onClose)}
					/>
					<Text style={Style.txt16}>{title}</Text>
					<Icon
						source={iconRight}
						size={sizes.s24}
						style={{ padding: sizes.s4 }}
						onPress={() => onPressIconRight?.(onClose)}
					/>
				</View>
			);
		}
	};

	return (
		<Animated.View
			onLayout={(e) => setViewHeight(e.nativeEvent.layout.height)}
			style={[styles.bottomSheet, { transform: [{ translateY }] }, style]}>
			{renderHeader()}
			<ScreenComponent {...props} requestClose={onClose} />
		</Animated.View>
	);
});

export default BottomSheet;

const styles = StyleSheet.create({
	bottomSheet: {
		backgroundColor: colors.white,
		borderTopLeftRadius: sizes.s12,
		borderTopRightRadius: sizes.s12,
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
	header: {
		...Style.row_between,
		...Style.p10,
		...Style.borderBottom,
	},
});
