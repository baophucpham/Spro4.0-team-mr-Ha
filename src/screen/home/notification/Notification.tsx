import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { TabScreenProps } from 'model';
import { strings, Style, colors, sizes } from 'core';
import { Flex, Input, ItemNotification, Separator } from 'component';
import { NotificationData } from 'common/data';

const Notification: React.FC<TabScreenProps> = ({ navigation }) => {
	useEffect(() => {
		navigation.setOptions({
			headerLeft: undefined,
			title: strings.notification,
		});
	}, []);

	const renderItemNoti = ({ item }: any) => <ItemNotification {...item} />;

	return (
		<Flex>
			<Separator height={2} />
			<View style={styles.topbar}>
				<Input
					placeholder="ABC"
					isPicker
					style={{
						width: '48%',
					}}
					inputContainerStyle={styles.input}
				/>
				<Text style={[Style.txt14, { color: colors.blue }]}>Đã đọc tất cả</Text>
			</View>
			<FlatList
				data={NotificationData}
				keyExtractor={(e) => String(e.id)}
				showsVerticalScrollIndicator={false}
				renderItem={renderItemNoti}
			/>
		</Flex>
	);
};

export default Notification;

const styles = StyleSheet.create({
	topbar: {
		...Style.ph16,
		...Style.ph10,
		...Style.row_between,
		marginBottom: sizes.s16,
	},
	input: {
		borderRadius: sizes.s32,
	},
});
