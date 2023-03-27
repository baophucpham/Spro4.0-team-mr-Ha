import { StyleSheet } from 'react-native';
import { colors, sizes, Style } from 'core';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.separator,
	},
	block: {
		backgroundColor: colors.white,
		padding: sizes.s16,
		...Style.top8,
	},
	item: {
		...Style.row_between,
		...Style.borderBottom,
		...Style.pv16,
	},
});
