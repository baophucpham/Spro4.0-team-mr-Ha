import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { strings } from 'core/localization';
import { colors, Navigator, sizes } from 'core/index';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { images } from 'assets';
import TimeLineBottomSheet from '../homeTask/TimeLineBottomSheet';
import CreateIssue from './CreateIssue';

const Issue = ({navigation}: any) => {
    useEffect(() => {
		navigation.setOptions({
            title: `${strings.Issue}`,
		});
	}, []);

    const showOptionDay = () =>{
		Navigator.showBottom({
			screen: TimeLineBottomSheet,
			hideTitle: false,
		})
	}

    const showBottomCreateNew = ()=>{
        Navigator.showBottom({
			screen: CreateIssue,
			hideTitle: false,
            title: `${strings.createIssue}`,
		})
    }

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
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.titleHeader}>{strings.task}</Text>
        </View>
        <View style={styles.headerContent}>
            <Text style={styles.contentHeader}>[212390] Security for new IOS </Text>
        </View>
        <View style={styles.bodyContainer}>
            <View>
                <Text>{strings.result} (3)</Text>
            </View>
            <TouchableOpacity style={styles.styleBtn} onPress={showOptionDay}>
                <Text style={styles.nameButton}>Task</Text>
                <Image style={styles.styleIconBtn} source={images.ic_arrow_down_vector} />
            </TouchableOpacity>
        </View>
        <ScrollView>
            <View style={styles.viewCardContainer}>
            {data?.map(()=>(
                <View style={styles.cardWorkResult}>
                    <View style={styles.headerCard}>
                        <View style={styles.avatarContent}>
                            <Image style={styles.avatarWorkResult} source={images.avatar_default_2} />
                            <Text>08/08 14:25</Text>
                        </View>
                        <TouchableOpacity>
                         <Image style={styles.avatarWorkResult} source={images.ic_more} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewTitleCard}>
                        <View>
                            <Text style={styles.titleCard}>kết quả</Text>
                            <Text style={styles.titleCard}>Fail</Text>
                        </View>
                        <View>
                            <Text style={styles.titleCard}>giờ làm</Text>
                            <View style={styles.viewTimeLine}>
                                <Text style={styles.titleCard}>{'0.25 (15’)'}</Text>
                                <Image style={styles.iconArrow} source={images.ic_arrow_down_vector} />
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text>
                        Update new Security system for the Ios update. Test auto layout 2line.
                        </Text>
                    </View>
                </View>
            ))}
            </View>
        </ScrollView>
        <View style={styles.Footer}>
            <TouchableOpacity style={styles.btnFooter} onPress={showBottomCreateNew}>
                <Image style={styles.iconPlush} source={images.ic_plush} />
                <Text style={styles.updateBtnFooter}>{strings.createIssue}</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Issue

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.separator,
    },
    headerContainer:{
        padding: sizes.s16,
    },
    bodyContainer:{
        padding: sizes.s16,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    viewCardContainer:{
        paddingHorizontal:sizes.s16,
        paddingBottom: sizes.s60,
    },
    headerContent:{
        paddingHorizontal: sizes.s16,
    },
    titleHeader:{
        fontWeight:'400',
        fontSize: sizes.s16,
        lineHeight: sizes.s24,
    },
    contentHeader:{
        fontWeight:'500',
        fontSize: sizes.s16,
        lineHeight: sizes.s24,
    },
    styleBtn: {
		paddingHorizontal: sizes.s16,
		paddingVertical: sizes.s9,
		flexDirection: 'row',
		borderWidth: sizes.s1,
		borderColor: '#DFDFDF',
		borderRadius: sizes.s26,
		textAlign: 'center',
		alignItems: 'center',
        marginRight: sizes.s12,
        backgroundColor: colors.white,
	},
    nameButton:{
        marginHorizontal: sizes.s12,
    },
    styleIconBtn: {
		width: sizes.s11,
		height: sizes.s6,
	},
    cardWorkResult:{
        backgroundColor: colors.white,
        marginBottom: sizes.s8,
        borderRadius: sizes.s8,
        padding: sizes.s12,
    },
    avatarWorkResult:{
        width: sizes.s24,
        height: sizes.s24,
        marginRight: sizes.s10,
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
    iconPlush:{
        width: sizes.s15,
        height: sizes.s15,
    },
    btnFooter:{
        flexDirection:'row',
        alignItems:'center',
    },
    updateBtnFooter:{
        color:colors.blue,
        fontSize: sizes.s14,
        lineHeight: sizes.s22,
        marginLeft: sizes.s10,
    },
    headerCard:{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    viewTitleCard:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop: sizes.s12,
        borderBottomWidth: sizes.s1,
        borderBottomColor: colors.linghtGray,
        paddingBottom: sizes.s12,
        marginBottom: sizes.s12,
    },
    avatarContent:{
        flexDirection:'row',
        alignItems:'center',
    },
    titleCard:{
        fontWeight:'400',
        fontSize: sizes.s14,
        color: colors.placeholder,
    },
    iconArrow:{
        width: sizes.s9,
		height: sizes.s5,
        marginLeft: sizes.s4,
    },
    viewTimeLine:{
        flexDirection:'row',
        alignItems:'center',
    },
})
