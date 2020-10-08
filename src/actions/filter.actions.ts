import { Filter, FilterActionTypes, FILTER } from '../models/filter.model';

export const filter = (filter: Filter): FilterActionTypes => ({
	type: FILTER,
	payload: filter,
});
