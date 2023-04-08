import axiosClient from './axiosClient';

class AuthenApi {
	private static URL = {
		LOGIN: '/login',
		SIGNUP: '/signup',
		GET_ALL_CAREER: '/career/getAll',
		GET_ONE_CAREER: '/career/getOne?pk=',
		VERIFY_EMAIL_CODE: '/verify',
	};

	static login = (body: LoginPayload): Promise<LoginResponse> => {
		return axiosClient.post(this.URL.LOGIN, body);
	};

	static signup = (body: SignUpPayload) => {
		return axiosClient.post(this.URL.SIGNUP, body);
	};

	static verifyEmailCode = (body: VerifyEmailCodePayload) => {
		return axiosClient.post(this.URL.VERIFY_EMAIL_CODE, body);
	};

	static getAllCareer = () => {
		return axiosClient.get(this.URL.GET_ALL_CAREER);
	};

	static getOneCareer = (id: number) => {
		return axiosClient.get(this.URL.GET_ONE_CAREER + id);
	};
}

export default AuthenApi;
