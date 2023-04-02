import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { images } from 'assets';
import { colors, Navigator, sizes, strings } from 'core/index';
import { Screens } from 'common';

const ListBtn = () => {
    const navigateWorkResult = () =>{
        Navigator.navigate(Screens.WorkResult)
    }
    const navigateCheckItem = () =>{
        Navigator.navigate(Screens.CheckItem)
    }
    const navigateIssue =()=>{
        Navigator.navigate(Screens.Issue)
    }

  return (
    <View>
      <TouchableOpacity style={styles.viewBtn} onPress={navigateWorkResult}>
        <View style={styles.viewContentBtn}>
            <Image style={styles.iconbtn} source={images.ic_workResult}/>
            <Text>{strings.workResults}</Text>
        </View>
        <View style={styles.viewContentBtn}>
            <View style={styles.viewnumberBtn}>
                <Text style={styles.numberBtn}>9</Text>
            </View>
            <Image style={styles.iconArrow} source={images.ic_arrowRightBlack}/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewBtn} onPress={navigateCheckItem}>
        <View style={styles.viewContentBtn}>
            <Image style={styles.iconbtn} source={images.ic_checkList}/>
            <Text>{strings.testHeader}</Text>
        </View>
        <View style={styles.viewContentBtn}>
            <Image style={styles.iconAdd} source={images.ic_add}/>
            <View >
                <Text style={styles.addNew}>{strings.create}</Text>
            </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewBtn}>
        <View style={styles.viewContentBtn}>
            <Image style={styles.iconbtn} source={images.ic_link}/>
            <Text>{strings.connectWithTicket}</Text>
        </View>
        <View style={styles.viewContentBtn}>
            <View style={styles.viewnumberBtn}>
                <Text style={styles.numberBtn}>9</Text>
            </View>
            <Image style={styles.iconArrow} source={images.ic_arrowRightBlack}/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewBtn} onPress={navigateIssue}>
        <View style={styles.viewContentBtn}>
            <Image style={styles.iconbtn} source={images.icon_warning}/>
            <Text>{strings.issue}</Text>
        </View>
        <View style={styles.viewContentBtn}>
            <View style={styles.viewnumberBtn}>
                <Text style={styles.numberBtn}>9</Text>
            </View>
            <Image style={styles.iconArrow} source={images.ic_arrowRightBlack}/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewBtn}>
        <View style={styles.viewContentBtn}>
            <Image style={styles.iconbtn} source={images.ic_file}/>
            <Text>{strings.attachments}</Text>
        </View>
        <View style={styles.viewContentBtn}>
            <Image style={styles.iconAdd} source={images.ic_add}/>
            <View >
                <Text style={styles.addNew}>{strings.create}</Text>
            </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewBtn}>
        <View style={styles.viewContentBtn}>
            <Image style={styles.iconbtn} source={images.ic_messenger}/>
            <Text>{strings.comment}</Text>
        </View>
        <View style={styles.viewContentBtn}>
            <View style={styles.viewnumberBtn}>
                <Text style={styles.numberBtn}>9</Text>
            </View>
            <Image style={styles.iconArrow} source={images.ic_arrowRightBlack}/>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ListBtn;

const styles = StyleSheet.create({
	viewBtn: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: sizes.s16,
		paddingVertical: sizes.s12,
		justifyContent: 'space-between',
		marginBottom: sizes.s1,
		backgroundColor: colors.white,
	},
	viewContentBtn: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	iconbtn: {
		width: sizes.s32,
		height: sizes.s32,
		marginRight: sizes.s14,
	},
	iconArrow: {
		width: sizes.s6,
		height: sizes.s12,
		marginLeft: sizes.s14,
	},
	iconAdd: {
		width: sizes.s16,
		height: sizes.s16,
		marginRight: sizes.s14,
	},
	viewnumberBtn: {
		backgroundColor: colors.red,
		width: sizes.s20,
		height: sizes.s20,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: sizes.s22,
		textAlign: 'center',
	},
	numberBtn: {
		color: colors.white,
		fontWeight: '400',
		fontSize: sizes.s14,
		lineHeight: sizes.s22,
	},
	addNew: {
		color: colors.blue,
		fontWeight: '400',
		fontSize: sizes.s14,
		lineHeight: sizes.s22,
	},
});
