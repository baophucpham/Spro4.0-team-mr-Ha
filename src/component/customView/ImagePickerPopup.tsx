import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, Style } from 'core'
import { Permission } from 'utils'
import {
	Asset,
	CameraOptions,
	ImageLibraryOptions,
	ImagePickerResponse,
	launchCamera,
	launchImageLibrary,
	MediaType,
} from 'react-native-image-picker'

export interface ImagePickerProps {
	requestClose?: () => void
	onChange?: (data?: Asset | Asset[] | any) => void
	mediaType?: MediaType
	selectionLimit?: number
}

const ImagePickerPopup: React.FC<ImagePickerProps> = ({
	requestClose,
	onChange,
	mediaType = 'photo',
	selectionLimit = 1,
}) => {
	const imagePickerOptions: CameraOptions | ImageLibraryOptions = {
		cameraType: 'front',
		saveToPhotos: false,
		mediaType,
		selectionLimit,
		quality: 0.8,
		maxWidth: 1600,
		maxHeight: 900,
	}

	const callbackResponseImagePicker = (result: ImagePickerResponse) => {
		if (result?.didCancel || result?.errorCode) {
			return
		}
		const assetResponse = selectionLimit === 0 ? result?.assets || {} : result?.assets?.[0] || []
		requestClose?.()
		onChange?.(assetResponse)
	}

	const openCamera = () => {
		Permission.camera(() => {
			launchCamera(imagePickerOptions, callbackResponseImagePicker)
		})
	}

	const openLibrary = () => {
		Permission.photoLibrary(() => {
			launchImageLibrary(imagePickerOptions, callbackResponseImagePicker)
		})
	}

	return (
		<View style={styles.container}>
			<ItemPicker
				disabled
				title={`Choose ${mediaType === 'mixed' ? 'media' : mediaType}`}
				textStyle={[Style.txt14, { color: colors.primary_text }]}
			/>
			<ItemPicker
				title="Camera"
				textStyle={[Style.txt16_primary, Style.semibold]}
				onPress={openCamera}
			/>
			<ItemPicker
				title="Photo Library"
				textStyle={[Style.txt16_primary, Style.semibold]}
				onPress={openLibrary}
			/>
			<ItemPicker
				title="Cancel"
				textStyle={[Style.txt16, { color: colors.error }, Style.semibold]}
				style={{ borderBottomWidth: 0 }}
				onPress={requestClose}
			/>
		</View>
	)
}

const ItemPicker = ({ title, textStyle, onPress, disabled, style }: any) => {
	return (
		<TouchableOpacity
			style={[styles.item, style]}
			disabled={disabled}
			onPress={onPress}
			activeOpacity={0.6}>
			<Text style={textStyle}>{title}</Text>
		</TouchableOpacity>
	)
}

export default ImagePickerPopup

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		...Style.mh8,
		...Style.bottom24,
		...Style.radius16,
	},
	item: {
		...Style.pv16,
		...Style.borderBottom,
		borderColor: colors.border_light,
		alignItems: 'center',
	},
})
