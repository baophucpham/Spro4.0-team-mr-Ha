import { images } from 'assets';
import { ScreenProps } from 'model';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Style } from 'core';
import { NavigationBackButton } from 'component';

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
		</View>
	);
};

export default CreateTicket;
