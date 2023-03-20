import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { strings } from 'core/localization'
import { Input } from 'component';
import { sizes } from 'core/index';

const CreateWorkResult = () => {
	const [result, setResult] = useState<string>('');
    const [workTimes,setWorkTimes ] = useState<string>('')
  return (
    <View style={styles.comtainerCreateWork}>
		<Input placeholder={strings.result} value={result} onChangeText={setResult} />
		<Input placeholder={strings.workTime} value={workTimes} onChangeText={setWorkTimes} />
    </View>
  )
}

export default CreateWorkResult

const styles = StyleSheet.create({
    comtainerCreateWork:{
        marginBottom: sizes.s30,
        paddingHorizontal: sizes.s16,
    },
})
