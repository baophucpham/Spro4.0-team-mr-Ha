import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Style } from 'core';
import Switch from 'component/switch/Switch';
import Input from 'component/input/Input';
import Buttons from 'component/button/Buttons';
import { images } from 'assets';

const CreateList = ({ requestClose }: any) => {
	const [active, setActive] = useState<boolean>(false);
	const [boardName, setBoardName] = useState<string>('');
	const [date, setDate] = useState<any>();

	return (
		<View style={[Style.ph16, Style.top12]}>
			<View style={[Style.row_between]}>
				<Text>List giao hộ</Text>
				<Switch active={active} onChange={() => setActive(!active)} />
			</View>
			<Input
				label="Tên danh sách"
				placeholder="Nhập tên danh sách"
				value={boardName}
				onChangeText={setBoardName}
			/>
			<Input label="Người thực hiện" placeholder="Chọn" isPicker />
			<Input
				label="Thời hạn"
				placeholder="Chọn ngày"
				isDatePicker
				onChangeDate={setDate}
				value={date?.dateString}
			/>
			<Input label="Chu kỳ báo cáo" placeholder="Chọn" isPicker />
			<Buttons
				style={Style.top24}
				title="Tạo list"
				icon={images.ic_add_task}
				isSafe
				onPress={requestClose}
			/>
		</View>
	);
};

export default CreateList;

const styles = StyleSheet.create({});
