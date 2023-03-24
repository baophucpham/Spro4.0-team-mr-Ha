import Buttons from 'component/button/Buttons';
import { colors, Style } from 'core';
import React, { useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DatePickerWheel from 'react-native-date-picker';

export interface DatePickerProps {
	value?: Date;
	onChange?: (value: Date) => void;
	title?: string;
	minDate?: Date;
	maxDate?: Date;
	requestClose?: () => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
	value = new Date(),
	onChange = (d = new Date()) => {},
	title = 'Chọn ngày',
	maxDate,
	minDate,
	requestClose,
}) => {
	const currentDate = useRef<any>();
	return (
		<View style={Style.ph16}>
			<Text style={[Style.h4, Style.top32, Style.txtCenter]}>{title}</Text>
			<DatePickerWheel
				style={[Style.top16, styles.container]}
				date={value}
				onDateChange={(data) => {
					onChange(data);
					currentDate.current = data;
				}}
				mode="date"
				locale="en"
				textColor={colors.black}
				maximumDate={maxDate}
				minimumDate={minDate}
			/>
			<Buttons
				title="Ok"
				isSafe
				style={Style.top16}
				onPress={() => {
					if (currentDate.current) {
						requestClose?.();
					} else {
						requestClose?.();
						onChange(new Date());
					}
				}}
			/>
		</View>
	);
};

export default DatePicker;
const styles = StyleSheet.create({
	container: {
		alignSelf: 'center',
	},
});
