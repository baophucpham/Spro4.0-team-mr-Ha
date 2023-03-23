import { images } from 'assets';
import { TaskColorData } from 'common/data';
import Buttons from 'component/button/Buttons';
import Icon from 'component/image/Icon';
import Input from 'component/input/Input';
import { screenWidth, sizes, Style } from 'core';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
	requestClose: () => void;
	onSubmit: (data: any) => void;
}

const CreateLabel: React.FC<Props> = ({ requestClose, onSubmit }) => {
	const [name, setName] = useState<string>('');
	const [color, setColor] = useState<string>(TaskColorData[0].backgroundColor);

	const onPressSubmit = () => {
		requestClose?.();
		onSubmit?.({ title: name, color });
	};

	return (
		<View style={Style.ph16}>
			<Input
				autoFocus
				label="Issue"
				placeholder="Label name"
				value={name}
				onChangeText={setName}
			/>
			<Text style={[Style.txt12, Style.top8]}>Label color</Text>
			<View style={[Style.row_wrap, { justifyContent: 'space-between' }]}>
				{TaskColorData.map((item, index) => {
					const isSelected = color === item.backgroundColor;
					return (
						<TouchableOpacity
							key={index}
							onPress={() => setColor(item.backgroundColor)}
							style={[
								styles.colorItem,
								{
									backgroundColor: isSelected ? item.borderColor : item.backgroundColor,
								},
							]}>
							<View
								style={{
									backgroundColor: item.backgroundColor,
									justifyContent: 'center',
									alignItems: 'center',
									flex: 1,
									borderRadius: sizes.s4,
								}}>
								{isSelected && <Icon source={images.ic_check} size={sizes.s24} />}
							</View>
						</TouchableOpacity>
					);
				})}
			</View>
			<Buttons
				title="Create Issue"
				style={[Style.top16]}
				isSafe
				disabled={!name || !color}
				onPress={onPressSubmit}
			/>
		</View>
	);
};

export default CreateLabel;
const colorBlockSize = (screenWidth - sizes.s16 * 2 - sizes.s12 * 4) / 5;
const styles = StyleSheet.create({
	colorItem: {
		borderRadius: sizes.s8,
		marginBottom: sizes.s12,
		width: colorBlockSize,
		height: colorBlockSize,
		padding: sizes.s4,
	},
});
