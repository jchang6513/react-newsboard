import { News } from '../data/News';
import { Action } from 'redux';
import { TopNewsActionTypes } from '../actions/TopNewsActionTypes';
import { BooleanAction, ErrorAction } from '../types/base.type';
import { PartialTopNewsParamsAction } from '../actions/TopNewsActions';
import { FetchActionTypes } from '../actions/FetchActionTypes';
import { NewsArrAction } from '../actions/FetchActions';

export interface TopNewsParams {
  country: string;
  category: string;
  q: string;
  page: number;
  pageSize: number;
}

export interface TopNewsState {
  loading: boolean;
  error?: Error;
  params: TopNewsParams;
  newsArr?: News[];
  endOfNews: boolean;
}

const initState: TopNewsState = {
  loading: false,
  error: undefined,
  params: {
    country: 'tw',
    category: 'general',
    q: '',
    page: 1,
    pageSize: 10,
  },
  newsArr: undefined,
  endOfNews: false,
}

const reducer = (state: TopNewsState = initState, action: Action): TopNewsState => {
  switch (action.type) {
    case FetchActionTypes.LOAD_TOP_NEWS_SUCCESS:
      const { newsArr } = (action as NewsArrAction);
      return {
        ...state,
        newsArr: state.newsArr
          ? state.newsArr.concat(newsArr)
          : newsArr,
        endOfNews: newsArr.length <= 0
      }
    case FetchActionTypes.LOAD_TOP_NEWS_FAIL:
      return {
        ...state,
        error: (action as ErrorAction).err
      }
    case TopNewsActionTypes.SET_LOADING:
      return {
        ...state,
        loading: (action as BooleanAction).value
      }
    case TopNewsActionTypes.SET_ERROR:
      return {
        ...state,
        error: (action as ErrorAction).err
      }
    case TopNewsActionTypes.SET_PARAMS:
      return {
        ...state,
        params: {
          ...state.params,
          ...(action as PartialTopNewsParamsAction).params
        }
      }
    case TopNewsActionTypes.RESET_TOP_NEWS:
      return {
        ...state,
        newsArr: initState.newsArr
      }
    default:
      return state
  }
}

export default reducer;
