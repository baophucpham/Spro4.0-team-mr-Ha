import { registerAction } from 'action/authenAction'
import { images } from 'assets'
import { Screens } from 'common'
import { Buttons, Flex, SocialButton, TextInputAnimated } from 'component'
import { Navigator, Style } from 'core'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { styles } from '../login/Login'

const SignUp: React.FC = () => {
	const [username, setUserName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [confirmpassword, setConfirmPassword] = useState<string>('')

	const dispatch = useDispatch()

	const goToTerm = () => Navigator.navigate(Screens.TermOfService)

	const goToPolicy = () => Navigator.navigate(Screens.PrivacyPolicy)

	const getDisabledButton = () => {
		if (!username || !email || !password || !confirmpassword) {
			return true
		}

		if (password !== confirmpassword) {
			return true
		}

		return false
	}

	const onPressRegister = () => {
		dispatch(
			registerAction({
				username: username.trim(),
				email: email.toLowerCase().trim(),
				password: password.trim(),
			})
		)
	}

	return (
		<Flex style={styles.container} scrollable>
			<Text style={Style.h3}>Sign Up</Text>
			<TextInputAnimated
				iconLeft={images.ic_user}
				label="Username"
				value={username}
				onChangeText={setUserName}
				autoCapitalize="words"
			/>
			<TextInputAnimated
				iconLeft={images.ic_user}
				label="Email"
				keyboardType={'email-address'}
				value={email}
				onChangeText={setEmail}
			/>
			<TextInputAnimated
				iconLeft={images.ic_lock}
				label="Password"
				isPassword
				value={password}
				onChangeText={setPassword}
			/>
			<TextInputAnimated
				iconLeft={images.ic_lock}
				label="Comfirm password"
				isPassword
				value={confirmpassword}
				onChangeText={setConfirmPassword}
			/>
			<Text style={[Style.txt16, Style.top16]}>
				By signing up, you argee to our{' '}
				<Text style={styles.txt_primary} onPress={goToTerm}>
					Term of Service{' '}
				</Text>
				and{' '}
				<Text style={styles.txt_primary} onPress={goToPolicy}>
					Privacy Policy
				</Text>
			</Text>
			<Buttons
				title="Sign Up"
				style={[Style.top24, Style.bottom40]}
				disabled={getDisabledButton()}
				onPress={onPressRegister}
			/>
			<View style={[Style.row_center, { alignItems: 'flex-end' }]}>
				<View style={styles.border} />
				<Text style={Style.txt12_secondary}>or continue with</Text>
				<View style={styles.border} />
			</View>
			<SocialButton />
		</Flex>
	)
}

export default SignUp
