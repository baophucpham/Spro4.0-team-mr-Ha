import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Input } from 'component'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors, sizes } from 'core/index'
import { images } from 'assets'

const TimeLineBottomSheet = () => {
    const dataSearch = [
        {
            id:1,
            content:'Hàng ngày',
        },
        {
            id:2,
            content:'Hàng tuần',
        },
        {
            id:3,
            content:'Hàng tháng',
        },
    ]
  return (
    <View style={styles.searchContainer}>
        {dataSearch?.map((item:any,index: number )=>(
            <TouchableOpacity style={styles.itemSreach} key={index}>
                <Text>
                    {item.content}
                </Text>
            </TouchableOpacity>
            ))}
    </View>
  )
}

export default TimeLineBottomSheet

const styles = StyleSheet.create({
    searchContainer:{
        marginTop: sizes.s12,
        marginBottom: sizes.s30,
        paddingHorizontal: sizes.s16,
    },
    styleSearch:{
        borderRadius: sizes.s26,
    },
    itemSreach:{
        width: '100%',
        borderBottomColor: colors.linghtGray,
        borderBottomWidth: sizes.s1,
        paddingVertical: sizes.s16,
    },
})