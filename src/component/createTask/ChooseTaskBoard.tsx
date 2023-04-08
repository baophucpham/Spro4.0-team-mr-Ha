import { images } from 'assets';
import { ChooseTaskBoardData } from 'common/data';
import Icon from 'component/image/Icon';
import Input from 'component/input/Input';
import Separator from 'component/separator/Separator';
import { colors, screenHeight, sizes, Style } from 'core';
import { ChooseTaskBoardProps } from 'model';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { imageSource } from 'utils';

const ChooseTaskBoard: React.FC<ChooseTaskBoardProps> = ({ onPressBoard, requestClose }) => {
	const renderItemBoard = ({ item, index }: any) => (
		<TouchableOpacity
			style={[Style.bottom12, Style.radius12]}
			key={String(index)}
			onPress={() => {
				requestClose?.();
				onPressBoard?.(item);
			}}>
			<FastImage source={imageSource(item.image)} style={styles.backgroundImage}>
				<Text numberOfLines={2} style={[Style.h5, Style.bottom24, { color: colors.white }]}>
					{item.title}
				</Text>
				<Separator height={1} backgroundColor={colors.linghtGray} />
				<View style={[Style.row_between, Style.top16]}>
					<Text style={Style.txt14_white}>
						{item.from} <Icon source={images.ic_next} tintColor={colors.white} /> {item.to}
					</Text>
					<View style={Style.row}>
						<Text style={[Style.txt14_white, Style.right8]}>{item.percent}</Text>
						<Icon source={images.ic_overrated} size={sizes.s24} />
					</View>
				</View>
			</FastImage>
		</TouchableOpacity>
	);

	return (
		<View style={styles.container}>
			<Input placeholder="Search labels" iconLeft={images.ic_search} />
			<FlatList
				data={ChooseTaskBoardData}
				renderItem={renderItemBoard}
				contentContainerStyle={[Style.flexGrow, Style.pv16]}
				keyExtractor={(_, index) => String(index)}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default ChooseTaskBoard;

const styles = StyleSheet.create({
	container: StyleSheet.flatten([Style.ph16, { height: screenHeight * 0.6 }]),
	backgroundImage: {
		padding: sizes.s16,
		borderRadius: sizes.s8,
	},
});
