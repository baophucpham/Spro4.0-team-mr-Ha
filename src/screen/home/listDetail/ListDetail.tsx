/* eslint-disable react/no-unstable-nested-components */
import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Flex, Buttons } from 'component';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { images } from 'assets';
import { sizes, colors, Style } from 'core/index';
import CradTask from './CradTask';

const ListDetail = ({navigation}: any) => {
    useEffect(() => {
		navigation.setOptions({
            title: 'List Details',
            headerRight: ()=>(
                <TouchableOpacity style={styles.btnHeader}>
                    <Image source={images.ic_more}/>
                </TouchableOpacity>
            ),
		});
	}, []);

    const data = [
        {   id: 1,
            title: 'Excepteur sint occaecat cupidatat non proident',
            percent: 20,
        },
        {   id: 1,
            title: 'Excepteur sint occaecat cupidatat non proident',
            percent: 30,
        },
        {   id: 1,
            title: 'Excepteur sint occaecat cupidatat non proident',
            percent: 50,
        },
        {   id: 1,
            title: 'Excepteur sint occaecat cupidatat non proident',
            percent: 60,
        },
        {   id: 1,
            title: 'Excepteur sint occaecat cupidatat non proident',
            percent: 70,
        },
        {   id: 1,
            title: 'Excepteur sint occaecat cupidatat non proident',
            percent: 80,
        },
        {   id: 1,
            title: 'Excepteur sint occaecat cupidatat non proident',
            percent: 10,
        },
    ]
  return (
    <Flex>
        <ScrollView style={styles.scrollView}>
            <View style={styles.headerView}>
                <View style={styles.headerTitle}>
                    <Text style={styles.titleHeader}>Quis nostrud exercitation</Text>
                    <View style={styles.viewPercent}>
                        <Text style={styles.PercentHeadder}>20%</Text>
                    </View>
                </View>
                <View style={styles.headerContent}>
                    <Text style={styles.titleContent}>Quis nostrud exercitation</Text>
                    <Text style={styles.PercentContent}>Ipsum dolor sit amet</Text>
                </View>
                <View style={styles.headerContent}>
                    <View style={styles.viewTextIcon} >
                        <Text style={styles.titleContent}>Người tạo</Text>
                        <Image style={styles.icon} source={images.avatar_default}/>
                    </View>
                    <View style={styles.viewTextIcon}>
                        <Text style={styles.titleContent}>Người nhận</Text>
                        <Image style={styles.icon} source={images.avatar_default}/>
                    </View>
                    <View style={styles.viewTextIcon}>
                        <Text style={styles.titleContent}>Trạng thái</Text>
                        <Image style={styles.icon} source={images.ic_Running}/>
                    </View>
                </View>
                <View style={styles.headerContent}>
                    <Text style={styles.titleContent}>Timeline</Text>
                    <Text style={styles.numberTimeLine}>{'07/08'} {'>'} {'09/08'}</Text>
                </View>
                <View
                    style={{
                        borderBottomColor: colors.placeholder,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
                <View style={[styles.viewViewMore]}>
                    <Text style={styles.viewMoreContent}>
                    Update new Security system for the Ios...
                    </Text>
                    <TouchableOpacity style={styles.touch}>
                        <Text style={styles.BtnViewMore}>Xem Thêm</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Image style={styles.iconPlush} source={images.ic_plush}/>
                    <Text style={styles.textButton}>
                        Tạo Task
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                {data?.map((item: any,index: number)=>(
                    <View style={styles.viewCard} key={index}>
                        <CradTask Data={item}/>
                    </View>
                ))}
            </View>
        </ScrollView>
        <View style={styles.Footer}>
            <TouchableOpacity>
                <Text style={styles.updateBtnFooter}>Cập nhật tiến độ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnFooter}>
                <Text style={styles.btnFinish}>Hoàn thành</Text>
            </TouchableOpacity>
        </View>
    </Flex>
  )
}

export default ListDetail

const styles = StyleSheet.create({
    scrollView:{
        backgroundColor: colors.separator,
    },
    btnHeader:{
        marginRight: sizes.s16,
    },
    headerView:{
        paddingHorizontal: sizes.s16,
        paddingTop: sizes.s20,
        paddingBottom: sizes.s16,
        backgroundColor: colors.white,
    },
    headerTitle:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingBottom: sizes.s20,
    },
    headerContent:{
        flexDirection:'row',
        alignItems: 'center',
        marginBottom: sizes.s16,
    },
    viewViewMore:{
        flexDirection:'row',
        alignItems: 'center',

    },
    titleHeader:{
        fontWeight: '500',
        fontSize: sizes.s20,
        lineHeight: sizes.s24,
    },
    PercentHeadder:{
        color: colors.white,
        fontSize: sizes.s16,
        fontWeight: '500',
    },
    viewPercent:{
        backgroundColor: colors.blue,
        paddingVertical: sizes.s4,
        paddingHorizontal: sizes.s12,
        borderRadius: sizes.s30,
    },
    titleContent:{
        fontWeight: '400',
        fontSize: sizes.s14,
        lineHeight: sizes.s22,
        color: colors.placeholder,
        marginRight: sizes.s6,
    },
    viewTitte:{
        paddingVertical: sizes.s4,
        paddingHorizontal: sizes.s12,
        borderRadius: sizes.s30,
    },
    PercentContent:{
        fontSize: sizes.s14,
        fontWeight: '400',
        lineHeight: 22,
        color:colors.blue,
    },
    icon:{
        width:sizes.s24,
        height:sizes.s24,
    },
    viewTextIcon:{
        flexDirection: 'row',
        marginRight:sizes.s16,
    },
    numberTimeLine:{
        fontWeight:'500',
        fontSize: sizes.s14,
        lineHeight:sizes.s22,
    },
    viewMoreContent:{
        fontWeight:'400',
        fontSize:sizes.s14,
        lineHeight:sizes.s22,
    },
    BtnViewMore:{
        fontWeight:'500',
        fontSize: sizes.s14,
        color:colors.blue,
    },
    touch:{
        padding: sizes.s12,
    },
    button:{
        backgroundColor: colors.blue2,
        marginTop: sizes.s14,
        paddingVertical: sizes.s9,
        borderRadius: sizes.s8,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
    },
    textButton:{
        color:colors.blue,
        fontWeight: '500',
        fontSize: sizes.s14,
        lineHeight: sizes.s22,
    },
    iconPlush:{
        width: sizes.s15,
        height:sizes.s15,
        marginRight:sizes.s5,
    },
    viewCard:{
        marginBottom: sizes.s10,
    },
    Footer:{
        width:'100%',
        position: 'absolute',
        bottom:1,
        paddingHorizontal: sizes.s21,
        paddingTop:sizes.s12,
        paddingBottom: sizes.s22,
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor: colors.white,
        alignItems:'center',
    },
    updateBtnFooter:{
        color:colors.blue,
        fontSize: sizes.s14,
        lineHeight: sizes.s22,
    },
    btnFooter:{
        backgroundColor: colors.blue,
        paddingVertical: sizes.s9,
        paddingHorizontal: sizes.s52,
        borderRadius: sizes.s8,

    },
    btnFinish:{
        color: colors.white,
        fontSize: sizes.s14,
        lineHeight: sizes.s22,
        fontWeight:'500',
    },
})
