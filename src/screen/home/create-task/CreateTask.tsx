import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ScreenProps } from 'model';
import { colors, strings, Style, sizes } from 'core';
import { Flex, NavigationBackButton, Buttons, Switch, Input } from 'component';
import { images } from 'assets';

const CreateTask: React.FC<ScreenProps> = ({ navigation }) => {
	const [isActiveMission, setIsActiveMission] = useState<boolean>(false);
	const [tag, setTag] = useState<any[]>([]);

	useEffect(() => {
		navigation.setOptions({
			title: strings.createTask,
			headerLeft: () => <NavigationBackButton icon={images.ic_close} />,
		});
	}, []);

	const onChangeActiveMission = () => setIsActiveMission(!isActiveMission);

	const renderTag = () => {
		return (
			<View>
				<Text style={[Style.txt14, Style.top12]}>Nhãn</Text>
			</View>
		);
	};

	const renderFooter = () => (
		<View style={[Style.ph16, Style.pv12]}>
			<Buttons title={strings.createTask} icon={images.ic_add_task} />
		</View>
	);

	return (
		<Flex style={styles.conatiner} scrollable footer={renderFooter()}>
			<View style={styles.block}>
				<Text style={Style.h5}>{strings.taskInfo}</Text>
				<View style={[Style.row_between, Style.top16]}>
					<Text style={Style.txt14}>Nhiệm vụ giao hộ</Text>
					<Switch active={isActiveMission} onChange={onChangeActiveMission} />
				</View>
				<Input label="Tên task" placeholder="Nhập tên Task" />
				<Input label="Người thực hiện" placeholder="Tìm thành viên" isPicker />
				<Input label="Thời hạn" placeholder="Chọn thời gian" isPicker />
				<View style={Style.row_between}>
					<Input style={{ width: '48%' }} label="Ưu tiên" placeholder="Chọn mức độ" isPicker />
					<Input
						style={{ width: '48%' }}
						label="Chu kỳ báo cáo"
						placeholder="Chọn giai đoạn"
						isPicker
					/>
				</View>
				{renderTag()}
			</View>
			<View style={[styles.block, Style.bottom24]}>
				<Text style={Style.txt14}>Nhiệm vụ giao hộ</Text>
				<Input label="Board" placeholder="Chọn board" isPicker />
				<Input label="List" placeholder="Chọn List" isPicker />
			</View>
		</Flex>
	);
};

export default CreateTask;

const styles = StyleSheet.create({
	conatiner: {
		flex: 1,
		backgroundColor: colors.separator,
	},
	block: {
		...Style.p16,
		...Style.top8,
		backgroundColor: colors.white,
	},
});
