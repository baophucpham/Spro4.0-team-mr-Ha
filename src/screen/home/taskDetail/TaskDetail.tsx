import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { images } from 'assets';
import { colors, Navigator, sizes, strings } from 'core/index';
import { Flex, ToastDebug } from 'component';
import ListBtn from './ListBtn';
import TimeLineBottomSheet from '../homeTask/TimeLineBottomSheet';

const TaskDetail = ({navigation}:any) => {
    useEffect(() => {
		navigation.setOptions({
            title: `${strings.taskDetails}`,
            headerRight: ()=>(
                <TouchableOpacity style={styles.btnHeader}>
                    <Image source={images.ic_more}/>
                </TouchableOpacity>
            ),
		});
	}, []);

    const showOptionDay = () =>{
		Navigator.showBottom({
			screen: TimeLineBottomSheet,
			hideTitle: false,
		})
	}

  return (
    <View style={styles.container}>
    <View style={styles.taskDetailContainer}>
        <View style={styles.headerTaskDetail}>
            <Text style={styles.titleHeader}>{'[212390]'} Security for new IOS </Text>
            <Image style={styles.IconTaskHeader} source={images.ic_task}/>
        </View>
        <View style={styles.headerTaskDetail}>
            <Text>
                Self assigned / Board  Ipsum dolor sit  amet  /
                List  Ipsum dolor sit  amet sum dolor sit  amet dolor ...
            </Text>
        </View>
        <View style={styles.headerContent}>
            <View style={styles.viewTextIcon} >
                <Text style={styles.titleContent}>{strings.creator}</Text>
                <Image style={styles.icon} source={images.avatar_default}/>
            </View>
            <View style={styles.viewTextIcon}>
                <Text style={styles.titleContent}>{strings.receiver}</Text>
                <Image style={styles.icon} source={images.avatar_default}/>
            </View>
            <View style={styles.viewTextIcon}>
                <Text style={styles.titleContent}>{strings.status}</Text>
                <Image style={styles.icon} source={images.ic_Running}/>
            </View>
        </View>
        <View style={styles.viewBtn}>
            <TouchableOpacity style={styles.styleBtn} onPress={showOptionDay}>
                <Text style={styles.nameButton}>{strings.task}</Text>
                <Image style={styles.styleIconBtn} source={images.ic_arrow_down_vector} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.styleBtn} onPress={showOptionDay}>
                <Image style={styles.iconCrittcal} source={images.ic_critical}/>
                <Text style={styles.nameButton}>{strings.nomal}</Text>
                <Image style={styles.styleIconBtn} source={images.ic_arrow_down_vector} />
            </TouchableOpacity>
            <View style={styles.percentTask}>
                <Text style={styles.numberPercentTask}>20%</Text>
            </View>
        </View>

        <View style={styles.viewListBtn}>
            <ListBtn/>
        </View>
    </View>
        <View style={styles.Footer}>
            <TouchableOpacity>
                <Text style={styles.updateBtnFooter}>{strings.updateProgress}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnFooter}>
                <Text style={styles.btnFinish}>{strings.complete}</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default TaskDetail

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.separator,
    },
    iconCrittcal:{
        width: sizes.s14,
        height: sizes.s14,
    },
    btnHeader:{
        marginRight: sizes.s16,
    },
    taskDetailContainer:{
        backgroundColor: colors.separator,
    },
    headerTaskDetail:{
        backgroundColor: colors.white,
        paddingHorizontal: sizes.s16,
        paddingTop: sizes.s20,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    titleHeader:{
        fontWeight: '500',
        fontSize: sizes.s20,
        lineHeight: sizes.s24,
    },
    IconTaskHeader:{
        width: sizes.s32,
        height: sizes.s32,
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
    headerContent:{
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        paddingHorizontal: sizes.s16,
        paddingTop: sizes.s20,

    },
    viewTextIcon:{
        flexDirection: 'row',
        marginRight:sizes.s16,
    },
    titleContent:{
        fontWeight: '400',
        fontSize: sizes.s14,
        lineHeight: sizes.s22,
        color: colors.placeholder,
        marginRight: sizes.s6,
    },
    icon:{
        width:sizes.s24,
        height:sizes.s24,
    },
    viewBtn: {
		padding: sizes.s16,
		flexDirection: 'row',
        backgroundColor: colors.white,
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
	},
	styleIconBtn: {
		width: sizes.s11,
		height: sizes.s6,
	},
    percentTask:{
        paddingHorizontal: sizes.s12,
		paddingVertical: sizes.s4,
        backgroundColor: colors.blue2,
        borderRadius: sizes.s26,
        textAlign: 'center',
		alignItems: 'center',
    },
    numberPercentTask:{
        fontWeight: '500',
        color:colors.blue,
        fontSize: sizes.s16,
        lineHeight: sizes.s24,
    },
    nameButton:{
        marginHorizontal: sizes.s12,
    },
    viewListBtn:{
        marginTop: sizes.s8,
        // backgroundColor: colors.white,
    },
})
