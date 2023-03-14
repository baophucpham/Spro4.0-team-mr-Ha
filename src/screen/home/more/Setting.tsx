import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { ScreenProps } from 'model';

const Setting: React.FC<ScreenProps> = ({ navigation }) => {
	useEffect(() => {
		navigation.setOptions({
			title: 'Setting',
		});
	}, []);

	return (
		<View>
			<Text>Setting</Text>
		</View>
	);
};

export default Setting;

const styles = StyleSheet.create({});
