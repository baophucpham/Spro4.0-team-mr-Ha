import { FastImageProps } from 'react-native-fast-image';
import { StyleProp, TextInputProps, ViewStyle } from 'react-native/types';

export interface InputProps extends TextInputProps {
	style?: StyleProp<ViewStyle>;
	inputStyle?: StyleProp<ViewStyle>;
	label?: string;
	iconRight?: FastImageProps['source'];
	iconLeft?: FastImageProps['source'];
	onPressIconRight?: () => void;
	onPressIconLeft?: () => void;
	isPassword?: boolean;
	isPicker?: boolean;
	onPress?: () => void;
	isDatePicker?: boolean;
	onChangeDate?: (data: { date: string | Date; dateString: string }) => void;
}

export interface InputState {
	isFocused: boolean;
	isHidePassword?: boolean;
}

export interface BottomSheetProps {
	screen?: any;
	title?: string;
	ref?: any;
	showHeader?: boolean;
	style?: StyleProp<ViewStyle>;
	onClose?: (callback?: any) => void;
	title?: string;
	iconRight?: FastImageProps['source'];
	iconLeft?: FastImageProps['source'];
	onPressIconRight?: (requestClose?: any) => void;
	onPressIconLeft?: (requestClose?: any) => void;
	closeOnPressIconRight?: boolean;
	closeOnPressIconLeft?: boolean;
}

export interface ChooseTaskBoardProps {
	onPressBoard: (data: any) => void;
	requestClose?: () => void;
}
