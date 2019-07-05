import { Action } from 'redux';


export interface ErrorAction extends Action {
  err: Error
}
export interface BooleanAction extends Action {
  value: boolean;
}
