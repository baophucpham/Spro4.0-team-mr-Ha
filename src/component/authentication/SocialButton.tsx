import { loginSocialAction } from 'action/authenAction'
import { images } from 'assets'
import { Style } from 'core'
import React, { memo } from 'react'
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { Device, loginApple, loginFacebook, loginGoogle } from 'utils'

const SocialButton: React.FC = () => {
	const dispatch = useDispatch()
	const SocialArr = [
		{
			icon: images.ic_facebook,
			name: 'facebook',
			onPress: () => onPressFacebookLogin(),
			isShow: true,
		},
		{
			icon: images.ic_google,
			name: 'google',
			onPress: () => onPressGoolgeLogin(),
			isShow: true,
		},
		{
			icon: images.ic_apple,
			name: 'apple',
			onPress: () => onPressAppleLogin(),
			isShow: false,
		},
	]

	const onPressFacebookLogin = async () => {
		try {
			const userInfo = await loginFacebook()
			dispatch(
				loginSocialAction({
					type: 'facebook',
					body: userInfo,
				})
			)
		} catch (e: any) {
			Alert.alert('Alert', e)
		}
	}

	const onPressGoolgeLogin = async () => {
		try {
			const userInfo = await loginGoogle()
			dispatch(
				loginSocialAction({
					type: 'google',
					body: userInfo,
				})
			)
		} catch (e: any) {
			Alert.alert('Alert', e)
		}
	}

	const onPressAppleLogin = async () => {
		try {
			const userInfo: any = await loginApple()
			dispatch(
				loginSocialAction({
					type: 'apple',
					body: userInfo,
				})
			)
		} catch (e: any) {
			Alert.alert('Error', e)
		}
	}

	return (
		<View style={Style.top24}>
			<View style={Style.row_center}>
				{SocialArr.map((item, index) => {
					if (item.isShow) {
						return (
							<TouchableOpacity
								key={String(index)}
								onPress={item.onPress}
								style={[Style.p16, Style.border, Style.mh12]}
								activeOpacity={0.7}>
								<Image source={item.icon} style={Style.icon24} />
							</TouchableOpacity>
						)
					}
				})}
			</View>
			{Device.isIos && (
				<TouchableOpacity
					onPress={onPressAppleLogin}
					style={[Style.p16, Style.border, styles.button, Style.top16]}
					activeOpacity={0.7}>
					<View style={Style.row}>
						<Image source={images.ic_apple} style={Style.icon24} />
						<Text style={[Style.txt16, Style.left16]}>Sign in with Apple</Text>
					</View>
				</TouchableOpacity>
			)}
		</View>
	)
}

export default memo(SocialButton)

const styles = StyleSheet.create({
	button: {
		width: '60%',
		alignSelf: 'center',
	},
})
