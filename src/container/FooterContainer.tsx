import { connect } from 'react-redux';
import Footer from '../components/Footer';
import { StoreState } from '../reducers/store';
import { ParamsState } from '../reducers/ParamsReducer';
import NewsActionos from '../actions/NewsActions';

interface StateProps {
  params: ParamsState
}
interface DispatchProps {
  loadNewCountry: (parmas: ParamsState) => void;
}

export type FooterProps = StateProps & DispatchProps;

const mapStateToProps = (state: StoreState): StateProps => ({
  params: state.Params
})

const topNewAction = new NewsActionos();
const mapDispatchToProps: DispatchProps = {
  loadNewCountry: (parmas: ParamsState) => topNewAction.loadNewCountry(parmas)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
