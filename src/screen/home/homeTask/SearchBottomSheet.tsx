import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, sizes, strings } from 'core/index'
import {Input} from 'component'
import { images } from 'assets'
import { TouchableOpacity } from 'react-native-gesture-handler';


const SearchBootomSheet = () => {

    const dataSearch = [
        {
            id:1,
            content:'Lorem ipsum dolor sit amet',
        },
        {
            id:2,
            content:'Lorem ipsum dolor sit amet',
        },
        {
            id:3,
            content:'Lorem ipsum dolor sit amet',
        },
        {
            id:4,
            content:'Lorem ipsum dolor sit amet',
        },
        {
            id:5,
            content:'Lorem ipsum dolor sit amet',
        },
        {
            id:6,
            content:'Lorem ipsum dolor sit amet',
        },
    ]

  return (
    <View style={styles.searchContainer}>
      <Input style={styles.styleSearch} placeholder={strings.search} iconLeft={images.ic_search}/>
      <View style={styles.viewItemSearch}>
        {dataSearch?.map((item:any,index: number )=>(
            <TouchableOpacity style={styles.itemSreach} key={index}>
                <Text>
                    {item.content}
                </Text>
            </TouchableOpacity>
            ))}
      </View>

    </View>
  )
}

export default SearchBootomSheet

const styles = StyleSheet.create({
    searchContainer:{
        marginTop: sizes.s12,
        marginBottom: sizes.s20,
        paddingHorizontal: sizes.s16,
    },
    styleSearch:{
        borderRadius: sizes.s26,
    },
    viewItemSearch:{
        marginTop: sizes.s15,
    },
    itemSreach:{
        width: '100%',
        borderBottomColor: colors.linghtGray,
        borderBottomWidth: sizes.s1,
        paddingVertical: sizes.s16,
    },
})
