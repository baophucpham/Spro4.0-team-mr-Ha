import { StyleSheet, Text, View } from 'react-native';
import React, { memo } from 'react';
import { Style, sizes, colors } from 'core';
import Icon from 'component/image/Icon';
import { avatarUri } from 'utils';
import { ItemCommentProps } from 'model';
import { format } from 'date-fns';

const ItemComment: React.FC<ItemCommentProps> = ({
	avatar,
	username,
	date = new Date(),
	content,
	isReply,
}) => {
	return (
		<View style={[styles.container, isReply && { marginLeft: sizes.s32 }]}>
			<Icon source={avatarUri(avatar)} size={sizes.s24} radius={16} />
			<View style={styles.content}>
				<Text>
					<Text style={[Style.txt14, Style.bold]}>{username}</Text>
					<Text style={[Style.txt12_secondary]}>
						{'   ' + format(new Date(date), 'dd LLLL p')}
					</Text>
				</Text>
				<Text style={[Style.txt14, Style.top8]}>{content}</Text>
				<View style={Style.row}>
					<Text style={styles.txt_reply}>Reply</Text>
				</View>
			</View>
		</View>
	);
};

export default memo(ItemComment);

const styles = StyleSheet.create({
	container: {
		...Style.row_start,
		...Style.ph16,
		paddingTop: sizes.s12,
	},
	content: {
		flex: 1,
		marginLeft: sizes.s8,
		paddingBottom: sizes.s12,
		...Style.borderBottom,
	},
	txt_reply: {
		marginTop: sizes.s4,
		...Style.txt14,
		...Style.bold,
		color: colors.blue,
	},
});
