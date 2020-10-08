import { connect, ConnectedProps } from 'react-redux';
import { changeElementsPerPage, loadExactPage, loadNextPage, loadPrevPage } from '../../actions/pagination.actions';
import { State } from '../../reducers/root.reducer';
import { Pagination } from '../components/pagination/pagination.component';
import { getTotalPages } from '../../selectors/selectors';

const mapDispatch = {
	onChangePerPage: changeElementsPerPage,
	onChangePage: loadExactPage,
	onNextPage: loadNextPage,
	onPrevPage: loadPrevPage,
};

const mapState = (state: State) => ({
	totalPages: getTotalPages(state),
	currentPage: state.paginationState.currentPage,
	perPage: state.paginationState.perPage,
});

const connector = connect(mapState, mapDispatch);

export const PaginationContainer = connector(Pagination);

export type PaginationPropsFromRedux = ConnectedProps<typeof connector>;
