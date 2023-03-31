import { images } from 'assets';
import { Navigator, Style } from 'core';
import React, { memo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Device } from 'utils';
import { loginGoogle } from 'utils/SocialAuthenUtils';

const SocialButton: React.FC = () => {
	const dispatch = useDispatch();
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
	];

	const onPressFacebookLogin = async () => {};

	const onPressGoolgeLogin = async () => {
		try {
			const data = await loginGoogle();
			Navigator.goHome();
		} catch (error) {}
	};

	const onPressAppleLogin = async () => {};

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
						);
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
	);
};

export default memo(SocialButton);

const styles = StyleSheet.create({
	button: {
		alignSelf: 'center',
	},
});
