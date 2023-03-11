export default class LogUtil {
	static TAG = 'HAPPY_HIV'

	static i(message: any = '', what = '') {
		if (__DEV__) {
			console.log(
				'\x1b[44m%s\x1b[0m\x1b[34m%s\x1b[0m',
				'INFO\n',
				`${LogUtil.TAG} ::: ${what !== '' ? what + ' ::: ' : ''} ${JSON.stringify(message)}`
			)
		}
	}

	static w(message: any = '', what = '') {
		if (__DEV__) {
			console.log(
				'\x1b[43m%s\x1b[0m\x1b[33m%s\x1b[0m',
				'WARN\n',
				`${LogUtil.TAG} ::: ${what !== '' ? what + ' ::: ' : ''} ${JSON.stringify(message)}`
			)
		}
	}

	static e(message: any = '', what = '') {
		if (__DEV__) {
			console.log(
				'\x1b[41m%s\x1b[0m\x1b[31m%s\x1b[0m',
				'ERROR\n',
				`${LogUtil.TAG} ::: ${what !== '' ? what + ' ::: ' : ''} ${JSON.stringify(message)}`
			)
		}
	}

	static it(tag = LogUtil.TAG, message: any = '', what = '') {
		if (__DEV__) {
			console.log(
				'\x1b[44m%s\x1b[0m\x1b[34m%s\x1b[0m',
				'INFO\n',
				`${tag} ::: ${what !== '' ? what + ' ::: ' : ''} ${JSON.stringify(message)}`
			)
		}
	}

	static wt(tag = LogUtil.TAG, message: any = '', what = '') {
		if (__DEV__) {
			console.log(
				'\x1b[43m%s\x1b[0m\x1b[33m%s\x1b[0m',
				'WARN\n',
				`${tag} ::: ${what !== '' ? what + ' ::: ' : ''} ${JSON.stringify(message)}`
			)
		}
	}

	static et(tag = LogUtil.TAG, message: any = '', what = '') {
		if (__DEV__) {
			console.log(
				'\x1b[41m%s\x1b[0m\x1b[31m%s\x1b[0m',
				'ERROR\n',
				`${tag} ::: ${what !== '' ? what + ' ::: ' : ''} ${JSON.stringify(message)}`
			)
		}
	}
}
