import { images } from 'assets';
import { Screens, Stacks } from 'common';
import { Avatar, Flex, Icon, Separator } from 'component';
import { colors, Navigator, sizes, Style } from 'core';
import { TabScreenProps } from 'model';
import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const More: React.FC<TabScreenProps> = ({ navigation }) => {
	const Data = [
		{
			title: 'Settings',
			leftIcon: images.ic_setting,
			rightIcon: images.ic_next,
			onPress: () => Navigator.navigate(Screens.Setting),
		},
		{
			title: 'Logout',
			leftIcon: images.ic_logout,
			onPress: () => Navigator.reset(Stacks.AuthenStack),
		},
	];

	useEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<Flex safeHeader safeFooter={false} style={styles.container}>
			<View style={styles.header}>
				<Avatar size={sizes.s48} isEdit />
				<View style={Style.left12}>
					<Text style={Style.txt16}>Tran Tan Tai</Text>
					<Text style={Style.txt14_secondary}>abc@gmail.com</Text>
				</View>
			</View>
			<Separator height={sizes.s8} />
			{Data.map((item, index) => (
				<TouchableOpacity key={index} style={styles.item} onPress={item.onPress}>
					<View style={Style.row}>
						<Icon source={item.leftIcon} size={sizes.s24} style={Style.right12} />
						<Text style={Style.txt16}>{item.title}</Text>
					</View>
					<Icon source={item.rightIcon} size={sizes.s24} />
				</TouchableOpacity>
			))}
		</Flex>
	);
};

export default More;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.separator,
	},
	header: {
		...Style.p16,
		...Style.row,
		backgroundColor: colors.white,
	},
	item: {
		borderRadius: sizes.s8,
		paddingHorizontal: sizes.s16,
		paddingVertical: sizes.s12,
		backgroundColor: colors.white,
		marginTop: sizes.s8,
		...Style.row_between,
	},
});
