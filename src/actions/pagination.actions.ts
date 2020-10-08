import {
	PaginationActionTypes,
	PER_PAGE_CHANGE,
	LOAD_EXACT_PAGE,
	LOAD_PREV_PAGE,
	LOAD_NEXT_PAGE,
} from '../models/pagination.model';

export const changeElementsPerPage = (perPage: number): PaginationActionTypes => ({
	type: PER_PAGE_CHANGE,
	payload: perPage,
});

export const loadExactPage = (page: number): PaginationActionTypes => ({
	type: LOAD_EXACT_PAGE,
	payload: page,
});

export const loadPrevPage = (): PaginationActionTypes => ({
	type: LOAD_PREV_PAGE,
});

export const loadNextPage = (): PaginationActionTypes => ({
	type: LOAD_NEXT_PAGE,
});
