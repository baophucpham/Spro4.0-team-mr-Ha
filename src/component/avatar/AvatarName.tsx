import { images } from 'assets'
import { sizes, Style } from 'core'
import React from 'react'
import {
	Image,
	ImageSourcePropType,
	StyleProp,
	StyleSheet,
	Text,
	TextStyle,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
	ViewStyle,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import { avatarUri } from 'utils'

interface Props {
	avatar?: string
	name?: string | any
	nameStyle?: StyleProp<TextStyle>
	subtitle?: string | any
	subtitleStyle?: StyleProp<TextStyle>
	style?: StyleProp<ViewStyle>
	onPress?: () => void
	disablePressText?: boolean
	avatarSize?: number
	isOnline?: boolean
	textViewStyle?: StyleProp<ViewStyle>
	footer?: any
	showIcon?: boolean
	icon?: ImageSourcePropType
	onPressIcon?: () => void
	sharePost?: boolean
	nameNumberOfLines?: number
}

const AvatarName: React.FC<Props> = ({
	avatar = '',
	avatarSize = sizes.s48,
	name = '',
	subtitle = '',
	style,
	nameStyle,
	subtitleStyle,
	isOnline,
	onPress,
	disablePressText,
	textViewStyle,
	footer = null,
	showIcon = false,
	icon = images.ic_more,
	onPressIcon,
	sharePost = false,
	nameNumberOfLines = 1,
}) => {
	return (
		<View style={[Style.row_between, style]}>
			<View style={Style.row_start}>
				<TouchableWithoutFeedback onPress={onPress} disabled={!onPress}>
					<View>
						<FastImage
							source={avatarUri(avatar)}
							style={[{ width: avatarSize, height: avatarSize, borderRadius: avatarSize }]}
						/>
					</View>
				</TouchableWithoutFeedback>
				<View style={[Style.left12, textViewStyle, { width: '70%' }]}>
					<Text
						style={[Style.txt16, Style.semibold, nameStyle, Style.flex]}
						numberOfLines={sharePost ? 0 : nameNumberOfLines}
						onPress={disablePressText ? undefined : onPress}>
						{name}
					</Text>

					{Boolean(subtitle) && (
						<Text
							style={[Style.txt12_secondary, Style.top4, subtitleStyle, Style.flex]}
							numberOfLines={1}
							onPress={disablePressText ? undefined : onPress}>
							{subtitle}
						</Text>
					)}
					{footer}
				</View>
			</View>
			{showIcon && (
				<TouchableOpacity style={styles.btn_more} onPress={onPressIcon}>
					<Image source={icon} style={Style.icon16} />
				</TouchableOpacity>
			)}
		</View>
	)
}

export default AvatarName
const styles = StyleSheet.create({
	btn_more: {
		padding: sizes.s10,
		marginRight: -sizes.s5,
	},
})
