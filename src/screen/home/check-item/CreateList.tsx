import { StyleSheet, Text, View, Slider} from 'react-native'
import React, { useState } from 'react'
import { strings } from 'core/localization'
import { Buttons, Input,ParagraphInput, Switch } from 'component';
import { colors, sizes, Style } from 'core/index';

const CreateList = () => {
    const [result, setResult] = useState<string>('');
  return (
    <View style={styles.comtainerCreateWork}>
        <Input label={strings.nameList} placeholder={strings.nameList} value={result} onChangeText={setResult} />
    <Buttons style={styles.buttonFooter} title={strings.createList}/>
</View>
  )
}

export default CreateList

const styles = StyleSheet.create({
    comtainerCreateWork:{
        marginBottom: sizes.s30,
        paddingHorizontal: sizes.s16,
    },
    viewPagragraphInput:{
      marginTop: sizes.s16,
    },
    viewSlider:{
      marginTop: sizes.s16,
      marginBottom: sizes.s40,
    },
    viewPercent:{
      flexDirection:'row',
    },
    percent:{
      fontSize:sizes.s12,
      marginLeft: sizes.s4,
      fontWeight: '400',
      color: colors.blue,
    },
    buttonFooter:{
        marginTop: sizes.s30,
    },
})
