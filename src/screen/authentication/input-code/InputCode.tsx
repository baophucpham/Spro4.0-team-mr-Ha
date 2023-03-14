import { images } from 'assets';
import { Screens } from 'common';
import { Buttons, Flex, Input } from 'component';
import { colors, Navigator, sizes, Style } from 'core/index';
import { ScreenProps } from 'model';
import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

const InputCode: React.FC<ScreenProps> = ({ navigation }) => {
	const [code, setCode] = useState<string>('');

	useEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	const onPress = () => {
		Navigator.navigate(Screens.Login);
	};

	return (
		<Flex style={Style.flex} safeFooter={false} keyboardOffset={1}>
			<ImageBackground source={images.background_onboard} style={styles.background}>
				<View style={styles.container}>
					<Image source={images.logo_spro} style={styles.logo} />
					<Text style={styles.title}>Vui lòng nhập code khách hàng cho lần đầu đăng nhập</Text>
					<Input
						placeholder="Nhập mã"
						value={code}
						onChangeText={setCode}
						autoCapitalize="characters"
					/>
					<Buttons title="Tiếp tục" style={Style.top32} disabled={!code} onPress={onPress} />
				</View>
			</ImageBackground>
		</Flex>
	);
};

export default InputCode;

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		...Style.shadow5,
		...Style.ph24,
		borderRadius: sizes.s16,
		width: '85%',
		backgroundColor: 'rgba(255, 255, 255, 0.9)',
		paddingVertical: sizes.s48,
	},
	logo: {
		width: sizes.s106,
		height: sizes.s48,
		alignSelf: 'center',
	},
	title: {
		...Style.txt14,
		color: colors.ink2,
		marginTop: sizes.s32,
		marginBottom: sizes.s4,
	},
});
