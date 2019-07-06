import { Action } from 'redux';
import { TopNewsActionTypes } from './TopNewsActionTypes';
import { TopNewsParams } from '../reducers/TopNewsReducer';
import { BooleanAction, ErrorAction } from '../types/base.type';
import FetchActions, { IFetchActions } from './FetchActions';
import { Dispatch, PromiseAction } from '../types/redux.type';

export interface TopNewsParamsAction extends Action {
  params: TopNewsParams;
}

export interface ITopNewsActionos {
  setLoading: (value: boolean) => BooleanAction;
  setError: (value: Error) => ErrorAction;
  setParams: (params: TopNewsParams) => TopNewsParamsAction;
  loadTopNews: (params: TopNewsParams) => PromiseAction;
};

export default class TopNewsActionos implements ITopNewsActionos {

  private fetchActions: IFetchActions;

  constructor() {
    this.fetchActions = new FetchActions();
  }
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

  loadTopNews = (params: TopNewsParams): PromiseAction => {
    return async (dispatch: Dispatch): Promise<void> => {
      try {
        await dispatch(this.fetchActions.loadTopNewsArr(params));
      } catch (err) {

      }
    }
  }
}
