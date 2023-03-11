export interface ResponseApi<T> {
	data: T
	meta?: {
		pagination?: Pagination
	}
}

export interface Pagination {
	page: number
	pageSize: number
	pageCount: number
	total: number
}

export interface ErrorApi {
	data: any
	error: {
		status: number
		name: string
		message: string
		details: any
	}
}

export interface MediaFormat {
	ext: string
	url: string
	hash: string
	mime: string
	name: string
	path: null
	size: number
	width: number
	height: number
}
export interface MediaType {
	id: number
	name: string
	alternativeText: string
	caption: string
	width: number
	height: number
	formats: {
		large: MediaFormat
		small: MediaFormat
		medium: MediaFormat
		thumbnail: MediaFormat
	}
	hash: string
	ext: '.jpg'
	mime: 'image/jpeg'
	size: number
	url: string
	previewUrl: null
	provider: 'local'
	provider_metadata: null
	createdAt: string
	updatedAt: string
}

export interface CountryType {
	id: number
	short_name: string
	name: string
	phone_code: string
	states: StateType[]
	media: MediaType
}

export interface StateType {
	id: number
	name: string
}
