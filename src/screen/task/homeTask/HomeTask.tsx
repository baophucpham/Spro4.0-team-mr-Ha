import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from 'assets';
import {RadioButton} from 'component'
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeTask = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Text style={styles.textHeader}>Báo cáo nhanh</Text>
        <TouchableOpacity>
        <Image source={images.ic_search}/>
        </TouchableOpacity>
      </View>
      <View style={styles.viewBtn}>
        <TouchableOpacity style={styles.styleBtn}>
                <Text>Hàng ngày</Text>
                <Image style={styles.styleIconBtn} source={images.ic_arrow_down_vector}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.styleBtn}>
                <Text>Tất cả</Text>
                <Image style={styles.styleIconBtn} source={images.ic_arrow_down_vector}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeTask

const styles = StyleSheet.create({
    container: {
		flex: 1,
        paddingTop: 60,
        flexDirection:'column',
        justifyContent:'center',
	},
    viewHeader:{
        padding: 16,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    textHeader:{
        fontWeight: '500',
        fontSize: 20,
    },
    viewBtn:{
        flex: 1,
        padding: 16,
        flexDirection:'row',
        justifyContent: 'space-between',
        // backgroundColor: "red"
    },
    styleBtn:{
        width: 190,
        paddingHorizontal: 16,
        paddingVertical:9,
        flexDirection:'row',
        justifyContent: 'space-between',
        borderWidth: 1 ,
        borderColor: '#DFDFDF',
        borderRadius: 26,
        textAlign: 'center',
        alignItems:'center',
    },
    styleIconBtn:{
        width: 11,
        height: 6,
    },
})
