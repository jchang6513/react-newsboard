import { StoreState } from '../reducers/store';
import { connect } from 'react-redux';
import { ComponentType } from 'react';

export interface StateProps {
  country: string;
  category: string;
}

export type HeaderMapProps = StateProps;

const countryName:{[key in string]: string} = {
  cn: 'CHINA',
  hk: 'HONGKONG',
  jp: 'JAPAN',
  tw: 'TAIWAN',
  uk: 'BRITISH',
  us: 'AMERICA'
}

const mapStateToProps = (state: StoreState): StateProps => ({
  category: state.Params.category,
  country: countryName[state.Params.country]
})

const withHeaderState = (Comp: ComponentType<any>) =>  (
  connect(
    mapStateToProps,
    {}
  )(Comp)
);

export default withHeaderState;
