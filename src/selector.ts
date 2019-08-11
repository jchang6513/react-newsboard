import { createSelector } from 'reselect';
import { StoreState } from './reducers/store';


export const getParams = createSelector(
  (state: StoreState) => state.Params,
  params => params,
);

export const getCategory = createSelector(
  getParams,
  ({ category }) => category
)

export const getCountry = createSelector(
  getParams,
  ({ country }) => country
)

export const getPage = createSelector(
  getParams,
  ({ page }) => page
)

export const getCountryName = createSelector(
  getCountry,
  (country) => {
    const countryName:{[key in string]: string} = {
      cn: 'CHINA',
      hk: 'HONGKONG',
      jp: 'JAPAN',
      tw: 'TAIWAN',
      uk: 'BRITISH',
      us: 'AMERICA'
    }
    return countryName[country]
  }
)

export const getNews = createSelector(
  (state: StoreState) => state.News,
  news => news,
);

export const getEndOfNews = createSelector(
  getNews,
  ({ endOfNews }) => endOfNews,
);

export const getLoading = createSelector(
  getNews,
  ({ loading }) => loading,
);

export const getNewsArr = createSelector(
  getNews,
  ({ newsArr }) => newsArr,
);
