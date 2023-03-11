import { NavigationContainerRef, StackActions, TabActions } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { Stacks } from 'common'
import { headerDefaultOptions } from 'common/nagivationOption'
import {
	DatePicker,
	ImagePickerPopup,
	NavigationBackButton,
	PopUpAction,
	RadioButton,
	SelectCity,
	SelectCountry,
} from 'component'
import { ImagePickerProps } from 'component/customView/ImagePickerPopup'
import { PopUpActionProps } from 'component/customView/PopUpAction'
import { SelectCityProps } from 'component/customView/SelectCity'
import { SelectCountryProps } from 'component/customView/SelectCountry'
import { DatePickerProps } from 'component/datePicker/DatePicker'
import { RadioButtonProps } from 'component/radioButton/RadioButton'
import { sizes } from 'core'
import {
	AlertParams,
	BottomSheetProps,
	BottomSheetSwipeProps,
	DialogProps,
	ModalsParams,
	ScreenParams,
} from 'model'
import { Keyboard } from 'react-native'
import { Device, IphoneHelper } from 'utils'
import { colors } from '../style/colors'
import { Style } from '../style/styles'

export default class Navigator {
	static navigationRef: NavigationContainerRef<ReactNavigation.RootParamList> | any
	static loadingRef: any
	static toastDebugRef: any
	static modalsNavigation: any
	static modalOpened: number = 0
	static animationDurationTime = 250
	static defaultOptions: StackNavigationOptions = {
		headerTitleAlign: 'center',
		headerTintColor: colors.black,
		headerLeft: () => NavigationBackButton(),
		headerMode: 'float',
		title: '',
		...headerDefaultOptions,
	}

	static setNavigationRef(ref: any) {
		this.navigationRef = ref
	}

	static setLoadingRef(ref: any) {
		this.loadingRef = ref
	}

	static setToastDebugRef(ref: any) {
		this.toastDebugRef = ref
	}

	static setModalsNavigation(ref: any) {
		if (!this.modalsNavigation) {
			this.modalsNavigation = ref
		}
	}

	// toast debug function
	static showToastDebug(message?: string) {
		if (__DEV__) {
			this.toastDebugRef.show(message)
		}
	}

	// modals function
	static showAlert(params?: AlertParams) {
		this.showModal({
			type: 'alert',
			...params,
		})
	}

	static showBottom(params?: BottomSheetProps) {
		this.showModal({
			type: 'bottom',
			...params,
		})
	}

	static showBottomSwipe(params?: BottomSheetSwipeProps) {
		this.showModal({
			type: 'bottom-swipe',
			...params,
		})
	}

	static showDatePicker(params?: DatePickerProps & BottomSheetSwipeProps) {
		this.showBottomSwipe({
			screen: DatePicker,
			height: 450,
			isShowButton: true,
			buttonTitle: 'OK',
			...params,
		})
	}

	static showRadioButton(params?: RadioButtonProps & BottomSheetProps) {
		this.showBottom({
			screen: RadioButton,
			...params,
		})
	}

	static showImagePicker(params?: ImagePickerProps) {
		this.showBottom({
			screen: ImagePickerPopup,
			hideTitle: true,
			style: Style.imagePicker,
			...params,
		})
	}

	static showActionPopUp(params: PopUpActionProps & BottomSheetSwipeProps) {
		this.showBottomSwipe({
			screen: PopUpAction,
			height:
				(params.data?.length || 0) * sizes.s44 + // height of item
				sizes.s48 + // swipe icon height
				IphoneHelper.ifIphoneX(Device.getBottomSpace(), sizes.s16), // bottom height
			...params,
		})
	}

	static showModal(params?: ModalsParams) {
		Keyboard.dismiss()
		if (this.modalOpened === 0) {
			this.push(Stacks.Modals, params)
		} else {
			this.modalsNavigation.push(Stacks.Modals, params)
		}
		this.modalOpened += 1
	}

	static hideModal(callback?: () => void) {
		this.modalOpened -= 1
		this.goBack()
		if (callback) {
			setTimeout(callback, this.animationDurationTime * 1.5)
		}
	}

	static hideAllModal() {
		this.pop(this.modalOpened)
		this.modalOpened = 0
	}

	static showDialog(params?: DialogProps) {
		this.navigate(Stacks.Dialog, params as any)
	}

	static showCoutrySelect(params?: SelectCountryProps) {
		this.showDialog({
			options: {
				title: 'Select your country',
				headerShown: true,
				headerShadowVisible: false,
			},
			screen: SelectCountry,
			...params,
		})
	}

	static showCitySelect(params?: SelectCityProps) {
		this.showDialog({
			options: {
				title: 'Select your city',
				headerShown: true,
				headerShadowVisible: false,
			},
			screen: SelectCity,
			...params,
		})
	}

	// Loading function
	static showLoading(message?: string) {
		this.loadingRef?.show(message)
	}

	static hideLoading() {
		this.loadingRef?.hide()
	}

	// Navigation function
	static navigate(name: any, params?: ScreenParams) {
		this.navigationRef.navigate(name, params)
		this.showToastDebug(name)
	}

	static jumpTo(name: any, params?: ScreenParams) {
		const jumpToAction = TabActions.jumpTo(name, params)
		this.navigationRef?.dispatch(jumpToAction)
		this.showToastDebug(name)
	}

	static goBack() {
		this.navigationRef.canGoBack() && this.navigationRef?.goBack()
	}

	static replace(name: any, params?: ScreenParams) {
		this.navigationRef?.dispatch(StackActions.replace(name, params))
		this.showToastDebug(name)
	}

	static reset(name: any, params?: ScreenParams) {
		this.navigationRef?.reset({
			routes: [{ name: name, params }],
		})
		this.showToastDebug(name)
	}

	static pop(number: number) {
		this.navigationRef.dispatch(StackActions.pop(number))
	}

	static popToTop() {
		this.navigationRef.dispatch(StackActions.popToTop())
	}

	static push(name: any, params?: ScreenParams) {
		this.navigationRef.dispatch(StackActions.push(name, params))
		this.showToastDebug(name)
	}

	static goHome() {
		this.reset(Stacks.HomeStack)
	}

	static goLogin() {
		this.reset(Stacks.AuthenStack)
	}
}
