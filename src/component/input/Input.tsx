import Icon from 'component/image/Icon';
import { colors, sizes, Style } from 'core';
import { InputProps, InputState } from 'model';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class Input extends Component<InputProps, InputState> {
	constructor(props: InputProps) {
		super(props);
		this.state = {
			isFocused: false,
		};
	}

	renderLabel = () => {
		if (this.props.label) {
			return <Text style={[Style.txt12, Style.bottom4]}>{this.props.label}</Text>;
		}
	};

	renderIcon = (icon: any, onPress: any, style: any) => {
		if (icon) {
			return (
				<Icon style={style} source={icon} onPress={onPress} tintColor={colors.placeholder} />
			);
		}
	};

	render() {
		const {
			style,
			inputStyle,
			placeholder,
			iconRight,
			iconLeft,
			onPressIconRight,
			onPressIconLeft,
		} = this.props || {};
		const borderColor = this.state.isFocused ? colors.blue : colors.borderInput;

		return (
			<View style={[styles.container, style]}>
				{this.renderLabel()}
				<View style={[styles.inputContainer, { borderColor }]}>
					{this.renderIcon(iconLeft, onPressIconLeft, styles.iconLeft)}
					<TextInput
						style={[styles.input, inputStyle]}
						placeholder={placeholder}
						placeholderTextColor={colors.placeholder}
						onFocus={() => this.setState({ isFocused: true })}
						onBlur={() => this.setState({ isFocused: false })}
					/>
					{this.renderIcon(iconRight, onPressIconRight, styles.iconRight)}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: sizes.s12,
	},
	inputContainer: {
		paddingVertical: sizes.s9,
		paddingHorizontal: sizes.s16,
		...Style.border,
		borderRadius: sizes.s8,
		...Style.row,
	},
	input: {
		flex: 1,
		...Style.txt14,
	},
	iconRight: {
		marginLeft: sizes.s4,
	},
	iconLeft: {
		marginRight: sizes.s4,
	},
});
