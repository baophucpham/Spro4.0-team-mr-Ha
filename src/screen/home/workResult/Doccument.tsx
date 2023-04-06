import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { ScreenProps } from 'model';
import { colors, Style, sizes, screenWidth } from 'core';
import { Icon } from 'component';
import { images } from 'assets';
import DocumentPicker from 'react-native-document-picker';
const Doccument: React.FC<ScreenProps> = ({ navigation }) => {
	useEffect(() => {
		navigation.setOptions({
			title: 'Tài liệu',
		});
	}, []);

	const DATA = [
		{ title: 'Tài liệu mô tả dự án' },
		{ title: 'Timeline dự án' },
		{ title: 'Tài liệu mô tả dự án' },
		{ title: 'Tài liệu mô tả dự án' },
	];

	const onPressPickAttachment = () => {
		DocumentPicker.pickSingle({
			copyTo: 'cachesDirectory',
			mode: 'import',
		}).then((res) => {});
	};

	return (
		<View style={styles.container}>
			<View style={Style.row_wrap_center}>
				{DATA.map((item, index) => (
					<TouchableOpacity key={index} style={styles.item} onPress={onPressPickAttachment}>
						<View style={styles.icon}>
							<Icon source={images.ic_document} size={sizes.s24} />
						</View>
						<Text style={[Style.top8, Style.txt14, Style.bold]}>{item.title}</Text>
						<Text style={[Style.txt12_secondary]}>PDF</Text>
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
};

export default Doccument;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
		padding: sizes.s8,
	},
	item: {
		backgroundColor: colors.white,
		...Style.shadow5,
		margin: sizes.s8,
		padding: sizes.s12,
		...Style.radius12,
		width: screenWidth / 2 - sizes.s24,
	},
	icon: {
		...Style.p8,
		...Style.radius12,
		backgroundColor: colors.blue2,
		alignSelf: 'baseline',
	},
	circle_background: {
		width: sizes.s152,
		height: sizes.s152,
		backgroundColor: colors.lightBlue,
		borderRadius: 100,
		marginTop: -sizes.s75,
		marginLeft: -sizes.s75,
		zIndex: -10,
	},
});
