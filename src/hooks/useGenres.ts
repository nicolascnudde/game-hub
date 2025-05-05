import { useEffect, useState } from "react";
import { CanceledError } from "axios";

import apiClient from "@/services/api-client";

interface FetchGenresResponse {
	count: number;
	results: Genre[];
}

interface Genre {
	id: number;
	name: string;
	slug: string;
}

const useGenres = () => {
	const [genres, setGenres] = useState<Genre[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		const controller = new AbortController();

		setIsLoading(true);

		apiClient
			.get<FetchGenresResponse>("/genres", { signal: controller.signal })
			.then((res) => {
				setGenres(res.data.results);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setIsLoading(false);
			});

		return () => controller.abort();
	}, []);

	return { genres, isLoading, error };
};

export default useGenres;
