import { call, takeLatest } from 'redux-saga/effects'
import * as Actions from 'action/authenAction'
import { PayloadAction } from '@reduxjs/toolkit'
import { Navigator } from 'core/index'
import { showAlert } from 'utils'
/**===========LOGIN================== */
function* loginSaga(action: PayloadAction<any>) {
	try {
		Navigator.showLoading()
	} catch (res: any) {
		showAlert(res?.error?.message)
	} finally {
		Navigator.hideLoading()
	}
}
export default function* () {
	yield takeLatest(Actions.LOGIN, loginSaga)
}
