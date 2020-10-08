import { combineReducers } from 'redux';
import { usersReducer, UsersState } from './users.reducer';
import { FilterState, filterReducer } from './filter.reducer';
import { PaginationState, paginationReducer } from './pagination.reducer';

export interface State {
	usersState: UsersState;
	filterState: FilterState;
	paginationState: PaginationState;
}

export const createRootReducer = () =>
	combineReducers<State>({
		usersState: usersReducer,
		filterState: filterReducer,
		paginationState: paginationReducer,
	});
