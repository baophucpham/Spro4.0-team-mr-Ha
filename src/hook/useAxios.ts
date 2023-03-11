import { Navigator } from 'core/index';
import { useEffect, useState } from 'react';

interface Options {
	showLoading: boolean;
	callDidMount: boolean;
}

export function useAxios<T>(fetcher: () => Promise<any>, options?: Options) {
	const { showLoading, callDidMount } = options || {};

	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<any>(null);
	const [response, setResponse] = useState<T>();

	const callApi = async () => {
		try {
			showLoading && Navigator.showLoading();
			setLoading(true);
			const responseApi = await fetcher();
			setResponse({ ...responseApi });
		} catch (errorApi: any) {
			setError({ ...errorApi });
		} finally {
			setLoading(false);
			Navigator.hideLoading();
		}
	};

	useEffect(() => {
		if (callDidMount) {
			callApi();
		}
	}, [callDidMount]);

	return {
		loading,
		error,
		response,
		callApi,
	};
}
