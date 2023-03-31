import { StyleSheet, Text, View, Slider} from 'react-native'
import React, { useState } from 'react'
import { strings } from 'core/localization'
import { Buttons, Input,ParagraphInput, Switch } from 'component';
import { colors, sizes, Style } from 'core/index';

const CreateWorkResult = () => {
	const [result, setResult] = useState<string>('');
  const [workTimes,setWorkTimes ] = useState<string>('');
  const [describe, setDescribe] = useState<string>('');
  const [valueSlider, setValueSlider] = useState<number>(0)

  return (
    <View style={styles.comtainerCreateWork}>
      <Input label={strings.result} placeholder={strings.result} value={result} onChangeText={setResult} />
      <Input label={strings.workTime}  placeholder={strings.workTime} value={workTimes} onChangeText={setWorkTimes} />
      <View style={styles.viewPagragraphInput}>
        <Text style={[Style.txt12, Style.bottom4]}>{strings.describe}</Text>
        <ParagraphInput label={strings.describe} placeholder={strings.describe} value={describe} onChangeText={setDescribe}/>
      </View>
      <View style={styles.viewSlider}>
        <View style={styles.viewPercent}>
          <Text style={[Style.txt12, Style.bottom4]}>{strings.progress}</Text>
          <Text style={styles.percent}>{Math.round(valueSlider)}%</Text>
        </View>
        <Slider minimumValue={0} maximumValue={100} value={valueSlider} onValueChange={setValueSlider}/>
      </View>
      <Buttons title={strings.createIssue}/>
    </View>
  )
}

export default CreateWorkResult

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
})
