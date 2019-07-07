import { StringAction, NumberAction } from '../types/redux.type';
import { ParamsActionTypes } from './ParamsActionTypes';

export const changeParamsCountry = (country: string): StringAction => {
  return ({
    type: ParamsActionTypes.CHANGE_COUNTRY,
    value: country
  })
}

export const changeParamsCategory = (category: string): StringAction => {
  return ({
    type: ParamsActionTypes.CHANGE_CATEGORY,
    value: category
  })
}

export const setParamsQ = (q: string): StringAction => {
  return ({
    type: ParamsActionTypes.SET_Q,
    value: q
  })
}

export const changeParamsPage = (page: number): NumberAction => {
  return ({
    type: ParamsActionTypes.CHANGE_PAGE,
    value: page
  })
}

export const changeParamsPageSize = (pageSize: number): NumberAction => {
  return ({
    type: ParamsActionTypes.CHANGE_PAGE_SIZE,
    value: pageSize
  })
}
