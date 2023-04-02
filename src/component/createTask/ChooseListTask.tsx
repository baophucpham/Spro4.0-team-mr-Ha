import { images } from 'assets';
import { ChooseTaskBoardData } from 'common/data';
import Input from 'component/input/Input';
import { screenHeight, Style } from 'core';
import React from 'react';
import { FlatList, View } from 'react-native';
import CradTask from 'screen/home/listDetail/CradTask';

const ChooseListTask = () => {
	const renderItem = ({ item }: any) => (
		<View style={[Style.top16, Style.border, Style.radius16, { backgroundColor: 'white' }]}>
			<CradTask Data={item} />
		</View>
	);

	return (
		<View style={{ height: screenHeight * 0.6 }}>
			<FlatList
				data={ChooseTaskBoardData}
				renderItem={renderItem}
				keyExtractor={(item, index) => String(index)}
				ListHeaderComponent={<Input placeholder="Search labels" iconLeft={images.ic_search} />}
				contentContainerStyle={Style.ph16}
			/>
		</View>
	);
};

export default ChooseListTask;
