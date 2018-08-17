import {
  FETCH_MOST_VIEWED_ARTICLES_REQUEST,
  FETCH_MOST_VIEWED_ARTICLES_SUCCESS,
  FETCH_MOST_VIEWED_ARTICLES_FAILURE,
} from 'actions/mostViewedArticles/actionTypes';

const INITIAL_STATE = { payload: [] };

const popularArticlesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MOST_VIEWED_ARTICLES_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_MOST_VIEWED_ARTICLES_SUCCESS:
      return { ...state, isFetching: false, payload: action.payload };
    case FETCH_MOST_VIEWED_ARTICLES_FAILURE:
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
};

export default popularArticlesReducer;
