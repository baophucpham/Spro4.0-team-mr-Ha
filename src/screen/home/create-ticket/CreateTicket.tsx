import { images } from 'assets';
import { ScreenProps } from 'model';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Style, sizes } from 'core';
import { Icon, NavigationBackButton } from 'component';
import { TicketService } from 'common/data';

const CreateTicket: React.FC<ScreenProps> = ({ navigation }) => {
	useEffect(() => {
		navigation.setOptions({
			headerLeft: () => <NavigationBackButton icon={images.ic_close} />,
			title: 'Tạo tikcet',
		});
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.block}>
				<Text style={Style.h5}>Chọn dịch vụ</Text>
				<Text style={[Style.txt14_secondary, Style.top4]}>
					Chọn loại dịch vụ bạn cần yêu cầu và làm theo hướng dẫn sau đó.
				</Text>
			</View>
			<View style={styles.block}>
				{TicketService.map((item, index) => (
					<View key={index} style={[styles.item, index === 0 && { paddingTop: 0 }]}>
						<View style={[Style.row, Style.flex]}>
							<Icon source={item.icon} size={sizes.s32} />
							<Text style={[Style.flex, Style.left12, Style.txt14]}>{item.title}</Text>
						</View>
						<Icon source={images.ic_next} size={sizes.s24} />
					</View>
				))}
			</View>
		</View>
	);
};

export default CreateTicket;
