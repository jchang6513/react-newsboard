import { StoreState } from '../reducers/store';
import { connect } from 'react-redux';
import { ComponentType } from 'react';
import { getCountryName, getCategory } from '../selector';

export interface StateProps {
  country: string;
  category: string;
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
