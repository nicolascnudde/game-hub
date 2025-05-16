import { useEffect, useState } from "react";
import { AxiosRequestConfig, CanceledError } from "axios";

import apiClient from "@/services/api-client";

interface FetchResponse<T> {
	count: number;
	results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: unknown[]) => {
	const [data, setData] = useState<T[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(
		() => {
			const controller = new AbortController();

			setIsLoading(true);

			apiClient
				.get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
				.then((res) => {
					setData(res.data.results);
					setIsLoading(false);
				})
				.catch((err) => {
					if (err instanceof CanceledError) return;
					setError(err.message);
					setIsLoading(false);
				});

			return () => controller.abort();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		deps ? [...deps] : []
	);

	return { data, isLoading, error };
};

export default useData;
