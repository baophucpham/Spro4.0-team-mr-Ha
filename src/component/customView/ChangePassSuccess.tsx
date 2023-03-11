import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from 'assets'
import { sizes, Style } from 'core'

const ChangePassSuccess = () => {
	return (
		<View style={styles.container}>
			<Image source={images.img_change_pass} style={styles.img} />
			<Text style={[Style.h4, Style.top16]}>Password changed!</Text>
			<Text style={[Style.txt16_secondary, Style.top16, Style.txtCenter]}>
				Awesome. You’re successfully{'\n'}updated your password.
			</Text>
		</View>
	)
}

export default ChangePassSuccess

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	img: {
		width: sizes.s106,
		height: sizes.s96,
		marginTop: sizes.s32,
	},
})
