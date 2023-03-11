import { createAction } from '@reduxjs/toolkit'

//*************LOGIN*************** */
export const LOGIN = 'LOGIN'
export const loginAction = createAction(LOGIN)

//**************************** */
export const LOG_OUT = 'LOG_OUT'
export const logOutAction = createAction(LOG_OUT)
