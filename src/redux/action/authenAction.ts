import { createAction } from '@reduxjs/toolkit';

//*************LOGIN*************** */
export const LOGIN = 'LOGIN';
export const loginAction = createAction<LoginPayload>(LOGIN);

//*************SIGNUP*************** */
export const SIGN_UP = 'SIGN_UP';
export const signUpAction = createAction<SignUpPayload>(SIGN_UP);

//**************************** */
export const LOG_OUT = 'LOG_OUT';
export const logOutAction = createAction(LOG_OUT);
