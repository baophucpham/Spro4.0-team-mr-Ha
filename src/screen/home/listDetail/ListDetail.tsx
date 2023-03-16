/* eslint-disable react/no-unstable-nested-components */
import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Flex } from 'component';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { images } from 'assets';
import { sizes } from 'core/index';

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
  return (
    <Flex>
      <Text>ListDetail</Text>
    </Flex>
  )
}

export default ListDetail

const styles = StyleSheet.create({
    btnHeader:{
        marginRight: sizes.s16
    },
})
