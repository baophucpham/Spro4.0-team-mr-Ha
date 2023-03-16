import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { images } from 'assets';
import { colors, sizes } from 'core/index';
import { Flex } from 'component';

const TaskDetail = ({navigation}:any) => {
    useEffect(() => {
		navigation.setOptions({
            title: 'Task Details',
            headerRight: ()=>(
                <TouchableOpacity style={styles.btnHeader}>
                    <Image source={images.ic_more}/>
                </TouchableOpacity>
            ),
		});
	}, []);
  return (
    <Flex>
    <View style={styles.taskDetailContainer}>
        <View style={styles.headerTaskDetail}>
            <Text style={styles.titleHeader}>{'[212390]'} Security for new IOS </Text>
            <Image style={styles.IconTaskHeader} source={images.ic_task}/>
        </View>
       
    </View>
        {/* <View style={styles.Footer}>
            <TouchableOpacity>
                <Text style={styles.updateBtnFooter}>Cập nhật tiến độ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnFooter}>
                <Text style={styles.btnFinish}>Hoàn thành</Text>
            </TouchableOpacity>
        </View> */}
    </Flex>
  )
}

export default TaskDetail

const styles = StyleSheet.create({
    btnHeader:{
        marginRight: sizes.s16,
    },
    taskDetailContainer:{
        backgroundColor: colors.placeholder,
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
})
