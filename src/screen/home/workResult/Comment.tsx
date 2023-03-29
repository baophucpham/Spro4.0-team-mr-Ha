import { FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { ScreenProps } from 'model';
import { Flex, Icon, Input, ItemComment } from 'component';
import { CommentData } from 'common/data';
import { sizes, Style } from 'core';
import { avatarUri } from 'utils';
import { images } from 'assets';

const Comment: React.FC<ScreenProps> = ({ navigation }) => {
	useEffect(() => {
		navigation.setOptions({
			title: 'Comment',
		});
	}, []);

	const renderItem = ({ item }: any) => {
		return <ItemComment {...item} />;
	};

	const inputView = () => {
		return (
			<View style={styles.inputContainer}>
				<Icon source={avatarUri('')} size={sizes.s32} radius={32} />
				<Input
					placeholder="Type Something"
					style={[Style.flex, Style.mh12, { marginTop: 0 }]}
				/>
				<Icon source={images.ic_send} size={sizes.s24} />
			</View>
		);
	};

	return (
		<Flex safeFooter style={Style.flex}>
			<FlatList
				contentContainerStyle={[Style.flexGrow, { paddingBottom: sizes.s16 }]}
				data={CommentData}
				renderItem={renderItem}
				keyExtractor={(item) => String(item.id)}
			/>
			{inputView()}
		</Flex>
	);
};

export default Comment;

const styles = StyleSheet.create({
	inputContainer: {
		...Style.row,
		...Style.p16,
		...Style.row,
		...Style.borderTop,
	},
});
