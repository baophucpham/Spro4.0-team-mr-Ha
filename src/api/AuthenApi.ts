import axiosClient from './axiosClient';

class AuthenApi {
	private static URL = {
		LOGIN: '/login',
	};

	static login = (body: LoginPayload): Promise<LoginResponse> => {
		return axiosClient.post(this.URL.LOGIN, body);
	};
}

export default AuthenApi;
