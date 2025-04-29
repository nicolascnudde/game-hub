import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "93f7382f15b94a89838552787480622b",
	},
});
