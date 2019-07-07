import React from 'react';
import { CN, HK, JP, TW, UK, US, } from './CountryFlag';

interface Country {
  svg: JSX.Element;
  title: string;
  value: string;
}

const countries: Country[] = [
  {
    svg: CN,
    title: 'China',
    value: 'cn',
  },
  {
    svg: HK,
    title: 'Hong Kong',
    value: 'hk',
  },
  {
    svg: JP,
    title: 'Japan',
    value: 'jp',
  },
  {
    svg: TW,
    title: 'Taiwan',
    value: 'tw'
  },
  { svg: UK,
    title: 'United Kindom',
    value: 'uk',
  },
  {
    svg: US,
    title: 'United State',
    value: 'us',
  }
]
const CountryList = () => {
  return (
    <div className="list country-list">
      <div className="list-block">
        {
          countries.map(({svg, value, title}) => (
            <div key={value} className="list-item country">
              {svg}
              <span>{title}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default CountryList
