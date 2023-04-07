import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import React from 'react';
import { colors, sizes, Style } from 'core';
import { Device } from 'utils';
import Icon from 'component/image/Icon';

const PopUpAction: React.FC<PopUpActionProps> = ({
	requestClose,
	data = [],
	closeOntouch = true,
	keyTitle = 'title',
	onPress: itemOnPress,
}) => {
	const renderItem = () => {
		return data?.map((item, index) => {
			const {
				closeOntouchItem = true,
				icon = '',
				titleColor = colors.black,
				isShow = true,
				onPress,
			} = item;

			return (
				<View key={String(index)}>
					{isShow && (
						<TouchableOpacity
							key={String(index)}
							style={[Style.row, Style.pv10]}
							activeOpacity={0.7}
							onPress={() => {
								if (itemOnPress) {
									requestClose?.(() => itemOnPress?.(item));
								} else if (closeOntouch) {
									closeOntouchItem ? requestClose?.(onPress) : onPress?.();
								} else {
									onPress?.();
								}
							}}>
							{icon && <Icon source={icon} style={[Style.right12]} size={sizes.s24} />}
							<Text
								style={{
									...Style.txt16,
									color: titleColor,
								}}>
								{item[keyTitle]}
							</Text>
						</TouchableOpacity>
					)}
				</View>
			);
		});
	};
	return <ScrollView contentContainerStyle={styles.container}>{renderItem()}</ScrollView>;
};

export default PopUpAction;

const styles = StyleSheet.create({
	container: {
		...Style.ph24,
		paddingTop: sizes.s24,
		paddingBottom: sizes.s24 + Device.getBottomSpace(),
	},
	item: {
		...Style.pv10,
	},
});
