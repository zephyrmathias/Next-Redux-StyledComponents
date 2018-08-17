import axios from 'axios';
import {
  FETCH_MOST_VIEWED_ARTICLES_REQUEST,
  FETCH_MOST_VIEWED_ARTICLES_SUCCESS,
  FETCH_MOST_VIEWED_ARTICLES_FAILURE,
} from './actionTypes';

/* eslint-disable */
const fetchMostViewedArticles = ({ articleSection, sectionPeriod }) => async (dispatch) => {
  dispatch({
    type: FETCH_MOST_VIEWED_ARTICLES_REQUEST,
  });
  try {
    const baseApiUrl = 'https://api.nytimes.com/svc/mostpopular/v2/mostviewed';
    const apiUrl = `${baseApiUrl}/${articleSection}/${sectionPeriod}.json?api-key=${process.env.API_KEY}`;
    const result = await axios.get(apiUrl);
    const { data } = result;
    return dispatch({
      type: FETCH_MOST_VIEWED_ARTICLES_SUCCESS,
      payload: data.results,
    });
  } catch (err) {
    return dispatch({
      type: FETCH_MOST_VIEWED_ARTICLES_FAILURE,
      error: 'Something went wrong',
    });
  }
};

export { fetchMostViewedArticles };
