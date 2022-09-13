import axios from 'axios';
import {
  BASE_API_URL,
  DEFAULT_ERROR_MESSAGE,
  DEFAULT_NUMBER_ELEMENTS,
  MINIMUM_PAGE_VALUE,
} from '../constant';

const defaultParams = {
  page: MINIMUM_PAGE_VALUE,
  limit: DEFAULT_NUMBER_ELEMENTS,
};

/**
 *
 * @param {page} page parameter needed for pagination
 * @returns service to return a list of items based on endpoint
 */
export const getAnimesList = async (additionalParams) => {
  try {
    const { data } = await axios({
      method: 'GET',
      baseURL: BASE_API_URL,
      url: '/anime',
      params: {
        ...defaultParams,
        ...additionalParams,
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
