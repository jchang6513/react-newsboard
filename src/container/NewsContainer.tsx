import { StoreState } from '../reducers/store';
import { resetNews, loadMoreNews } from '../actions/NewsActions';
import { News } from '../data/News';
import { connect } from 'react-redux';
import NewsComponent from '../components/News';

interface StateProps {
  loading: boolean;
  page: number
  newsArr?: News[];
  endOfNews: boolean;
}

interface DispatchProps {
  resetNews: () => void;
  loadMoreNews: (page: number) => void;
}

export type TopNewsProps = StateProps & DispatchProps;

const mapStateToProps = (state: StoreState): StateProps => ({
  loading: state.News.loading,
  page: state.Params.page,
  newsArr: state.News.newsArr,
  endOfNews: state.News.endOfNews
})

const mapDispatchToProps: DispatchProps = {
  resetNews: () => resetNews(),
  loadMoreNews: (page: number) => loadMoreNews(page)
}

export default connect<StateProps, DispatchProps, {}, StoreState>(
  mapStateToProps,
  mapDispatchToProps
)(NewsComponent)
