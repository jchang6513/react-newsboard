import React from 'react';
import { useDispatch } from 'react-redux';
import { Category } from '../reducers/ParamsReducer';
import { loadNewsWithCategory } from '../actions/FetchActions';

import business from '../assets/images/categories/business.svg';
import entertainment from '../assets/images/categories/entertainment.svg';
import general from '../assets/images/categories/general.svg';
import health from '../assets/images/categories/health.svg';
import science from '../assets/images/categories/science.svg';
import sports from '../assets/images/categories/sports.svg';
import technology from '../assets/images/categories/technology.svg';

const categoriesIcons: {[key in Category]: any} = {
  business: business,
  entertainment: entertainment,
  general: general,
  health: health,
  science: science,
  sports: sports,
  technology: technology
}

const CategoryList = () => {
  const dispatch = useDispatch();
  const categories = Object.values(Category) as Category[];
  return (
    <div className="list category-list">
      <div className="list-block">
        {
          categories.map((category) => (
            <div
              key={category}
              className="category-block"
              onClick={() => dispatch(loadNewsWithCategory(category))}
            >
              <img className="category-icon" src={categoriesIcons[category]} alt=""/>
              <p>{category.toUpperCase()}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default CategoryList;
