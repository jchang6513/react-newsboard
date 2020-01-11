import React from 'react';
import { CN, HK, JP, TW, UK, US, } from './CountryFlag';
import { Country } from '../reducers/ParamsReducer';
import { useStore, useDispatch } from 'react-redux';
import { getCountry } from '../selector';
import { loadNewsFromCountry } from '../actions/FetchActions';

interface CountryComp {
  svg: JSX.Element;
  title: string;
  value: Country;
}

const countries: CountryComp[] = [
  {
    svg: CN,
    title: 'China',
    value: Country.China,
  },
  {
    svg: HK,
    title: 'Hong Kong',
    value: Country.HongKong,
  },
  {
    svg: JP,
    title: 'Japan',
    value: Country.Japan,
  },
  {
    svg: TW,
    title: 'Taiwan',
    value: Country.Taiwan,
  },
  {
    svg: UK,
    title: 'United Kingdom',
    value: Country.UnitedKingdom,
  },
  {
    svg: US,
    title: 'United State',
    value: Country.UnitedState,
  }
]

const CountryList = () => {
  const country = getCountry(useStore().getState());
  const dispatch = useDispatch();

  return (
    <div className="list country-list">
      <div className="list-block">
        {
          countries.map(({svg, value, title}: CountryComp) => (
            <div
              key={value}
              className="list-item country"
              onClick={() => dispatch(loadNewsFromCountry(value))}
            >
              {svg}
              <span className={country == value ? 'selected' : '' }>{title}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default CountryList
