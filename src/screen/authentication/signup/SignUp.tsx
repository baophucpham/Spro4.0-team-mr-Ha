import { images } from 'assets';
import { Buttons, Flex, Input } from 'component';
import { strings } from 'core';
import { Style } from 'core/index';
import { ScreenProps } from 'model';
import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { styles } from '../login/Login';

const SignUp: React.FC<ScreenProps> = ({ navigation }) => {
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');

	useEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	const onPress = () => {};

	return (
		<Flex style={Style.flex} safeFooter={false} keyboardOffset={1}>
			<ImageBackground source={images.background_login} style={styles.background}>
				<View style={styles.container}>
					<Text style={[Style.h4, Style.bold, Style.txtCenter]}>{strings.signup}</Text>
					<Input placeholder={strings.username} value={username} onChangeText={setUsername} />
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
						// disabled={!username || !password}
						onPress={onPress}
					/>
				</View>
			</ImageBackground>
		</Flex>
	);
};

export default SignUp;
