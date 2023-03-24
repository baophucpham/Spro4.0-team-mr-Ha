import { images } from 'assets';
import Buttons from 'component/button/Buttons';
import Input from 'component/input/Input';
import RadioButton from 'component/radioButton/RadioButton';
import Switch from 'component/switch/Switch';
import { Style } from 'core';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CreateBoard: React.FC = ({ requestClose }: any) => {
	const [active, setActive] = useState<boolean>(false);
	const [boardName, setBoardName] = useState<string>('');
	const [date, setDate] = useState<any>();

	return (
		<View style={[Style.ph16, Style.top12]}>
			<View style={[Style.row_between]}>
				<Text>Bảng giao hộ</Text>
				<Switch active={active} onChange={() => setActive(!active)} />
			</View>
			<Input
				label="Tên bảng"
				placeholder="Nhập tên bảng"
				value={boardName}
				onChangeText={setBoardName}
			/>
			<Input
				label="Thời hạn"
				placeholder="Chọn ngày"
				isDatePicker
				onChangeDate={setDate}
				value={date?.dateString}
			/>
			<Text style={[Style.top12, Style.txt14]}>Loại bảng</Text>
			<RadioButton
				data={[{ title: 'Công ty' }, { title: 'Cá nhân' }]}
				itemStyle={[Style.row]}
				horizontal
			/>
			<Buttons
				style={Style.top24}
				title="Tạo bảng"
				icon={images.ic_add_task}
				isSafe
				onPress={requestClose}
			/>
		</View>
	);
};

export default CreateBoard;

const styles = StyleSheet.create({});
