import { colors, Style } from 'core'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DatePickerWheel from 'react-native-date-picker'

export interface DatePickerProps {
	value?: Date
	onChange?: (value: Date) => void
	title?: string
	minDate?: Date
	maxDate?: Date
}

const DatePicker: React.FC<DatePickerProps> = ({
	value = new Date(),
	onChange = (d = new Date()) => {},
	title,
	maxDate,
	minDate,
}) => {
	return (
		<View style={styles.container}>
			<Text style={[Style.h4, Style.top32]}>{title}</Text>
			<DatePickerWheel
				style={Style.top16}
				date={value}
				onDateChange={onChange}
				mode="date"
				locale="en"
				textColor={colors.black}
				maximumDate={maxDate}
				minimumDate={minDate}
			/>
		</View>
	)
}

export default DatePicker
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
})
