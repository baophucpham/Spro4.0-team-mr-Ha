import { StyleSheet } from 'react-native';
import { colors, sizes, Style } from 'core';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.separator,
		paddingTop: sizes.s8,
	},
	block: {
		backgroundColor: colors.white,
		padding: sizes.s16,
	},
	item: {
		...Style.row_between,
		...Style.borderBottom,
	},
});
