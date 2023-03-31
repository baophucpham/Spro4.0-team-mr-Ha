import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, sizes, strings } from 'core/index'
import { images } from 'assets'
import {Checkbox, ItemCheckbox} from 'component'

interface Props {
    Data?: any
}

const CheckList: React.FC<Props> = ({Data}: any) => {
    console.log(Data,'checkList')
  return (
    <View style={styles.containerCheckList}>
        <View style={styles.viewHeader}>
          <Text style={styles.textHeader}>{Data?.title}</Text>
          <TouchableOpacity>
              <Image source={images.ic_more}/>
          </TouchableOpacity>
        </View>

        {Data?.dataItem?.map((item:any,index:number)=>(
        <View style={styles.viewBody} key={index}>
            <View style={styles.viewDetail}>
                <ItemCheckbox title={String(item?.name)}/>
            <TouchableOpacity>
                <Image source={images.ic_more}/>
            </TouchableOpacity>
            </View>
        </View>
        ))}

          <TouchableOpacity style={styles.viewFooter}>
            <Image style={styles.iconAdd} source={images.ic_add}/>
            <Text style={styles.txtbtnAdd}>{strings.newCheckItem}</Text>
          </TouchableOpacity>
    </View>
  )
}

export default CheckList

const styles = StyleSheet.create({
    containerCheckList:{
        width:'100%',
        backgroundColor : colors.white,
        borderRadius: sizes.s8,
        marginBottom: sizes.s16,
    },
    iconAdd:{
        width: sizes.s16,
        height: sizes.s16,
        marginRight: sizes.s12,
    },
    viewHeader:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:sizes.s12,
        paddingVertical: sizes.s5,
        backgroundColor: colors.darkGray,
        borderTopLeftRadius: sizes.s8,
        borderTopRightRadius: sizes.s8,
    },
    viewBody:{
        backgroundColor: colors.white,
        paddingHorizontal:sizes.s20,
    },
    viewFooter:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:sizes.s20,
        paddingVertical: sizes.s15,
        backgroundColor: colors.white,
        borderBottomLeftRadius: sizes.s8,
        borderBottomRightRadius: sizes.s8,
    },
    txtbtnAdd:{
        color: colors.blue,
    },
    viewDetail:{
        borderBottomWidth: sizes.s1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical: sizes.s15,
        borderBottomColor:colors.linghtGray,
    },
    textHeader:{
        fontWeight: '500',
        fontSize: sizes.s14,
    },
})
