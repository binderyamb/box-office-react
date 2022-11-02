const BASE_URL = "https://api.tvmaze.com/";

export const customFetch = async (url) => {
	const result = await fetch(`${BASE_URL}${url}`);

	const data = await result.json();

	return data;
};
