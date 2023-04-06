interface LoginPayload {
	usernam: string;
	password: string;
}

interface LoginResponse {
	authToken: string;
	fullName: string;
	username: string;
	firebaseTokenKey: string;
}
