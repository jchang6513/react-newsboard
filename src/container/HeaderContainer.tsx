import Header, { StateProps } from '../components/Header';
import { StoreState } from '../reducers/store';
import { connect } from 'react-redux';


const mapStateToProps = (state: StoreState): StateProps => ({
  category: state.TopNews.params.category,
  country: state.TopNews.params.country
})

export default connect(
  mapStateToProps,
  {}
)(Header)
