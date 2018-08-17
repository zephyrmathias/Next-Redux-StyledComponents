import axios from 'axios';
import {
  FETCH_ARTICLE_REQUEST,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE,
} from './actionTypes';

/* eslint-disable */
const fetchArticle = (urlParameter) => async (dispatch) => {
  dispatch({
    type: FETCH_ARTICLE_REQUEST,
  });
  try {
    const url = urlParameter.replace(/\//g, '\\/');
    const baseApiUrl = 'http://api.nytimes.com/svc/news/v3/content.json';
    const apiUrl = `${baseApiUrl}?api-key=${process.env.API_KEY}&url=${url}`;
    const result = await axios.get(apiUrl);
    const { data } = result;
    return dispatch({
      type: FETCH_ARTICLE_SUCCESS,
      payload: data.results,
    });
  } catch (err) {
    return dispatch({
      type: FETCH_ARTICLE_FAILURE,
      error: 'Something went wrong',
    });
  }
};

export { fetchArticle };
