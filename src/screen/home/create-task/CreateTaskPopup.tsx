import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors, Navigator, sizes, strings, Style } from 'core';
import { images } from 'assets';
import { Icon } from 'component';
import { Screens } from 'common';

const CreateTaskPopup: React.FC<any> = ({ requestClose }) => {
	const DATA = [
		{
			title: strings.createTask,
			subtitle: strings.subtitleCreateTaskPopup,
			icon: images.ic_add_task2,
			onPress: () => {
				requestClose(() => Navigator.navigate(Screens.CreateTask));
			},
		},
		{
			title: strings.createTicket,
			subtitle: strings.subtitleCreateTicketPopup,
			icon: images.ic_add_ticket,
			onPress: () => {
				requestClose(() => Navigator.navigate(Screens.CreateTicket));
			},
		},
	];
	return (
		<View style={styles.container}>
			{DATA.map((item, index) => (
				<TouchableOpacity
					style={[Style.row_start, Style.bottom12]}
					key={String(index)}
					onPress={item.onPress}>
					<Icon source={item.icon} size={sizes.s24} style={Style.right16} />
					<View
						style={[
							index === 0 && Style.borderBottom,
							Style.flex,
							{ paddingBottom: sizes.s12 },
						]}>
						<Text style={Style.txt16_bold}>{item.title}</Text>
						<Text style={[Style.txt14, Style.top4, { color: colors.ink2 }]}>
							{item.subtitle}
						</Text>
					</View>
				</TouchableOpacity>
			))}
		</View>
	);
};

export default CreateTaskPopup;

const styles = StyleSheet.create({
	container: {
		...Style.pv24,
		...Style.ph16,
	},
});
