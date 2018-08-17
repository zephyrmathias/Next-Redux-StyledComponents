import { combineReducers } from 'redux';
import popularArticlesReducer from './popularArticlesReducer';
import articleReducer from './articleReducer';

const reducers = combineReducers({
  popularArticles: popularArticlesReducer,
  article: articleReducer,
});

export default reducers;
