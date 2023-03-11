import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, Style } from 'core'
import { GenderData } from 'common/data'
import { isEqual } from 'lodash'

interface Props {
	title?: string
	value?: any
	onChange?: (value?: any) => void
}

const Gender: React.FC<Props> = (props) => {
	return (
		<View style={Style.top16}>
			<Text style={[Style.txt12_secondary, Style.left16, Style.bottom8]}>{props.title}</Text>
			<View style={Style.row}>
				{GenderData.map((item, index) => {
					const isSelected = isEqual(props.value, item.value)
					return (
						<TouchableOpacity
							activeOpacity={0.7}
							key={String(index)}
							style={[styles.item, isSelected && { backgroundColor: colors.primary_700 }]}
							onPress={() => props?.onChange?.(item.value)}>
							<Image
								source={item.icon}
								style={[
									Style.icon24,
									Style.right4,
									isSelected && { tintColor: colors.white },
								]}
							/>
							<Text style={[Style.txt16_secondary, isSelected && { color: colors.white }]}>
								{item.title}
							</Text>
						</TouchableOpacity>
					)
				})}
			</View>
		</View>
	)
}

export default Gender

const styles = StyleSheet.create({
	item: {
		...Style.row,
		backgroundColor: colors.input_background,
		...Style.ph16,
		...Style.pv10,
		...Style.radius16,
		...Style.right16,
	},
})
