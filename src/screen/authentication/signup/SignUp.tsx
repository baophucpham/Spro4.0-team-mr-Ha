import { signUpAction } from 'action/authenAction';
import { images } from 'assets';
import { Buttons, Flex, Input } from 'component';
import { Navigator, strings } from 'core';
import { Style } from 'core/index';
import { ScreenProps } from 'model';
import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { styles } from '../login/Login';

const SignUp: React.FC<ScreenProps> = ({ navigation }) => {
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const dispatch = useDispatch();

	useEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	const onPress = () => {
		dispatch(signUpAction({ email: username, password, confirmPassword }));
	};

	return (
		<Flex style={Style.flex} safeFooter={false} keyboardOffset={1}>
			<ImageBackground source={images.background_login} style={styles.background}>
				<View style={styles.container}>
					<Text style={[Style.h4, Style.bold, Style.txtCenter]}>{strings.signup}</Text>
					<Input
						placeholder={strings.username}
						value={username}
						onChangeText={setUsername}
						keyboardType="email-address"
					/>
					<Input
						isPassword
						placeholder={strings.password}
						value={password}
						onChangeText={setPassword}
					/>
					<Input
						isPassword
						placeholder={strings.confirmPassword}
						value={confirmPassword}
						onChangeText={setConfirmPassword}
					/>

					<Buttons
						title={strings.signup}
						style={Style.top32}
						disabled={!username || !password || password !== confirmPassword}
						onPress={onPress}
					/>
					<Text
						onPress={() => Navigator.goBack()}
						style={[Style.txt16_blue, Style.top8, Style.txtCenter]}>
						{strings.login}
					</Text>
				</View>
			</ImageBackground>
		</Flex>
	);
};

export default SignUp;
