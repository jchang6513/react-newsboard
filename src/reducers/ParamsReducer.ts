import { Action } from 'redux';
import { ParamsActionTypes } from '../actions/ParamsActionTypes';

export enum Category {
  Business = 'business',
  Entertainment = 'entertainment',
  General = 'general',
  Health = 'health',
  Science = 'science',
  Sports = 'sports',
  Technology = 'technology'
}
export interface ParamsState {
  category: Category;
  country: string;
  q: string;
  page: number;
  pageSize: number;
}

const initState: ParamsState = {
  country: 'tw',
  category: Category.General,
  q: '',
  page: 1,
  pageSize: 10,
}

export interface ParamsAction extends Action {
  value: Category | string | number
}

const reducer = (state: ParamsState = initState, action: ParamsAction): ParamsState => {
  switch(action.type) {
    case ParamsActionTypes.CHANGE_CATEGORY:
      return {
        ...state,
        category: action.value as Category
      }
    case ParamsActionTypes.CHANGE_COUNTRY:
      return {
        ...state,
        country: action.value as string
      }
    case ParamsActionTypes.CHANGE_PAGE:
      return {
        ...state,
        page: action.value as number
      }
    case ParamsActionTypes.CHANGE_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.value as number
      }
    case ParamsActionTypes.SET_Q:
      return {
        ...state,
        q: action.value as string
      }
    default:
      return state;
  }
}

export default reducer;
