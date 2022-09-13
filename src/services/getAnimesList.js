import axios from 'axios';
import { BASE_API_URL, DEFAULT_ERROR_MESSAGE } from '../constant';

/**
 *
 * @returns service to return a list of items based on endpoint
 */
export const getAnimesList = async () => {
  try {
    const { data } = await axios({
      method: 'GET',
      baseURL: BASE_API_URL,
      url: '/anime',
    });

    const {
      data: animesList,
      pagination: { current_page: currentPage, last_visible_page: lastPage },
    } = data;

    return {
      animesList,
      currentPage,
      lastPage,
    };
  } catch (err) {
    const errorMessage = axios.isAxiosError(err)
      ? err.message
      : DEFAULT_ERROR_MESSAGE;
    return Promise.reject(errorMessage);
  }
};
