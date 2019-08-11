import { ParamsActionTypes } from './ParamsActionTypes';
import { ParamsAction } from '../reducers/ParamsReducer';

export const changeParamsCountry = (country: string): ParamsAction => {
  return ({
    type: ParamsActionTypes.CHANGE_COUNTRY,
    value: country
  })
}

export const changeParamsCategory = (category: string): ParamsAction => {
  return ({
    type: ParamsActionTypes.CHANGE_CATEGORY,
    value: category
  })
}

export const setParamsQ = (q: string): ParamsAction => {
  return ({
    type: ParamsActionTypes.SET_Q,
    value: q
  })
}

export const changeParamsPage = (page: number): ParamsAction => {
  return ({
    type: ParamsActionTypes.CHANGE_PAGE,
    value: page
  })
}

export const changeParamsPageSize = (pageSize: number): ParamsAction => {
  return ({
    type: ParamsActionTypes.CHANGE_PAGE_SIZE,
    value: pageSize
  })
}
