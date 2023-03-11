import { colors, sizes, Style } from 'core'
import React from 'react'
import { StyleSheet, Text } from 'react-native'
interface Props {
	size?: number
}

const Logo: React.FC<Props> = ({ size = sizes.s20 }) => {
	return (
		<Text style={[styles.txt, { fontSize: size }]}>
			<Text style={{ color: colors.primary }}>H</Text>a
			<Text style={{ color: colors.orange }}>p</Text>
			<Text style={{ color: colors.cyan }}>p</Text>y{' '}
			<Text style={{ color: colors.primary }}>H</Text>I
			<Text style={{ color: colors.orange }}>V</Text>
		</Text>
	)
}

export default Logo

const styles = StyleSheet.create({
	txt: {
		...Style.bold,
		color: colors.title,
	},
})
