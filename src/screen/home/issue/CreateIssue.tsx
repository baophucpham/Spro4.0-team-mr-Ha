import { Slider, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors, sizes, strings, Style } from 'core/index'
import { Buttons, Input, ParagraphInput } from 'component'

const CreateIssue = () => {
    const [Issue, setIssue] = useState<string>('');
    const [workTimes,setWorkTimes ] = useState<string>('');
    const [describe, setDescribe] = useState<string>('');
    const [valueSlider, setValueSlider] = useState<number>(0)

  return (
    <View style={styles.comtainerCreateWork}>
        <Input label={strings.Issue} placeholder={strings.Issue} value={Issue} onChangeText={setIssue} />
            <View style={styles.viewPagragraphInput}>
                <Text style={[Style.txt12, Style.bottom4]}>{strings.describe}</Text>
                <ParagraphInput label={strings.describe} placeholder={strings.describe} value={describe} onChangeText={setDescribe}/>
            </View>
        <Buttons style={styles.buttonFooter} title={strings.createIssue}/>
    </View>
  )
}

export default CreateIssue

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
