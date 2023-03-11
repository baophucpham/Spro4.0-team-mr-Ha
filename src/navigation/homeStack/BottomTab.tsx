import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { images } from 'assets'
import { colors, Navigator, sizes, Style } from 'core'
import React, { memo } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Chat, NewsFeed, Notification, Profile, SearchFriend } from 'screen/home'
import { Device } from 'utils'

const Tab = createBottomTabNavigator()

const TabScreen = [
	{
		name: 'NewsFeed',
		screen: NewsFeed,
		icon: images.ic_home,
		icon_selected: images.ic_home_selected,
		badge: 0,
	},
	{
		name: 'Search',
		screen: SearchFriend,
		icon: images.ic_search,
		icon_selected: images.ic_search_selected,
		badge: 0,
	},
	{
		name: 'Chat',
		screen: Chat,
		icon: images.ic_message,
		icon_selected: images.ic_message_selected,
		badge: 0,
	},
	{
		name: 'Notification',
		screen: Notification,
		icon: images.ic_notification,
		icon_selected: images.ic_notification_selected,
		badge: 0,
	},
	{
		name: 'Profile',
		screen: Profile,
		icon: images.ic_profile,
		icon_selected: images.ic_profile_selected,
		badge: 0,
	},
]

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
		))
	}

	return <Tab.Navigator>{renderTabScreen()}</Tab.Navigator>
}

export default memo(BottomTab)

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
})
