import { News } from 'data/News';
import { Action } from 'redux';
import { TopNewsActionTypes } from 'actions/TopNewsActionTypes';
import { BooleanAction, ErrorAction } from 'types/Base.type';
import { TopNewsParamsAction } from 'actions/TopNewsActions';
import { FetchActionTypes } from 'actions/FetchActionTypes';
import { NewsArrAction } from 'actions/FetchActions';

export interface TopNewsParams {
  country: string;
  category: string;
  q: string;
  page: number;
  per: number;
}

export interface TopNewsState {
  loading: boolean;
  error: boolean;
  params: TopNewsParams;
  newsArr?: News;
}

const initState: TopNewsState = {
  loading: false,
  error: false,
  params: {
    country: 'tw',
    category: 'general',
    q: '',
    page: 1,
    per: 10,
  },
  newsArr: undefined,
}

export const reducer = (state: TopNewsState = initState, action: Action) => {
  switch (action.type) {
    case FetchActionTypes.LOAD_TOP_NEWS_SUCCESS:
      return {
        ...state,
        newsArr: (action as NewsArrAction).newsArr
      }
    case FetchActionTypes.LOAD_TOP_NEWS_FAIL:
      return {
        ...state,
        err: (action as ErrorAction).err
      }
    case TopNewsActionTypes.SET_LOADING:
      return {
        ...state,
        loading: (action as BooleanAction).value
      }
    case TopNewsActionTypes.SET_ERROR:
      return {
        ...state,
        error: (action as BooleanAction).value
      }
    case TopNewsActionTypes.SET_PARAMS:
      return {
        ...state,
        params: (action as TopNewsParamsAction).params
      }
    default:
      return state
  }
}
