import Header, { StateProps } from '../components/Header';
import { StoreState } from '../reducers/store';
import { connect } from 'react-redux';

const countryName:{[key in string]: string} = {
  tw: 'TAIWAN'
}

const mapStateToProps = (state: StoreState): StateProps => ({
  category: state.Params.category,
  country: countryName[state.Params.country]
})

export default connect(
  mapStateToProps,
  {}
)(Header)
