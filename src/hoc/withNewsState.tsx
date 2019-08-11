import { ComponentType } from 'react';
import { StoreState } from '../reducers/store';
import { resetNews } from '../actions/NewsActions';
import { News } from '../data/News';
import { connect } from 'react-redux';
import { loadMoreNews } from '../actions/FetchActions';
import { getLoading, getNewsArr, getEndOfNews, getPage } from '../selector';

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

export type TopNewsMapProps = StateProps & DispatchProps;

const mapStateToProps = (state: StoreState): StateProps => ({
  loading: getLoading(state),
  page: getPage(state),
  newsArr: getNewsArr(state),
  endOfNews: getEndOfNews(state)
})

const mapDispatchToProps: DispatchProps = {
  resetNews: () => resetNews(),
  loadMoreNews: (page: number) => loadMoreNews(page)
}

const withNewsState = (Comp: ComponentType<any>) => (
  connect<StateProps, DispatchProps, {}, StoreState>(
    mapStateToProps,
    mapDispatchToProps
  )(Comp)
);

export default withNewsState
