import 'react-native-gesture-handler';

import { Loading, ToastDebug } from 'component';
// import withCodePush from 'config/CodePush';
// import { handleNotify } from 'config/Notification';
import { Navigator } from 'core';
import AppStack from 'navigation';
import React, { useEffect } from 'react';
import { StatusBar, UIManager } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { Device } from 'utils';
import store from './redux/store';
import withCodePush from 'config/CodePush';

const App: React.FC = () => {
	useEffect(() => {
		if (Device.isAndroid) {
			if (UIManager.setLayoutAnimationEnabledExperimental) {
				UIManager.setLayoutAnimationEnabledExperimental(true);
			}
		}
	}, []);
	// handleNotify();
	return (
		<Provider store={store}>
			<StatusBar
				barStyle="dark-content"
				backgroundColor={'transparent'}
				hidden={false}
				translucent={true}
			/>
			<SafeAreaProvider>
				<AppStack />
			</SafeAreaProvider>
			<Loading ref={(ref) => Navigator.setLoadingRef(ref)} />
			<ToastDebug ref={(ref) => Navigator.setToastDebugRef(ref)} />
		</Provider>
	);
};

export default withCodePush(App);
