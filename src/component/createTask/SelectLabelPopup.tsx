import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { memo, useState } from 'react';
import { colors, sizes, Style } from 'core';
import Input from 'component/input/Input';
import { images } from 'assets';
import Icon from 'component/image/Icon';
import Buttons from 'component/button/Buttons';
import { remove } from 'lodash';
import BottomSheetHeader from 'component/bottomSheet/BottomSheetHeader';

interface Props {
	requestClose: (onClose?: any) => void;
	onSubmit?: (data: any) => void;
}

const SelectLabelPopup: React.FC<Props> = ({ requestClose, onSubmit }) => {
	const [tagData, setTagData] = useState([
		{ id: 1, title: 'Design', color: colors.red },
		{ id: 2, title: 'Business', color: colors.green },
		{ id: 3, title: 'Other', color: colors.blue },
	]);
	const [selectedTag, setSelectedTag] = useState<any[]>([]);

	const onAddTag = () => {
		setTagData([...tagData, { id: 4, title: 'Dev', color: colors.orange }]);
	};

	const onSelectTag = (item: any) => {
		const isExists = selectedTag.some((tag) => tag.id === item.id);
		if (isExists) {
			remove(selectedTag, (tag) => tag.id === item.id);
		} else {
			selectedTag.push(item);
		}
		setSelectedTag([...selectedTag]);
	};

	const onEditTag = () => {};

	const onDeleteTag = (id: number | string) => {
		remove(tagData, (e) => e.id === id);
		setTagData([...tagData]);
	};

	const renderTag = () =>
		tagData.map((item, index) => {
			const isSelected = selectedTag.some((tag) => tag.id === item.id);
			return (
				<View
					key={index}
					style={[styles.itemTag, isSelected && { backgroundColor: colors.blue2 }]}>
					<Icon
						source={isSelected ? images.ic_checkbox_checked : images.ic_checkbox}
						size={sizes.s20}
						onPress={() => onSelectTag(item)}
					/>
					<View style={[Style.row, Style.pv14, Style.left24, Style.flex, Style.borderBottom]}>
						<Icon
							source={images.ic_tag}
							size={sizes.s24}
							style={[Style.right8]}
							tintColor={item.color}
						/>
						<Text style={[Style.txt14, Style.flex, Style.left8]}>{item.title}</Text>
						<Icon
							source={images.ic_edit}
							size={sizes.s20}
							style={[Style.right16]}
							onPress={onEditTag}
						/>
						<Icon
							source={images.ic_trash}
							size={sizes.s20}
							onPress={() => onDeleteTag(item.id)}
						/>
					</View>
				</View>
			);
		});

	return (
		<View>
			<BottomSheetHeader
				title="Select Label"
				iconLeft={images.ic_close}
				iconRight={images.ic_add_task}
				onClose={requestClose}
				closeOnPressIconRight={false}
				onPressIconRight={onAddTag}
			/>
			<ScrollView style={styles.scroll}>
				<Input
					label="List of personal labels"
					placeholder="Search labels"
					iconLeft={images.ic_search}
					style={[Style.ph16, Style.bottom16]}
				/>
				{renderTag()}
			</ScrollView>
			<Buttons
				title="Confirm"
				isSafe
				style={Style.mh16}
				onPress={() => requestClose(() => onSubmit?.(selectedTag))}
			/>
		</View>
	);
};

export default memo(SelectLabelPopup);

const styles = StyleSheet.create({
	itemTag: {
		...Style.ph16,
		...Style.row,
	},
	scroll: {
		flexGrow: 1,
		paddingBottom: sizes.s48,
	},
});
