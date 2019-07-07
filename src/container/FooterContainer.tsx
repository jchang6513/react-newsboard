import { connect } from 'react-redux';
import Footer from '../components/Footer';
import { StoreState } from '../reducers/store';
import NewsActionos from '../actions/NewsActions';

interface StateProps {
  country: string
}
interface DispatchProps {
  loadNewCountry: (country: string) => void;
}

export type FooterProps = StateProps & DispatchProps;

const mapStateToProps = (state: StoreState): StateProps => ({
  country: state.Params.country
})

const topNewAction = new NewsActionos();
const mapDispatchToProps: DispatchProps = {
  loadNewCountry: (country: string) => topNewAction.loadNewCountry(country)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
