import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TabScreenProps } from 'model';

const Notification: React.FC<TabScreenProps> = () => {
	return (
		<View style={styles.container}>
			<Text>Notification</Text>
		</View>
	);
};

export default Notification;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
