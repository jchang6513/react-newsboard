import { connect } from 'react-redux';
import { ComponentType } from 'react';
import { getCountryName, getCategory } from '../selector';
import { StoreState } from '../reducers/store';
import { Category } from '../reducers/ParamsReducer';

export interface StateProps {
  category: Category;
  country: string;
}

export type HeaderMapProps = StateProps;

const mapStateToProps = (state: StoreState): StateProps => ({
  category: getCategory(state),
  country: getCountryName(state),
})

const withHeaderState = (Comp: ComponentType<any>) =>  (
  connect(
    mapStateToProps,
    {}
  )(Comp)
);

export default withHeaderState;
