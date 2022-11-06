import axios from 'axios';

const API_KEY = '30096980-3a3c0320a6f5f515df3804209';
const URL = 'https://pixabay.com/api';

export const fetchData = (query, pageNumber = 1) => {
  return axios.get(
    `${URL}/?key=${API_KEY}&q=${query}&page=${pageNumber}&image_type=photo&orientation=horizontal&per_page=12`
  );
};
