import { Action } from 'redux';
import { TopNewsActionTypes } from './TopNewsActionTypes';
import { TopNewsParams } from '../reducers/TopNewsReducer';
import { BooleanAction, ErrorAction } from '../types/base.type';
import FetchActions, { IFetchActions } from './FetchActions';
import { Dispatch, PromiseAction } from '../types/redux.type';

export interface PartialTopNewsParamsAction extends Action {
  params: Partial<TopNewsParams>;
}

export interface ITopNewsActionos {
  setLoading: (value: boolean) => BooleanAction;
  setError: (value: Error) => ErrorAction;
  setParams: (params: Partial<TopNewsParams>) => PartialTopNewsParamsAction;
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

  setParams = (params: Partial<TopNewsParams>) => {
    return ({
      type: TopNewsActionTypes.SET_PARAMS,
      params: params
    })
  }

  resetTopNews = (): Action => {
    return ({
      type: TopNewsActionTypes.RESET_TOP_NEWS
    })
  }

  loadTopNews = (params: TopNewsParams): PromiseAction => {
    return async (dispatch: Dispatch): Promise<void> => {
      try {
        dispatch(this.setParams(params))
        await dispatch(this.fetchActions.loadTopNewsArr(params));
      } catch (err) {
        throw(err)
      }
    }
  }
}
