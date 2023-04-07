import { call, takeLatest } from 'redux-saga/effects';
import * as Actions from 'action/authenAction';
import { PayloadAction } from '@reduxjs/toolkit';
import { Navigator } from 'core/index';
import { showAlert } from 'utils';
import AuthenApi from 'api/AuthenApi';
import { setApiToken } from 'api/axiosClient';
import { screenHeight } from 'core';
/**===========LOGIN================== */
function* loginSaga(action: PayloadAction<LoginPayload>) {
	try {
		Navigator.showLoading();
		const response: LoginResponse = yield call(AuthenApi.login, action.payload);
		setApiToken(response.authToken);
		const listCareer: ResponseApi<Career[]> = yield call(AuthenApi.getAllCareer);
		Navigator.showActionPopUp({
			data: listCareer.data,
			keyTitle: 'name_vn',
			style: { maxHeight: screenHeight * 0.5 },
			title: 'Chọn ngành nghề',
			closeOnTouchOutSide: false,
			onPress: (item: Career) => Navigator.goHome(),
		});
	} catch (res: any) {
		showAlert(res?.error?.messenger);
	} finally {
		Navigator.hideLoading();
	}
}

function* signUpSaga(action: PayloadAction<SignUpPayload>) {
	try {
		Navigator.showLoading();
		const response: SignInResponse = yield call(AuthenApi.signup, action.payload);
		Navigator.goBack();
	} catch (error) {
	} finally {
		Navigator.hideLoading();
	}
}

export default function* () {
	yield takeLatest(Actions.LOGIN, loginSaga);
	yield takeLatest(Actions.SIGN_UP, signUpSaga);
}
