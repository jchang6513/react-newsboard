import { StoreState } from '../reducers/store';
import TopNewsActionos from '../actions/TopNewsActions';
import { TopNewsParams } from '../reducers/TopNewsReducer';
import { News } from '../data/News';
import { connect } from 'react-redux';
import TopNews from '../components/TopNews';

interface StateProps {
  params: TopNewsParams;
  newsArr?: News[];
}

interface DispatchProps {
  resetNews: () => void;
  loadNews: (params: TopNewsParams) => void;
}

export type TopNewsProps = StateProps & DispatchProps;

const mapStateToProps = (state: StoreState): StateProps => ({
  params: state.TopNews.params,
  newsArr: state.TopNews.newsArr
})

const topNewAction = new TopNewsActionos();

const mapDispatchToProps: DispatchProps = {
  resetNews: () => topNewAction.resetTopNews(),
  loadNews: (params: TopNewsParams) => topNewAction.loadTopNews(params)
}

export default connect<StateProps, DispatchProps, {}, StoreState>(
  mapStateToProps,
  mapDispatchToProps
)(TopNews)
