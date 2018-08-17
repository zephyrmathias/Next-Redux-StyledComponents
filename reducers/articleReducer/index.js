import {
  FETCH_ARTICLE_REQUEST,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE,
} from 'actions/article/actionTypes';

const INITIAL_STATE = { payload: [] };

const articleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_ARTICLE_SUCCESS:
      return { ...state, isFetching: false, payload: action.payload };
    case FETCH_ARTICLE_FAILURE:
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
};

export default articleReducer;
