import {
	PaginationActionTypes,
	LOAD_PREV_PAGE,
	LOAD_NEXT_PAGE,
	LOAD_EXACT_PAGE,
	PER_PAGE_CHANGE,
} from '../models/pagination.model';

export type PaginationState = {
	currentPage: number;
	perPage: number;
};

const initialState: PaginationState = {
	currentPage: 1,
	perPage: 10,
};

export const paginationReducer = (state = initialState, action: PaginationActionTypes) => {
	switch (action.type) {
		case LOAD_PREV_PAGE:
			return { ...state, currentPage: state.currentPage - 1 };
		case LOAD_NEXT_PAGE:
			return { ...state, currentPage: state.currentPage + 1 };
		case LOAD_EXACT_PAGE:
			return { ...state, currentPage: action.payload };
		case PER_PAGE_CHANGE:
			return { ...state, perPage: action.payload, currentPage: 1 };
		default:
			return state;
	}
};
