import { FastImageProps } from 'react-native-fast-image';
import { TextInputProps } from 'react-native/types';

export interface InputProps extends TextInputProps {
	style?: StyleProp<ViewStyle>;
	inputStyle?: StyleProp<ViewStyle>;
	label?: string;
	iconRight?: FastImageProps['source'];
	iconLeft?: FastImageProps['source'];
	onPressIconRight?: () => void;
	onPressIconLeft?: () => void;
}

export interface InputState {
	isFocused: boolean;
}
