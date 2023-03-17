import { images } from 'assets';
import Icon from 'component/image/Icon';
import { colors, sizes, Style } from 'core';
import { InputProps, InputState } from 'model';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default class Input extends Component<InputProps, InputState> {
	inputRef: React.MutableRefObject<TextInput>;
	constructor(props: InputProps) {
		super(props);
		this.state = {
			isFocused: false,
			isHidePassword: this.props.isPassword,
		};
		this.inputRef = React.createRef<any>();
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

	onPressInput = () => {
		this.inputRef.current.focus();
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
			isPassword,
			...inputProps
		} = this.props || {};
		const { isHidePassword } = this.state;
		const borderColor = this.state.isFocused ? colors.blue : colors.borderInput;

		return (
			<TouchableOpacity
				activeOpacity={1}
				style={[styles.container, style]}
				onPress={this.onPressInput}>
				{this.renderLabel()}
				<View style={[styles.inputContainer, { borderColor }]}>
					{this.renderIcon(iconLeft, onPressIconLeft, styles.iconLeft)}
					<TextInput
						{...inputProps}
						ref={this.inputRef}
						style={[styles.input, inputStyle]}
						placeholder={placeholder}
						placeholderTextColor={colors.placeholder}
						onFocus={() => this.setState({ isFocused: true })}
						onBlur={() => this.setState({ isFocused: false })}
						secureTextEntry={isHidePassword}
					/>
					{isPassword
						? this.renderIcon(
								this.state.isHidePassword ? images.ic_eye : images.ic_eye_slash,
								() => this.setState({ isHidePassword: !isHidePassword }),
								styles.iconRight
						  )
						: this.renderIcon(iconRight, onPressIconRight, styles.iconRight)}
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: sizes.s16,
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
		padding: 0,
	},
	iconRight: {
		marginLeft: sizes.s4,
	},
	iconLeft: {
		marginRight: sizes.s4,
	},
});
