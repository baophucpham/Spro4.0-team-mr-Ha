import { images } from 'assets';
import { Stacks } from 'common';
import { Buttons, Flex, Input, ItemCheckbox, SocialButton } from 'component';
import { colors, Navigator, sizes, Style } from 'core/index';
import { ScreenProps } from 'model';
import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { strings } from 'core';

const Login: React.FC<ScreenProps> = ({ navigation }) => {
	const [username, setUsernam] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [isSaveLogin, setIsSaveLogin] = useState<boolean>(true);

	useEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	const onPress = () => {
		Navigator.reset(Stacks.HomeStack);
	};

	return (
		<Flex style={Style.flex} safeFooter={false} keyboardOffset={1}>
			<ImageBackground source={images.background_login} style={styles.background}>
				<View style={styles.container}>
					<Image source={images.logo_spro} style={styles.logo} />
					<Input placeholder={strings.username} value={username} onChangeText={setUsernam} />
					<Input
						isPassword
						placeholder={strings.password}
						value={password}
						onChangeText={setPassword}
					/>
					<ItemCheckbox
						style={Style.top16}
						isActive={isSaveLogin}
						title={strings.saveLogin}
						onChange={setIsSaveLogin}
					/>
					<Buttons
						title={strings.continue}
						style={Style.top32}
						// disabled={!username || !password}
						onPress={onPress}
					/>
					<SocialButton />
				</View>
			</ImageBackground>
		</Flex>
	);
};

export default Login;

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
