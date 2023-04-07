interface InputProps extends TextInputProps {
	style?: StyleProp<ViewStyle>;
	inputStyle?: StyleProp<ViewStyle>;
	inputContainerStyle?: StyleProp<ViewStyle>;
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

interface InputState {
	isFocused: boolean;
	isHidePassword?: boolean;
}

interface BottomSheetProps {
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
	closeOnTouchOutSide?: boolean;
}

interface BottomSheetSwipeProps {
	screen?: any;
	draggable?: boolean;
	height?: number;
	onClose?: (callback?: () => void) => void;
	isShowButton?: boolean;
	buttonTitle?: string;
	buttonOnPress?: () => void;
	closeOnTouchOutSide?: boolean;
}

interface ChooseTaskBoardProps {
	onPressBoard: (data: any) => void;
	requestClose?: () => void;
}

interface ItemNoticationProps {
	title: string;
	date: string | Date;
	isRead: boolean;
}

interface ItemCommentProps {
	avatar?: string;
	username?: string;
	date?: string | Date;
	content?: string;
	isReply?: boolean;
}

interface PopUpActionProps {
	closeOntouch?: boolean; // auto close popup when press any item
	requestClose?: (callback?: () => void) => void;
	keyTitle?: string;
	data: {
		icon?: any;
		title?: string | any;
		onPress?: (data?: any) => void;
		titleColor?: string;
		closeOntouchItem?: boolean; // auto close popup when press each item
		isShow?: boolean;
		[key: string]: any;
	}[];
	onPress?: (data?: any) => void;
}
