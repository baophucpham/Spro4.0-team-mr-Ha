import { User } from './AccountDetail'

export interface LoginPayload {
	identifier?: string
	password?: string
}

export interface LoginSocialPayload {
	type: 'google' | 'facebook' | 'apple'
	body: any
	stayHere?: boolean
}

export interface LoginResponse {
	jwt: string
	user: User
}

export interface RegisterPayload {
	username: string
	email: string
	password: string
}

export interface ResetPasswordPayload {
	password: string
	passwordConfirmation: string
	code: string | number
}

export interface ChangePasswordPayload {
	password: string
	currentPassword: string
	passwordConfirmation: string
}
export interface Location {
	coords: {
		accuracy: number
		altitude: number
		altitudeAccuracy: number
		heading: number
		latitude: number
		longitude: number
		speed: number
	}
	mocked: boolean
	provider: string
	timestamp: number
}

export interface PolicyType {
	id: number
	title: string
	description: string
	createdAt: string | Date
	updatedAt: string | Date
	publishedAt: string | Date
}
