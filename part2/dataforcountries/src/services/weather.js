import axios from "axios";

const getWeather = (url) => {
  const request = axios.get(url);
  return request.then((response) => response.data);
};

const weatherService = { getWeather };

export default weatherService;
