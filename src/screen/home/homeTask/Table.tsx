import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Navigator, sizes, strings } from 'core/index'
import { images } from 'assets'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Screens } from 'common'

const Table = () => {
    const navigateToListDetail = () =>{
        Navigator.navigate(Screens.ListDetail);
    }
  return (
    <View>
      <View style={styles.viewCard}>
            <TouchableOpacity style={styles.card} onPress={navigateToListDetail}>
                <Text>{strings.delivered}</Text>
                <View style={styles.viewIconNumberCard}>
                    <Image style={styles.icon} source={images.ic_Assign} />
                    <Text style={styles.mumberCard}>02</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={navigateToListDetail}>
                <Text>{strings.running}</Text>
                <View style={styles.viewIconNumberCard}>
                    <Image style={styles.icon} source={images.ic_Running} />
                    <Text style={styles.mumberCard}>02</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={navigateToListDetail}>
                <Text>{strings.complete}</Text>
                <View style={styles.viewIconNumberCard}>
                    <Image style={styles.icon} source={images.ic_finish} />
                    <Text style={styles.mumberCard}>02</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.viewCard}>
            <TouchableOpacity style={styles.card} onPress={navigateToListDetail}>
                <Text>{strings.feedBack}</Text>
                <View style={styles.viewIconNumberCard}>
                    <Image style={styles.icon} source={images.ic_Feedback} />
                    <Text style={styles.mumberCard}>02</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={navigateToListDetail}>
                <Text>{strings.cancelled}</Text>
                <View style={styles.viewIconNumberCard}>
                    <Image style={styles.icon} source={images.ic_CancelTask} />
                    <Text style={styles.mumberCard}>02</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={navigateToListDetail}>
                <Text>{strings.share}</Text>
                <View style={styles.viewIconNumberCard}>
                    <Image style={styles.icon} source={images.ic_ShareTask} />
                    <Text style={styles.mumberCard}>02</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Table

const styles = StyleSheet.create({
    viewCard: {
		flexDirection: 'row',
		paddingHorizontal: sizes.s16,
		justifyContent: 'space-between',
		paddingBottom: sizes.s2,
	},
	card: {
		borderWidth: sizes.s1,
		borderColor: '#E8E8E8',
		borderRadius: sizes.s8,
		padding: sizes.s12,
        marginRight: sizes.s5,
        marginBottom: sizes.s5,
	},
	icon: {
		width: sizes.s36,
		height: sizes.s36,
        marginRight: sizes.s25,
	},
    viewIconNumberCard: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop:sizes.s4,
	},
	mumberCard: {
		fontSize: sizes.s20,
		fontWeight: '500',
	},
})
