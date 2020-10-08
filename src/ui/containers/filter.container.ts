import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../reducers/root.reducer';
import { filter } from '../../actions/filter.actions';
import { Filter } from '../components/filter/filter.component';

const mapDispatch = {
	onFilter: filter,
};

const mapState = ({ filterState }: State) => ({
	filterValues: filterState,
});

const connector = connect(mapState, mapDispatch);

export const FilterContainer = connector(Filter);

export type FilterPropsFromRedux = ConnectedProps<typeof connector>;
