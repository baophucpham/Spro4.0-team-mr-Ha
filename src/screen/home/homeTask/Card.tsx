import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from 'assets'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { sizes } from 'core/index'

const Card = () => {
  return (
    <View >
      <View style={styles.viewCard}>
        <TouchableOpacity style={styles.cartStyle}>
            <Text>Hoàn thành</Text>
            <View style={styles.viewIconNumberCard}>
                <Image style={styles.icon}  source={images.ic_finish} />
                <Text style={styles.mumberCard}>02</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartStyle}>
            <Text>quá hạn</Text>
            <View style={styles.viewIconNumberCard}>
                <Image style={styles.icon}  source={images.ic_overrated} />
                <Text style={styles.mumberCard}>02</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartStyle}>
            <Text>Chưa quá hạn</Text>
            <View style={styles.viewIconNumberCard}>
                <Image style={styles.icon}  source={images.ic_waiting} />
                <Text style={styles.mumberCard}>02</Text>
            </View>
        </TouchableOpacity>
      </View>

      <View style={styles.viewCard}>
        <TouchableOpacity style={styles.cartStyle}>
            <Text>Phản hồi</Text>
            <View style={styles.viewIconNumberCard}>
                <Image style={styles.icon}  source={images.ic_Feedback} />
                <Text style={styles.mumberCard}>02</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartStyle}>
            <Text>Mở lại</Text>
            <View style={styles.viewIconNumberCard}>
                <Image style={styles.icon}  source={images.ic_reopen} />
                <Text style={styles.mumberCard}>02</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartStyle}>
            <Text>Sự cố</Text>
            <View style={styles.viewIconNumberCard}>
                <Image style={styles.icon}  source={images.ic_issue} />
                <Text style={styles.mumberCard}>02</Text>
            </View>
        </TouchableOpacity>
      </View>
      <View style={styles.viewCard}>
        <TouchableOpacity style={styles.cartStyle}>
            <Text>Đã hủy</Text>
            <View style={styles.viewIconNumberCard}>
                <Image style={styles.icon}  source={images.ic_CancelTask} />
                <Text style={styles.mumberCard}>02</Text>
            </View>
        </TouchableOpacity>
      </View>
	</View>
  )
}

export default Card

const styles = StyleSheet.create({
    cartStyle:{
		borderWidth: sizes.s1,
		borderColor: '#E8E8E8',
		borderRadius: sizes.s8,
		padding: sizes.s12,
    marginRight: sizes.s5,
    marginBottom: sizes.s5,
    },
    viewIconNumberCard: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop:sizes.s4,
	},
    icon: {
		width: sizes.s36,
		height: sizes.s36,
    marginRight: sizes.s25,
	},
    mumberCard: {
		fontSize: sizes.s20,
		fontWeight: '500',
	},
    viewCard:{
    flexDirection: 'row',
		justifyContent: 'space-between',
  },
})
