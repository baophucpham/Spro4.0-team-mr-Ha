import {
	ChangePasswordPayload,
	LoginPayload,
	LoginSocialPayload,
	RegisterPayload,
	ResetPasswordPayload,
	User,
} from 'model'

import axiosClient from './axiosClient'

class AuthenApi {
	static profile: User
	private static URL = {
		LOGIN: '/auth/local',
		LOGIN_GOOGLE: '/auth/custom/google',
		LOGIN_FACEBOOK: '/auth/custom/facebook',
		LOGIN_APPLE: '/auth/custom/apple',
		REGISTER: '/auth/local/register/',
		FORGOT_PASSWORD: '/auth/forgot-password',
		RESET_PASSWORD: '/auth/reset-password',
		CHANGE_PASSWORD: '/auth/change-password',
		SEND_EMAIL_CONFIRMATION: '/auth/send-email-confirmation',
		COUNTRY: '/countries',
		STATE: '/states',
		PROFILE: '/users/me',
		USER: '/users',
		NOTIFICATION: '/notifications',
	}

	static setCacheProfile = (profile: User) => {
		this.profile = profile
	}

	static login = (data: LoginPayload) => {
		return axiosClient.post(this.URL.LOGIN, data)
	}

	static loginSocial = (data: LoginSocialPayload) => {
		let url: string
		switch (data.type) {
			case 'apple':
				url = this.URL.LOGIN_APPLE
				break
			case 'facebook':
				url = this.URL.LOGIN_FACEBOOK
				break
			case 'google':
				url = this.URL.LOGIN_GOOGLE
				break
			default:
				url = ''
				break
		}

		return axiosClient.post(url, data.body)
	}

	static register = (data: RegisterPayload) => {
		return axiosClient.post(this.URL.REGISTER, data)
	}

	static forgotPassword = (email: string) => {
		return axiosClient.post(this.URL.FORGOT_PASSWORD, { email })
	}

	static resetPassword = (data: ResetPasswordPayload) => {
		return axiosClient.post(this.URL.RESET_PASSWORD, data)
	}

	static changePassword = (data: ChangePasswordPayload) => {
		return axiosClient.post(this.URL.CHANGE_PASSWORD, data)
	}

	static sendEmailConfirmation = (email: string) => {
		return axiosClient.post(this.URL.SEND_EMAIL_CONFIRMATION, { email })
	}

	static getListCountry = () => {
		const params = {
			populate: 'deep,2',
			'pagination[page]': 1,
			'pagination[pageSize]': 300,
		}
		return axiosClient.get(this.URL.COUNTRY, { params })
	}

	static getListState = (country: any) => {
		const params = {
			populate: 'deep,3',
			'filters[country][name]': country,
			'pagination[page]': 1,
			'pagination[pageSize]': 300,
		}
		return axiosClient.get(this.URL.STATE, { params })
	}

	static getProfile = () => {
		const query = {
			populate: 'deep,3',
		}
		return axiosClient.get(this.URL.PROFILE, { params: query })
	}

	static getProfileById = (id: any) => {
		const query = {
			populate: 'deep,1',
		}
		return axiosClient.get(`${this.URL.USER}/${id}`, { params: query })
	}

	static updateProfile = (data: any) => {
		return axiosClient.put(`${this.URL.USER}/${data?.id}`, data)
	}

	static searchUser = (name?: string, data?: any): Promise<User[]> => {
		const params = {
			'filters[name][$containsi]': name,
			...data,
			'pagination[page]': 1,
			'pagination[pageSize]': 30,
			populate: 'deep,2',
		}
		const parameter: any = {}
		Object.keys(params).forEach((key) => {
			if (params[key]) {
				parameter[key] = params[key]
			}
		})

		return axiosClient.get(this.URL.USER, { params: parameter })
	}

	static checkOldUser = (email: string): Promise<User[]> => {
		const params = {
			'filters[email][$containsi]': email,
		}
		return axiosClient.get(this.URL.USER, { params })
	}

	static getListNotification = (page = 1, size = 10) => {
		const query = {
			populate: 'deep,3',
			sort: 'createdAt:desc',
			['filters[user][id]']: AuthenApi.profile.id,
			'pagination[page]': page,
			'pagination[pageSize]': size,
		}
		return axiosClient.get(this.URL.NOTIFICATION, { params: query })
	}

	static getListNotiUnRead = () => {
		const query = {
			populate: 'deep,1',
			sort: 'createdAt:desc',
			['filters[user][id]']: AuthenApi.profile.id,
			'filters[$and][0][is_read][$eq]': false,
		}
		return axiosClient.get(this.URL.NOTIFICATION, { params: query })
	}

	static makeReadNoti = (id: string | number) => {
		const data = {
			data: {
				is_read: true,
			},
			id: id,
		}
		return axiosClient.put(`${this.URL.NOTIFICATION}/${data?.id}`, data)
	}

	static deleteNoti = (id: number) => {
		return axiosClient.delete(`${this.URL.NOTIFICATION}/${id}`)
	}

	static readAllNoti = () => {
		axiosClient.post(this.URL.NOTIFICATION + '/readAll')
	}
}

export default AuthenApi
