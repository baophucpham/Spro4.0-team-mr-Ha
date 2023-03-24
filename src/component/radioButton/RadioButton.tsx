import { images } from 'assets';
import Buttons from 'component/button/Buttons';
import { sizes, Style } from 'core';
import { isEmpty, isEqual } from 'lodash';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Device } from 'utils';

export interface RadioButtonProps {
	closeOntouch?: boolean;
	requestClose?: (callback?: any) => void;
	data?: any[];
	value?: any;
	onChange?: (value: any) => void;
	labelKey?: string;
	radioTitle?: string;
	radioSubtitle?: string;
	radioBuuttonTitle?: string;
	horizontal?: boolean;
	itemStyle?: StyleProp<ViewStyle>;
}

const RadioButton: React.FC<RadioButtonProps> = ({
	closeOntouch = true,
	requestClose,
	data = [],
	value = null,
	labelKey = 'title',
	onChange = () => {},
	radioTitle,
	radioSubtitle,
	radioBuuttonTitle = 'ok',
	horizontal,
	itemStyle,
}) => {
	const [selected, setSelected] = useState<any>(value);

	useEffect(() => {
		// selected is not empty & closeOntouch = true
		if (!isEmpty(selected) && closeOntouch) {
			onChange?.(selected);
		}
	}, [selected]);

	const renderText = () => (
		<View style={Style.ph24}>
			{Boolean(radioTitle) && <Text style={[Style.h6, Style.top16]}>{radioTitle}</Text>}
			{Boolean(radioSubtitle) && (
				<Text style={[Style.txt14_secondary, Style.top4, Style.bottom24]}>{radioSubtitle}</Text>
			)}
		</View>
	);

	const renderItem = ({ item }: any) => {
		const selectedItem = isEqual(selected, item);
		return (
			<TouchableOpacity
				activeOpacity={0.7}
				style={[Style.row_between, Style.ph24, Style.pv10, itemStyle]}
				onPress={() => {
					closeOntouch && requestClose?.();
					setSelected(item);
				}}>
				<Image
					source={selectedItem ? images.ic_radio_checked : images.ic_radio}
					style={Style.right12}
				/>
				<Text style={Style.txt16}>{item[labelKey] || ''}</Text>
			</TouchableOpacity>
		);
	};

	return (
		<View>
			<FlatList
				data={data}
				renderItem={renderItem}
				ListHeaderComponent={renderText()}
				keyExtractor={(e, i) => String(e?.id || i)}
				horizontal={horizontal}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
			/>
			{!closeOntouch && (
				<Buttons
					style={[Style.mh24, Style.top16]}
					title={radioBuuttonTitle}
					isSafe
					onPress={() => {
						requestClose?.();
						onChange?.(selected);
					}}
				/>
			)}
		</View>
	);
};

export default RadioButton;
