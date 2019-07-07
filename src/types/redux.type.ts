import { Action } from 'redux';
import { StoreState } from '../reducers/store';

export type Dispatch = (action: Action | ThunkAction | PromiseAction ) => any;

export type GetState = () => StoreState;

export type ThunkAction<T = any> = (dispatch: Dispatch, getState: GetState) => T;

export type PromiseAction<T = any> = ThunkAction<Promise<T>>;

export interface ErrorAction extends Action {
  err: Error;
}

export interface StringAction extends Action {
  value: String
}

export interface NumberAction extends Action {
  value: number
}

export interface BooleanAction extends Action {
  value: boolean;
}
