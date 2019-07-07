import { StoreState } from '../reducers/store';
import NewsActionos from '../actions/NewsActions';
import { NewsParams } from '../reducers/NewsReducer';
import { News } from '../data/News';
import { connect } from 'react-redux';
import NewsComponent from '../components/News';

interface StateProps {
  loading: boolean;
  params: NewsParams;
  newsArr?: News[];
  endOfNews: boolean;
}

interface DispatchProps {
  resetNews: () => void;
  loadNews: (params: NewsParams) => void;
}

export type TopNewsProps = StateProps & DispatchProps;

const mapStateToProps = (state: StoreState): StateProps => ({
  loading: state.News.loading,
  params: state.News.params,
  newsArr: state.News.newsArr,
  endOfNews: state.News.endOfNews
})

const topNewAction = new NewsActionos();
const mapDispatchToProps: DispatchProps = {
  resetNews: () => topNewAction.resetTopNews(),
  loadNews: (params: NewsParams) => topNewAction.loadNews(params)
}

export default connect<StateProps, DispatchProps, {}, StoreState>(
  mapStateToProps,
  mapDispatchToProps
)(NewsComponent)
