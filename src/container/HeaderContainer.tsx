import Header, { StateProps } from '../components/Header';
import { StoreState } from '../reducers/store';
import { connect } from 'react-redux';

const countryName:{[key in string]: string} = {
  tw: 'TAIWAN'
}

const mapStateToProps = (state: StoreState): StateProps => ({
  category: state.News.params.category,
  country: countryName[state.News.params.country]
})

export default connect(
  mapStateToProps,
  {}
)(Header)
