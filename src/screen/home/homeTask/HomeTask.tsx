import { images } from 'assets';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TabScreenProps } from 'model';
import { Flex } from 'component';
import { colors, Navigator, sizes } from 'core/index';
import Card from './Card';
import Table from './Table';
import List from './List';
import Task from './Task';
import SearchBootomSheet from './SearchBottomSheet';
import TimeLineBottomSheet from './TimeLineBottomSheet';
import { strings } from 'core';

const HomeTask: React.FC<TabScreenProps> = ({ navigation }) => {
	const [changeTab, setChangeTab] = useState(1);
	const [openSreach, setOpenSearch] = useState<boolean>(false);
	useEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	const pressTable = () => {
		setChangeTab(1);
	};
	const pressList = () => {
		setChangeTab(2);
	};
	const pressTask = () => {
		setChangeTab(3);
	};
	const showBottomsheet = () => {
		Navigator.showBottom({
			screen: SearchBootomSheet,
			hideTitle: false,
		});
	};

	const showOptionDay = () => {
		Navigator.showBottom({
			screen: TimeLineBottomSheet,
			hideTitle: false,
		});
	};

	const showOption = () => {
		Navigator.showBottom({
			screen: TimeLineBottomSheet,
			hideTitle: false,
		});
	};

	return (
		<Flex style={styles.container}>
			<View style={styles.quickReport}>
				<View style={styles.viewHeader}>
					<Text style={styles.textHeader}>{strings.quickReport}</Text>
					<TouchableOpacity onPress={showBottomsheet}>
						<Image source={images.ic_search} />
					</TouchableOpacity>
				</View>
				<View style={styles.viewBtn}>
					<TouchableOpacity style={styles.styleBtn} onPress={showOptionDay}>
						<Text>{strings.daily}</Text>
						<Image style={styles.styleIconBtn} source={images.ic_arrow_down_vector} />
					</TouchableOpacity>
					<TouchableOpacity style={styles.styleBtn} onPress={showOption}>
						<Text>{strings.all}</Text>
						<Image style={styles.styleIconBtn} source={images.ic_arrow_down_vector} />
					</TouchableOpacity>
				</View>
				<View style={styles.viewCard}>
					<Card />
				</View>
			</View>

			<View style={styles.quickReport}>
				<View style={styles.viewHeader}>
					<Text style={styles.textHeader}>{strings.myTask}</Text>
				</View>
				<View style={styles.tabBottom}>
					{changeTab === 1 ? (
						<TouchableOpacity style={styles.sizeTabBottomHover}>
							<Text style={styles.sizeTabBottomHover}>{strings.table}</Text>
						</TouchableOpacity>
					) : (
						<TouchableOpacity onPress={pressTable}>
							<Text style={styles.sizeTabBottom}>{strings.table}</Text>
						</TouchableOpacity>
					)}
					{changeTab === 2 ? (
						<TouchableOpacity style={styles.sizeTabBottomHover}>
							<Text style={styles.sizeTabBottomHover}>{strings.list}</Text>
						</TouchableOpacity>
					) : (
						<TouchableOpacity onPress={pressList}>
							<Text style={styles.sizeTabBottom}>{strings.list}</Text>
						</TouchableOpacity>
					)}
					{changeTab === 3 ? (
						<TouchableOpacity style={styles.sizeTabBottomHover}>
							<Text style={styles.sizeTabBottomHover}>{strings.task}</Text>
						</TouchableOpacity>
					) : (
						<TouchableOpacity onPress={pressTask}>
							<Text style={styles.sizeTabBottom}>{strings.task}</Text>
						</TouchableOpacity>
					)}
				</View>
				{changeTab === 1 && <Table />}
				{changeTab === 2 && <List />}
				{changeTab === 3 && <Task />}
			</View>
		</Flex>
	);
};

export default HomeTask;

const styles = StyleSheet.create({
	container: {
		paddingTop: sizes.s50,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: colors.separator,
	},
	quickReport: {
		backgroundColor: '#FFFFFF',
		marginBottom: sizes.s8,
		paddingBottom: sizes.s16,
	},
	MyTask: {
		backgroundColor: '#FFFFFF',
	},
	viewHeader: {
		padding: sizes.s16,
		paddingBottom: 0,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	textHeader: {
		fontWeight: '500',
		fontSize: sizes.s20,
	},
	viewBtn: {
		padding: sizes.s16,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	styleBtn: {
		width: sizes.s160,
		paddingHorizontal: sizes.s16,
		paddingVertical: sizes.s9,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderWidth: sizes.s1,
		borderColor: '#DFDFDF',
		borderRadius: sizes.s26,
		textAlign: 'center',
		alignItems: 'center',
	},
	styleIconBtn: {
		width: sizes.s11,
		height: sizes.s6,
	},
	viewCard: {
		flexDirection: 'row',
		paddingHorizontal: sizes.s16,
		justifyContent: 'space-between',
	},
	tabBottom: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: sizes.s10,
		borderBottomWidth: sizes.s2,
		borderBottomColor: '#E8E8E8',
		paddingBottom: sizes.s10,
		marginBottom: sizes.s10,
	},
	sizeTabBottom: {
		fontWeight: '500',
		fontSize: sizes.s14,
		color: '#8C8C8C',
	},
	sizeTabBottomHover: {
		fontWeight: '500',
		fontSize: sizes.s14,
		color: '#1890FF',
		borderBottomWidth: sizes.s2,
		borderBottomColor: '#1890FF',
		paddingBottom: sizes.s3,
	},
});
