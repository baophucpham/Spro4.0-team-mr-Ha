import { NavigationContainer } from '@react-navigation/native';
import {
	createNativeStackNavigator,
	NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { images } from 'assets';
import { Stacks } from 'common';
import { NavigationBackButton } from 'component';
import { Navigator, sizes, Style } from 'core';
import React from 'react';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { Dialog, Modals } from 'screen/modal';
import Device from 'utils/Device';
import AuthenStack from './authenStack/AuthenStack';
import HomeStack from './homeStack/HomeStack';

const Stack = createNativeStackNavigator();
enableScreens();

const screenOptionsNativeStack: NativeStackNavigationOptions = {
	headerShown: false,
	customAnimationOnGesture: true,
	fullScreenGestureEnabled: true,
	gestureEnabled: true,
	animationTypeForReplace: 'push',
	animation: 'slide_from_right',
	presentation: Platform.OS === 'android' ? 'modal' : undefined,
};

const AppStack: React.FC = () => {
	const insets = useSafeAreaInsets();
	Device.setDeviceInset(insets);

	return (
		<NavigationContainer ref={(ref) => Navigator.setNavigationRef(ref)}>
			<Stack.Navigator screenOptions={screenOptionsNativeStack}>
				<Stack.Screen name={Stacks.AuthenStack} component={AuthenStack} />
				<Stack.Screen name={Stacks.HomeStack} component={HomeStack} />
				<Stack.Screen
					name={Stacks.Modals}
					component={Modals}
					options={{
						animation: 'fade',
						presentation: 'transparentModal',
						gestureEnabled: false,
						animationDuration: Navigator.animationDurationTime,
					}}
				/>
				<Stack.Screen
					name={Stacks.Dialog}
					component={Dialog}
					options={{
						animation: 'slide_from_bottom',
						gestureEnabled: false,
						animationDuration: 400,
						...(Navigator.defaultOptions as any),
						headerTitleStyle: Style.h6,
						headerLeft: () => (
							<NavigationBackButton
								icon={images.ic_back}
								style={{ paddingHorizontal: sizes.s8 }}
							/>
						),
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppStack;
