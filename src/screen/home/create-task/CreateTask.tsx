import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ChooseTaskBoardProps, ScreenProps } from 'model';
import { colors, strings, Style, sizes, Navigator } from 'core';
import {
	Flex,
	NavigationBackButton,
	Buttons,
	Switch,
	Input,
	Icon,
	SelectLabelPopup,
	ChooseTaskBoard,
	CreateBoard,
	ChooseListTask,
} from 'component';
import { images } from 'assets';
import { remove } from 'lodash';

const CreateTask: React.FC<ScreenProps> = ({ navigation }) => {
	const [isActiveMission, setIsActiveMission] = useState<boolean>(false);
	const [tagData, setTagData] = useState<any[]>([]);
	const [boardData, setBoardData] = useState<any>();

	useEffect(() => {
		navigation.setOptions({
			title: strings.createTask,
			headerLeft: () => <NavigationBackButton icon={images.ic_close} />,
		});
	}, []);

	const onChangeActiveMission = () => setIsActiveMission(!isActiveMission);

	const onPressAddTag = () => {
		Navigator.showBottom({
			screen: SelectLabelPopup,
			showHeader: false,
			tagSelected: tagData,
			onSubmit: (data: any) => setTagData([...data]),
		});
	};

	const onPressChooseBoard = () => {
		Navigator.showBottom<ChooseTaskBoardProps>({
			screen: ChooseTaskBoard,
			iconLeft: images.ic_close,
			iconRight: images.ic_add_task,
			onPressBoard: setBoardData,
			onPressIconRight: () => {
				Navigator.showBottom({
					screen: CreateBoard,
					title: 'Tạo bảng',
					iconLeft: images.ic_back,
				});
			},
		});
	};

	const onPressChooseList = () => {
		Navigator.showBottom({
			screen: ChooseListTask,
			title: 'Choose list',
			iconLeft: images.ic_close,
			iconRight: images.ic_add_task,
		});
	};

	const renderTag = () => {
		return (
			<View>
				<Text style={[Style.txt14, Style.top12]}>Nhãn</Text>
				<View style={[Style.row_wrap, Style.top8]}>
					<TouchableOpacity style={styles.addTag} onPress={onPressAddTag}>
						<Icon source={images.ic_add} tintColor={colors.white} size={sizes.s14} />
						<Text style={[Style.txt12_white, Style.left4]}>Add Tag</Text>
					</TouchableOpacity>
					{tagData.map((item, index) => (
						<View style={[Style.row, Style.left8, Style.bottom8]}>
							<Icon source={images.ic_tag} tintColor={item.color} size={sizes.s24} />
							<Text style={[Style.txt14, { paddingHorizontal: sizes.s4 }]}>
								{item.title}
							</Text>
							<Icon
								source={images.ic_close_red}
								onPress={() => {
									remove(tagData, (e) => e.id === item.id);
									setTagData([...tagData]);
								}}
							/>
						</View>
					))}
				</View>
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
				<Text style={Style.h5}>The Task will be saved to</Text>
				<Input
					label="Board"
					placeholder="Chọn board"
					isPicker
					onPress={onPressChooseBoard}
					value={boardData?.title}
				/>
				<Input label="List" placeholder="Chọn List" isPicker onPress={onPressChooseList} />
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
	addTag: {
		...Style.row,
		paddingVertical: sizes.s4,
		paddingHorizontal: sizes.s8,
		borderRadius: sizes.s12,
		backgroundColor: colors.blue,
	},
});
