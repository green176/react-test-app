import { Filter, FilterActionTypes, FILTER } from '../models/filter.model';

export type FilterState = Filter;

const initialState: Filter = { lastName: '', city: '', phone: '', birthday: { from: undefined, to: undefined } };

export const filterReducer = (state = initialState, action: FilterActionTypes) => {
	switch (action.type) {
		case FILTER:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};
