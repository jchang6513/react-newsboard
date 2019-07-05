import { Action } from 'redux';
import { TopNewsActionTypes } from './TopNewsActionTypes';
import { TopNewsParams } from 'reducers/TopNewsReducer';
import { BooleanAction } from 'types/Base.type';

export interface TopNewsParamsAction extends Action {
  params: TopNewsParams;
}

export interface INewsBoardActionos {
  setLoading: (value: boolean) => BooleanAction;
  setError: (value: boolean) => BooleanAction;
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

  setError = (value: boolean) => {
    return ({
      type: TopNewsActionTypes.SET_ERROR,
      value: value
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
