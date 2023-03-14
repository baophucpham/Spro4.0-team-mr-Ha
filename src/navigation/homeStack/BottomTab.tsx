import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { images } from 'assets';
import { colors, Navigator, sizes, Style } from 'core';
import React, { memo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Device } from 'utils';
import { HomeTask, More, Notification } from 'screen/home';

const Tab = createBottomTabNavigator();

const TabScreen = [
	{
		name: 'HomeTask',
		screen: HomeTask,
		icon: images.ic_Feedback,
		icon_selected: images.ic_Feedback,
		badge: 0,
	},
	{
		name: 'Notification',
		screen: Notification,
		icon: images.ic_search,
		icon_selected: images.ic_search,
		badge: 0,
	},
	{
		name: 'More',
		screen: More,
		icon: images.ic_more,
		icon_selected: images.ic_more_selected,
		badge: 0,
	},
	// {
	// 	name: 'Profile',
	// 	screen: Profile,
	// 	icon: images.ic_profile,
	// 	icon_selected: images.ic_profile_selected,
	// 	badge: 0,
	// },
];

const BottomTab = () => {
	const renderTabScreen = () => {
		return TabScreen.map((tab, index: number) => (
			<Tab.Screen
				key={String(index)}
				name={tab.name}
				options={{
					...(Navigator.defaultOptions as any),
					lazy: false,
					tabBarStyle: {
						height: sizes.s56 + Device.getBottomSpace(),
					},
					tabBarShowLabel: false,
					tabBarIcon: ({ focused }) => (
						<View>
							<Image source={focused ? tab.icon_selected : tab.icon} style={Style.icon24} />
							{tab.badge > 0 ? (
								<View style={styles.badge}>
									<Text style={styles.badge_text}>{tab.badge}</Text>
								</View>
							) : null}
						</View>
					),
				}}
				component={tab.screen}
			/>
		));
	};

	return <Tab.Navigator>{renderTabScreen()}</Tab.Navigator>;
};

export default memo(BottomTab);

const styles = StyleSheet.create({
	badge: {
		position: 'absolute',
		top: -sizes.s10,
		right: -sizes.s10,
		backgroundColor: colors.orange,
		borderWidth: sizes.s1,
		borderColor: colors.white,
		borderRadius: sizes.s10,
		width: sizes.s20,
		height: sizes.s20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	badge_text: { ...Style.medium, fontSize: sizes.s10, color: colors.white },
});
