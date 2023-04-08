import { verifyEmailCodeAction } from 'action/authenAction';
import { images } from 'assets';
import { Buttons, Flex, Input } from 'component';
import { strings } from 'core';
import { colors, sizes, Style } from 'core/index';
import { ScreenProps } from 'model';
import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

const InputCode: React.FC<ScreenProps> = ({ navigation, route }) => {
	const { email } = route?.params || {};
	const [code, setCode] = useState<string>('');
	const dispatch = useDispatch();

	useEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	const onPress = () => {
		dispatch(verifyEmailCodeAction({ email, code }));
	};

	return (
		<Flex style={Style.flex} safeFooter={false} keyboardOffset={1}>
			<ImageBackground source={images.background_onboard} style={styles.background}>
				<View style={styles.container}>
					<Image source={images.logo_spro} style={styles.logo} />
					<Text style={styles.title}>{strings.pleaseInputCodeFirstLogin}</Text>
					<Input
						placeholder={strings.inputCode}
						value={code}
						onChangeText={setCode}
						autoCapitalize="characters"
					/>
					<Buttons
						title={strings.continue}
						style={Style.top32}
						disabled={!code}
						onPress={onPress}
					/>
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
