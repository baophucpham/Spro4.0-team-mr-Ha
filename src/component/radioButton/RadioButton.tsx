import { images } from 'assets'
import Buttons from 'component/button/Buttons'
import { sizes, Style } from 'core'
import { isEmpty, isEqual } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Image, FlatList, Text, TouchableOpacity, View } from 'react-native'
import { Device } from 'utils'

export interface RadioButtonProps {
	closeOntouch?: boolean
	requestClose?: (callback?: any) => void
	data?: any[]
	value?: any
	onChange?: (value: any) => void
	labelKey?: string
	radioTitle?: string
	radioSubtitle?: string
	radioBuuttonTitle?: string
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
}) => {
	const [selected, setSelected] = useState<any>(value)

	useEffect(() => {
		// selected is not empty & closeOntouch = true
		if (!isEmpty(selected) && closeOntouch) {
			onChange?.(selected)
		}
	}, [selected])

	const renderText = () => (
		<View style={Style.ph24}>
			{Boolean(radioTitle) && <Text style={[Style.h6, Style.top16]}>{radioTitle}</Text>}
			{Boolean(radioSubtitle) && (
				<Text style={[Style.txt14_secondary, Style.top4, Style.bottom24]}>{radioSubtitle}</Text>
			)}
		</View>
	)

	const renderItem = ({ item }: any) => {
		const selectedItem = isEqual(selected, item)
		return (
			<TouchableOpacity
				activeOpacity={0.7}
				style={[Style.row_between, Style.ph24, Style.pv10]}
				onPress={() => {
					closeOntouch && requestClose?.()
					setSelected(item)
				}}>
				<Text style={Style.txt16}>{item[labelKey] || ''}</Text>
				<Image source={selectedItem ? images.ic_radio_checked : images.ic_radio} />
			</TouchableOpacity>
		)
	}

	return (
		<View style={{ paddingBottom: sizes.s16 + Device.getBottomSpace() }}>
			<FlatList
				data={data}
				renderItem={renderItem}
				ListHeaderComponent={renderText()}
				keyExtractor={(e, i) => String(e?.id || i)}
			/>
			{!closeOntouch && (
				<Buttons
					style={[Style.mh24, Style.top16]}
					title={radioBuuttonTitle}
					onPress={() => {
						requestClose?.()
						onChange?.(selected)
					}}
				/>
			)}
		</View>
	)
}

export default RadioButton
