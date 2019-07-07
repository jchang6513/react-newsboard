import Header, { StateProps } from '../components/Header';
import { StoreState } from '../reducers/store';
import { connect } from 'react-redux';

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

export default connect(
  mapStateToProps,
  {}
)(Header)
