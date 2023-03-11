import axiosClient from './axiosClient'

export const uploadFileApi = (data: any) => {
	const bodyFormData = new FormData()

	if (Array.isArray(data)) {
		for (let item of data) {
			bodyFormData.append('files', {
				...item,
				uri: item?.uri,
				type: item?.type,
				name: item?.fileName,
				fileSize: item?.fileSize,
			})
		}
	} else {
		bodyFormData.append('files', {
			...data,
			uri: data?.uri,
			type: data?.type,
			name: data?.fileName,
			fileSize: data?.fileSize,
		})
	}

	return axiosClient.post('/upload/', bodyFormData, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
		transformRequest: () => bodyFormData,
	})
}
