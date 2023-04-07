import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Style, sizes, colors } from 'core';
import Icon from 'component/image/Icon';
import { images } from 'assets';
import { format } from 'date-fns';

const ItemNotification: React.FC<ItemNoticationProps> = ({ title, date, isRead }) => {
	return (
		<TouchableOpacity
			style={[styles.container, { backgroundColor: isRead ? colors.white : colors.blue2 }]}>
			<Icon source={images.ic_notification_1} size={sizes.s48} />
			<View style={styles.content}>
				<Text style={[Style.txt14, Style.bold]}>{title}</Text>
				<Text style={[Style.txt12, Style.top4, { color: colors.ink2 }]}>
					{format(new Date(date), 'dd LLLL p')}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default ItemNotification;

const styles = StyleSheet.create({
	container: {
		...Style.ph16,
		...Style.row,
	},
	content: {
		flex: 1,
		marginLeft: sizes.s16,
		...Style.borderBottom,
		...Style.pv8,
	},
});
