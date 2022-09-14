import axios from 'axios';
import {
  BASE_API_URL,
  DEFAULT_ERROR_MESSAGE,
  MINIMUM_PAGE_VALUE,
} from '../constant';

/**
 *
 * @param {page} page parameter needed for pagination
 * @returns service to return a list of items based on endpoint
 */
export const getAnimesList = async ({ page = MINIMUM_PAGE_VALUE }) => {
  try {
    const { data } = await axios({
      method: 'GET',
      baseURL: BASE_API_URL,
      url: '/anime',
      params: {
        page,
      },
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
