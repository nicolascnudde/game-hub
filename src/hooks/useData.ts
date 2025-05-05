import { useEffect, useState } from "react";
import { CanceledError } from "axios";

import apiClient from "@/services/api-client";

interface FetchResponse<T> {
	count: number;
	results: T[];
}

const useData = <T>(endpoint: string) => {
	const [data, setData] = useState<T[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		const controller = new AbortController();

		setIsLoading(true);

		apiClient
			.get<FetchResponse<T>>(endpoint, { signal: controller.signal })
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
	}, [endpoint]);

	return { data, isLoading, error };
};

export default useData;
