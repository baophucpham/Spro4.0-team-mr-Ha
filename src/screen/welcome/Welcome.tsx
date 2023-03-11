import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Buttons, Input } from 'component';
import { Navigator } from 'core';
import { Stacks } from 'common';
import { images } from 'assets';

const Welcome = () => {
	return (
		<View style={styles.container}>
			<Text>Welcome</Text>
			<Buttons
				title="Go To Login"
				onPress={() => Navigator.navigate(Stacks.AuthenStack)}
				icon={images.ic_add_new}
			/>
			<Input
				style={{ width: 300, marginTop: 20 }}
				label="hello"
				placeholder="hahahah"
				iconLeft={images.ic_user_tick}
			/>
		</View>
	);
};

export default Welcome;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
