import { Action } from 'redux';
import { TopNewsActionTypes } from './TopNewsActionTypes';

interface CountryAction extends Action {
  country: string;
}

interface CategoryAction extends Action {
  category: string;
}

interface QAction extends Action {
  q: string;
}

interface PageAction extends Action {
  page: number;
}

interface PerAction extends Action {
  per: number;
}


export interface INewsBoardActionos {
  setCountry: (country: string) => CountryAction;
  setCategory: (category: string) => CategoryAction;
  setQ: (q: string) => QAction;
  setPage: (page: number) => PageAction;
  setPer: (per8: number) => PerAction;
  checkScrollBottom: () => Action;
  loadTopNews: () => Action;
};

export default class NewsBoardActionos implements INewsBoardActionos {
  setCountry = (country: string) => {
    return ({
      type: TopNewsActionTypes.SET_COUNTRY,
      country: country
    })
  }

  setCategory = (category: string) => {
    return ({
      type: TopNewsActionTypes.SET_CATEGORY,
      category: category
    })
  }

  setQ = (q: string) => {
    return ({
      type: TopNewsActionTypes.SET_Q,
      q: q
    })
  };

  setPage = (page: number) => {
    return ({
      type: TopNewsActionTypes.SET_PAGE,
      page: page
    })
  }

  setPer = (per: number) => {
    return ({
      type: TopNewsActionTypes.SET_PER,
      per: per
    })
  }

  checkScrollBottom = () => {
    return ({
      type: TopNewsActionTypes.CHECK_SCROLL_BOTTOM,
    })
  }

  loadTopNews = () => {
    return ({
      type: TopNewsActionTypes.LOAD_TOP_NEWS,
    })
  }
}
