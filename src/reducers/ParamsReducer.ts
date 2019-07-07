import { Action } from 'redux';
import { ParamsActionTypes } from '../actions/ParamsActionTypes';
import { StringAction, NumberAction } from '../types/redux.type';

export interface ParamsState {
  country: string;
  category: string;
  q: string;
  page: number;
  pageSize: number;
}

const initState: ParamsState = {
  country: 'tw',
  category: 'general',
  q: '',
  page: 1,
  pageSize: 10,
}

const reducer = (state: ParamsState = initState, action: Action): ParamsState => {
  switch(action.type) {
    case ParamsActionTypes.CHANGE_CATEGORY:
      return {
        ...state,
        category: (action as StringAction).value
      }
    case ParamsActionTypes.CHANGE_COUNTRY:
      return {
        ...state,
        country: (action as StringAction).value
      }
    case ParamsActionTypes.CHANGE_PAGE:
      return {
        ...state,
        page: (action as NumberAction).value
      }
    case ParamsActionTypes.CHANGE_PAGE_SIZE:
      return {
        ...state,
        pageSize: (action as NumberAction).value
      }
    case ParamsActionTypes.SET_Q:
      return {
        ...state,
        q: (action as StringAction).value
      }
    default:
      return state;
  }
}

export default reducer;
