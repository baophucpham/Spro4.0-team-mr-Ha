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
				<FastImage source={images.ic_camera_avatar} style={[Style.icon24, styles.ic_edit]} />
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
		position: 'absolute',
		right: -sizes.s5,
		bottom: -sizes.s5,
	},
});
