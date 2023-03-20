import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, Navigator, sizes } from 'core/index'
import { images } from 'assets'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Screens } from 'common'

interface Props {
    Data?: any
}

const CradTask: React.FC<Props> = ({Data}: any) => {
    const pressCard = () => {
        console.log('pressssssss')
        Navigator.navigate(Screens.TaskDetail);
    }
  return (
    <View>
        <TouchableOpacity onPress={pressCard}>
            <View style={styles.cardContainer}>
                <View style={styles.headerCard}>
                    <Image style={styles.avatarCard} source={images.avatar_default_2}/>
                    <Text style={styles.contentCard}>{Data?.title}</Text>
                </View>
                <View style={styles.bodyCard}>
                    <View style={styles.ItemCard}>
                        <Text style={styles.numberCard}>{'07/08'}</Text>
                        <Image style={styles.iconCard} source={images.ic_arrowright}/>
                        <Text style={styles.numberCard}>{'12/11'}</Text>
                    </View>
                    <View style={styles.ItemCardRight}>
                        <View style={styles.viewPercent}>
                            <Text style={styles.PercentHeadder}>{Data?.percent}%</Text>
                        </View>
                        <Image style={styles.iconCrittcal} source={images.ic_critical}/>
                        <Image style={styles.icon} source={images.ic_Running}/>
                        <Image style={styles.icon} source={images.avatar_default}/>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default CradTask

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor: colors.white,
        padding: sizes.s16,
    },
    headerCard:{
        flexDirection:'row',
        alignItems: 'center',
    },
    avatarCard:{
        width:sizes.s32,
        height:sizes.s32,
        marginRight: sizes.s12,
    },
    contentCard:{
        fontWeight:'500',
        fontSize: sizes.s16,
        lineHeight: sizes.s24,
    },
    bodyCard:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: sizes.s22,
    },
    ItemCard:{
        width: '50%',
        flexDirection:'row',
        alignItems: 'center',
    },
    ItemCardRight:{
        width: '50%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    iconCard:{
        width: sizes.s6,
        height: sizes.s12,
        marginHorizontal: sizes.s12,
    },
    numberCard:{
        color:colors.placeholder,
        fontWeight: '400',
        fontSize: sizes.s14,
        lineHeight: sizes.s20,
    },
    viewPercent:{
        backgroundColor: colors.blue2,
        paddingVertical: sizes.s2,
        paddingHorizontal: sizes.s8,
        borderRadius: sizes.s30,
    },
    PercentHeadder:{
        color: colors.blue,
        fontSize: sizes.s14,
        fontWeight: '400',
        lineHeight: sizes.s22,
    },
    iconCrittcal:{
        width: sizes.s22,
        height: sizes.s21,
    },
    icon:{
        width:sizes.s24,
        height: sizes.s24,
    },
})
