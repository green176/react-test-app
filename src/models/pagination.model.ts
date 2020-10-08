export const LOAD_EXACT_PAGE = 'LOAD_EXACT_PAGE';
export const LOAD_PREV_PAGE = 'LOAD_PREV_PAGE';
export const LOAD_NEXT_PAGE = 'LOAD_NEXT_PAGE';
export const PER_PAGE_CHANGE = 'PER_PAGE_CHANGE';

interface loadExactPageAction {
	type: typeof LOAD_EXACT_PAGE;
	payload: number;
}
interface loadPrevPageAction {
	type: typeof LOAD_PREV_PAGE;
}
interface loadNextPageAction {
	type: typeof LOAD_NEXT_PAGE;
}
interface changeElementsPerPageAction {
	type: typeof PER_PAGE_CHANGE;
	payload: number;
}

export type PaginationActionTypes =
	| loadExactPageAction
	| loadNextPageAction
	| loadPrevPageAction
	| changeElementsPerPageAction;
