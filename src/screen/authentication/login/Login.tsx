import { images } from 'assets';
import { Stacks } from 'common';
import { Buttons } from 'component';
import { Navigator } from 'core/index';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Login = () => {
	return (
		<View style={styles.container}>
			<Text>Login</Text>
			<Buttons
				title="Go To Home Task"
				onPress={() => Navigator.navigate(Stacks.HomeTask)}
				icon={images.ic_add_new}
			/>
			<Buttons
				title="Go To Notification"
				onPress={() => Navigator.navigate(Stacks.Notification)}
				icon={images.ic_add_new}
			/>
			<Buttons
				title="Go To More"
				onPress={() => Navigator.navigate(Stacks.More)}
				icon={images.ic_add_new}
			/>
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
