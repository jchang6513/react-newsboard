import { Action } from 'redux';
import { TopNewsActionTypes } from './TopNewsActionTypes';
import { TopNewsParams } from '../reducers/TopNewsReducer';
import { BooleanAction, ErrorAction } from '../types/Base.type';

export interface TopNewsParamsAction extends Action {
  params: TopNewsParams;
}

export interface INewsBoardActionos {
  setLoading: (value: boolean) => BooleanAction;
  setError: (value: Error) => ErrorAction;
  setParams: (params: TopNewsParams) => TopNewsParamsAction;
  loadTopNews: () => Action;
};

export default class NewsBoardActionos implements INewsBoardActionos {

  setLoading = (value: boolean) => {
    return ({
      type: TopNewsActionTypes.SET_LOADING,
      value: value
    })
  }

  setError = (err: Error) => {
    return ({
      type: TopNewsActionTypes.SET_ERROR,
      err: err
    })
  }

  setParams = (params: TopNewsParams) => {
    return ({
      type: TopNewsActionTypes.SET_PARAMS,
      params: params
    })
  }

  loadTopNews = () => {
    return ({
      type: TopNewsActionTypes.LOAD_TOP_NEWS,
    })
  }
}
