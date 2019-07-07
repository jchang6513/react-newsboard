import { StoreState } from '../reducers/store';
import NewsActionos from '../actions/NewsActions';
import { News } from '../data/News';
import { connect } from 'react-redux';
import NewsComponent from '../components/News';
import { ParamsState } from '../reducers/ParamsReducer';

interface StateProps {
  loading: boolean;
  params: ParamsState;
  newsArr?: News[];
  endOfNews: boolean;
}

interface DispatchProps {
  resetNews: () => void;
  loadMoreNews: (params: ParamsState) => void;
}

export type TopNewsProps = StateProps & DispatchProps;

const mapStateToProps = (state: StoreState): StateProps => ({
  loading: state.News.loading,
  params: state.Params,
  newsArr: state.News.newsArr,
  endOfNews: state.News.endOfNews
})

const topNewAction = new NewsActionos();
const mapDispatchToProps: DispatchProps = {
  resetNews: () => topNewAction.resetNews(),
  loadMoreNews: (params: ParamsState) => topNewAction.loadMoreNews(params)
}

export default connect<StateProps, DispatchProps, {}, StoreState>(
  mapStateToProps,
  mapDispatchToProps
)(NewsComponent)
