import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import React from 'react';
import { colors, Navigator, sizes, Style } from 'core';
import FastImage from 'react-native-fast-image';
import { images } from 'assets';
import { Asset } from 'react-native-image-picker';
import { avatarUri } from 'utils';

interface Props {
	style?: StyleProp<ViewStyle>;
	avatar?: string;
	onChange?: (data: Asset) => void;
	isEdit?: boolean;
	size?: number;
	disabled?: boolean;
}

const Avatar: React.FC<Props> = ({
	style,
	avatar,
	onChange,
	isEdit,
	size = sizes.s104,
	disabled,
}) => {
	const openImagePicker = () => {
		Navigator.showImagePicker({
			onChange: onChange,
		});
	};

	const onPressSeeAvatar = () => {
		const source = avatarUri(avatar);
	};

	return (
		<TouchableOpacity
			activeOpacity={1}
			style={[styles.container, style]}
			disabled={disabled}
			onPress={isEdit ? openImagePicker : onPressSeeAvatar}>
			<FastImage
				source={avatarUri(avatar)}
				style={[styles.avatar, { width: size, height: size }]}
			/>
			{isEdit && (
				<View style={styles.ic_edit}>
					<FastImage source={images.ic_edit} style={Style.icon16} />
				</View>
			)}
		</TouchableOpacity>
	);
};

export default Avatar;

const styles = StyleSheet.create({
	container: {
		alignSelf: 'center',
	},
	avatar: {
		borderRadius: sizes.s104,
	},
	ic_edit: {
		backgroundColor: colors.primary,
		padding: sizes.s10,
		borderRadius: sizes.s30,
		position: 'absolute',
		right: 0,
		bottom: 0,
	},
});
