import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { strings } from 'core/localization';
import { colors, Navigator, sizes } from 'core/index';
import CheckList from './CheckList';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { images } from 'assets';
import CreateWorkResult from '../workResult/CreateWorkResult';
import CreateList from './CreateList';

const CheckItem = ({navigation}: any) => {
    useEffect(() => {
		navigation.setOptions({
            title: `${strings.testHeader}`,
		});
	}, []);

    const showBottomCreateNew = ()=>{
        Navigator.showBottom({
			screen: CreateList,
			hideTitle: false,
            title: `${strings.createList}`,
		})
    }

    const dataList = [
        {
            id: '01',
            title: 'Check list 01',
            dataItem:[
                {
                    name:'Check item 1',
                },
                {
                    name:'Check item 2',
                },
                {
                    name:'Check item 3',
                },
            ],
        },
        {
            id: '02',
            title: 'Check list 02',
            dataItem:[
                {
                    name:'Check item 1',
                },
                {
                    name:'Check item 2',
                },
                {
                    name:'Check item 3',
                },
                {
                    name:'Check item 4',
                },
            ],
        },
        {
            id: '03',
            title: 'Check list 03',
            dataItem:[
                {
                    name:'Check item 1',
                },
                {
                    name:'Check item 2',
                },
                {
                    name:'Check item 3',
                },

            ],
        },
    ]

  return (
    <View style={styles.containerCheckItem}>
        <ScrollView style={styles.viewScroll}>
        {dataList?.map((item:any,index:number)=>{
            return (
                <View key={index}>
                    <CheckList Data={item}/>
                </View>
        )})}
        </ScrollView>
        <View style={styles.Footer}>
            <TouchableOpacity style={styles.btnFooter} onPress={showBottomCreateNew}>
                <Image style={styles.iconPlush} source={images.ic_plush} />
                <Text style={styles.updateBtnFooter}>{strings.generateNewResults}</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CheckItem

const styles = StyleSheet.create({
    containerCheckItem:{
        backgroundColor: colors.table_header,
        paddingVertical: sizes.s24,
        alignItems:'center',
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
    viewScroll:{
        width:'100%',
        paddingHorizontal:sizes.s16,
        marginBottom: sizes.s25,
    },
    btnFooter:{
        flexDirection:'row',
        alignItems:'center',
    },
    iconPlush:{
        width: sizes.s15,
        height: sizes.s15,
    },
    updateBtnFooter:{
        color:colors.blue,
        fontSize: sizes.s14,
        lineHeight: sizes.s22,
        marginLeft: sizes.s10,
    },
})
