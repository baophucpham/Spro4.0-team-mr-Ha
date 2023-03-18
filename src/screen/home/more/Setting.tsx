import { images } from 'assets';
import { Stacks } from 'common';
import { Icon } from 'component';
import { colors, Navigator, sizes, strings, Style } from 'core';
import { ScreenProps } from 'model';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Storage } from 'utils';

const Setting: React.FC<ScreenProps> = ({ navigation }) => {
	const setLanguage = (language: string) => {
		strings.setLanguage(language);
		Storage.setData(Storage.key.language, language);
		Navigator.reset(Stacks.HomeStack);
	};

	const showPopupChangeLanguage = () => {
		Navigator.showActionPopUp({
			data: [
				{
					title: 'Viet Nam',
					onPress: () => {
						setLanguage('vi');
					},
				},
				{
					title: 'English',
					onPress: () => {
						setLanguage('en');
					},
				},
			],
		});
	};

	const DATA = [
		{
			iconLeft: images.ic_language,
			title: strings.language,
			titleRight: strings.getLanguage(),
			onPress: showPopupChangeLanguage,
		},
		{
			iconLeft: images.ic_config_app,
			title: 'Config app',
		},
	];

	useEffect(() => {
		navigation.setOptions({
			title: 'Setting',
		});
	}, []);

	return (
		<View style={styles.container}>
			{DATA.map((item, index) => (
				<TouchableOpacity
					key={index}
					style={[
						Style.row_between,
						Style.borderBottom,
						Style.pv12,
						Style.ph16,
						{ backgroundColor: colors.white },
					]}
					onPress={item.onPress}>
					<View style={Style.row}>
						<Icon source={item.iconLeft} size={sizes.s24} />
						<Text style={[Style.txt14, Style.left12]}>{item.title}</Text>
					</View>
					<View style={Style.row}>
						<Text style={[Style.txt14_secondary, Style.right4]}>{item.titleRight}</Text>
						<Icon source={images.ic_next} size={sizes.s16} />
					</View>
				</TouchableOpacity>
			))}
		</View>
	);
};

export default Setting;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.separator,
		paddingTop: sizes.s8,
	},
});
