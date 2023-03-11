import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, sizes, Style } from 'core'
import FastImage from 'react-native-fast-image'
import { Device } from 'utils'

export interface PopUpActionProps {
	closeOntouch?: boolean // auto close popup when press any item
	requestClose?: (callback?: () => void) => void
	data: {
		icon?: any
		title?: string | any
		onPress?: () => void
		titleColor?: string
		closeOntouchItem?: boolean // auto close popup when press each item
		isShow?: boolean
	}[]
}

const PopUpAction: React.FC<PopUpActionProps> = ({
	requestClose,
	data = [],
	closeOntouch = true,
}) => {
	const renderItem = () => {
		return data?.map((item, index) => {
			const {
				closeOntouchItem = true,
				icon = '',
				title = '',
				onPress = () => {},
				titleColor = '',
				isShow = true,
			} = item

			return (
				<View key={String(index)}>
					{isShow && (
						<TouchableOpacity
							key={String(index)}
							style={[Style.row, Style.pv10]}
							activeOpacity={0.7}
							onPress={() => {
								if (closeOntouch) {
									closeOntouchItem ? requestClose?.(onPress) : onPress?.()
								} else {
									onPress?.()
								}
							}}>
							<FastImage source={icon} style={[Style.icon24, Style.right12]} />
							<Text
								style={{
									...Style.txt16,
									color: titleColor || colors.secondary_text,
								}}>
								{title}
							</Text>
						</TouchableOpacity>
					)}
				</View>
			)
		})
	}
	return <View style={styles.container}>{renderItem()}</View>
}

export default PopUpAction

const styles = StyleSheet.create({
	container: {
		...Style.ph24,
		paddingTop: sizes.s24,
		paddingBottom: sizes.s24 + Device.getBottomSpace(),
	},
	item: {
		...Style.pv10,
	},
})
