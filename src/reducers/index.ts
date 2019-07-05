import { combineReducers } from 'redux';
import TopNews, { TopNewsState } from './TopNewsReducer';

interface CombineReducer {
  TopNews: TopNewsState;
}
export default combineReducers<CombineReducer>({
  TopNews
})
