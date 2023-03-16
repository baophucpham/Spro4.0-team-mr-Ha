import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Navigator, sizes } from 'core/index'
import { images } from 'assets'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Screens } from 'common'

const List = () => {
    const navigateToListDetail = () =>{
        Navigator.navigate(Screens.ListDetail);
    }
  return (
    <View>
      <View style={styles.viewCard}>
            <TouchableOpacity style={styles.card} onPress={navigateToListDetail}>
                <Text>Đã giao</Text>
                <View style={styles.viewIconNumberCard}>
                    <Image style={styles.icon} source={images.ic_Assign} />
                    <Text style={styles.mumberCard}>02</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
                <Text>Đang chạy</Text>
                <View style={styles.viewIconNumberCard}>
                    <Image style={styles.icon} source={images.ic_Running} />
                    <Text style={styles.mumberCard}>02</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
                <Text>Hoàn thành</Text>
                <View style={styles.viewIconNumberCard}>
                    <Image style={styles.icon} source={images.ic_finish} />
                    <Text style={styles.mumberCard}>02</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.viewCard}>
            <TouchableOpacity style={styles.card} >
                <Text>Phản hồi</Text>
                <View style={styles.viewIconNumberCard}>
                    <Image style={styles.icon} source={images.ic_Feedback} />
                    <Text style={styles.mumberCard}>02</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
                <Text>Đã hủy</Text>
                <View style={styles.viewIconNumberCard}>
                    <Image style={styles.icon} source={images.ic_CancelTask} />
                    <Text style={styles.mumberCard}>02</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
                <Text>Chia sẻ</Text>
                <View style={styles.viewIconNumberCard}>
                    <Image style={styles.icon} source={images.ic_ShareTask} />
                    <Text style={styles.mumberCard}>02</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default List

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
