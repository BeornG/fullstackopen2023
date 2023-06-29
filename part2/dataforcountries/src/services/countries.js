import axios from "axios";

const getAll = (url) => {
  const request = axios.get(url);
  return request.then((response) => response.data);
};

const countryService = { getAll };

export default countryService;
