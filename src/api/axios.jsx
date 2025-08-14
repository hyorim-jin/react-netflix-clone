import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
	  "Content-Type": "application/json;charset=utf-8",
  },
  params: {
	api_key: "bcdc73edc56b434684b3092eb68ff204",
	language: "ko-KR",
  },
});

export default instance;
