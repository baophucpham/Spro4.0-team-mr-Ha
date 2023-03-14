import { images } from 'assets';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TabScreenProps } from 'model';

const HomeTask: React.FC<TabScreenProps> = () => {
	return (
		<View style={styles.container}>
			<View style={styles.quickReport}>
				<View style={styles.viewHeader}>
					<Text style={styles.textHeader}>Báo cáo nhanh</Text>
					<TouchableOpacity>
						<Image source={images.ic_search} />
					</TouchableOpacity>
				</View>
				<View style={styles.viewBtn}>
					<TouchableOpacity style={styles.styleBtn}>
						<Text>Hàng ngày</Text>
						<Image style={styles.styleIconBtn} source={images.ic_arrow_down_vector} />
					</TouchableOpacity>
					<TouchableOpacity style={styles.styleBtn}>
						<Text>Tất cả</Text>
						<Image style={styles.styleIconBtn} source={images.ic_arrow_down_vector} />
					</TouchableOpacity>
				</View>
				<View style={styles.viewCard}>
					<View style={styles.card}>
						<Text>Hoàn thành</Text>
						<View style={styles.viewIconNumberCard}>
							<Image style={styles.icon} source={images.ic_finish} />
							<Text style={styles.mumberCard}>02</Text>
						</View>
					</View>
					<View style={styles.card}>
						<Text>Quá hạn</Text>
						<View style={styles.viewIconNumberCard}>
							<Image style={styles.icon} source={images.ic_overrated} />
							<Text style={styles.mumberCard}>02</Text>
						</View>
					</View>
					<View style={styles.card}>
						<Text>Chưa quá hạn</Text>
						<View style={styles.viewIconNumberCard}>
							<Image style={styles.icon} source={images.ic_waiting} />
							<Text style={styles.mumberCard}>02</Text>
						</View>
					</View>
				</View>
				<View style={styles.viewCard}>
					<View style={styles.card}>
						<Text>Phản hồi</Text>
						<View style={styles.viewIconNumberCard}>
							<Image style={styles.icon} source={images.ic_Feedback} />
							<Text style={styles.mumberCard}>02</Text>
						</View>
					</View>
					<View style={styles.card}>
						<Text>Mở lại</Text>
						<View style={styles.viewIconNumberCard}>
							<Image style={styles.icon} source={images.ic_reopen} />
							<Text style={styles.mumberCard}>02</Text>
						</View>
					</View>
					<View style={styles.card}>
						<Text>Sự cố</Text>
						<View style={styles.viewIconNumberCard}>
							<Image style={styles.icon} source={images.ic_issue} />
							<Text style={styles.mumberCard}>02</Text>
						</View>
					</View>
				</View>
				<View style={styles.viewCard}>
					<View style={styles.card}>
						<Text>Đã hủy</Text>
						<View style={styles.viewIconNumberCard}>
							<Image style={styles.icon} source={images.ic_CancelTask} />
							<Text style={styles.mumberCard}>02</Text>
						</View>
					</View>
				</View>
			</View>

			<View style={styles.quickReport}>
				<View style={styles.viewHeader}>
					<Text style={styles.textHeader}>Task của tôi</Text>
				</View>
				<View style={styles.viewCard}>
					<View style={styles.card}>
						<Text>Đã giao</Text>
						<View style={styles.viewIconNumberCard}>
							<Image style={styles.icon} source={images.ic_Assign} />
							<Text style={styles.mumberCard}>02</Text>
						</View>
					</View>
					<View style={styles.card}>
						<Text>Đang chạy</Text>
						<View style={styles.viewIconNumberCard}>
							<Image style={styles.icon} source={images.ic_Running} />
							<Text style={styles.mumberCard}>02</Text>
						</View>
					</View>
					<View style={styles.card}>
						<Text>Hoàn thành</Text>
						<View style={styles.viewIconNumberCard}>
							<Image style={styles.icon} source={images.ic_finish} />
							<Text style={styles.mumberCard}>02</Text>
						</View>
					</View>
				</View>
				<View style={styles.viewCard}>
					<View style={styles.card}>
						<Text>Phản hồi</Text>
						<View style={styles.viewIconNumberCard}>
							<Image style={styles.icon} source={images.ic_Feedback} />
							<Text style={styles.mumberCard}>02</Text>
						</View>
					</View>
					<View style={styles.card}>
						<Text>Đã hủy</Text>
						<View style={styles.viewIconNumberCard}>
							<Image style={styles.icon} source={images.ic_CancelTask} />
							<Text style={styles.mumberCard}>02</Text>
						</View>
					</View>
					<View style={styles.card}>
						<Text>Chia sẻ</Text>
						<View style={styles.viewIconNumberCard}>
							<Image style={styles.icon} source={images.ic_ShareTask} />
							<Text style={styles.mumberCard}>02</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

export default HomeTask;

const styles = StyleSheet.create({
	container: {
		paddingTop: 60,
		flexDirection: 'column',
		justifyContent: 'center',
		// backgroundColor: '#FFFFFF',
	},
	quickReport: {
		backgroundColor: '#FFFFFF',
		marginBottom: 8,
		paddingBottom: 36,
	},
	MyTask: {
		backgroundColor: '#FFFFFF',
	},
	viewHeader: {
		padding: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	textHeader: {
		fontWeight: '500',
		fontSize: 20,
	},
	viewBtn: {
		padding: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
		// backgroundColor: "red"
	},
	styleBtn: {
		width: 190,
		paddingHorizontal: 16,
		paddingVertical: 9,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderWidth: 1,
		borderColor: '#DFDFDF',
		borderRadius: 26,
		textAlign: 'center',
		alignItems: 'center',
	},
	styleIconBtn: {
		width: 11,
		height: 6,
	},
	viewCard: {
		flexDirection: 'row',
		paddingHorizontal: 16,
		justifyContent: 'space-between',
		paddingBottom: 8,
	},
	card: {
		width: '32%',
		borderWidth: 1,
		borderColor: '#E8E8E8',
		borderRadius: 8,
		padding: 12,
	},
	icon: {
		width: 36,
		height: 36,
	},
	viewIconNumberCard: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 4,
	},
	mumberCard: {
		fontSize: 20,
		fontWeight: '500',
	},
});
