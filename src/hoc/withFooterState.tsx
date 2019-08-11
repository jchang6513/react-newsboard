import { connect } from 'react-redux';
import { StoreState } from '../reducers/store';
import { loadNewCountry } from '../actions/FetchActions';
import { ComponentType } from 'react';
import { getCountry } from '../selector';

interface StateProps {
  country: string
}
interface DispatchProps {
  loadNewCountry: (country: string) => void;
}

export type FooterMapProps = StateProps & DispatchProps;

const mapStateToProps = (state: StoreState): StateProps => ({
  country: getCountry(state)
})

const mapDispatchToProps: DispatchProps = {
  loadNewCountry: (country: string) => loadNewCountry(country)
}

const withFooterState = (Comp: ComponentType<any>) => (
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Comp)
);

export default withFooterState
