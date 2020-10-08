import { User } from './users.model';

export type DateRange = {
	from?: number;
	to?: number;
};
type PartialUserKeys = keyof Partial<Omit<User, 'birthday' | 'username' | 'firstName'>>;

export type Filter = { [x in PartialUserKeys]: string } & { ['birthday']: DateRange };

export type FilterKeys = keyof { [x in PartialUserKeys]: string } & { ['birthday']: DateRange };

export const FILTER = 'FILTER';

interface filterAction {
	type: typeof FILTER;
	payload: Filter;
}

export type FilterActionTypes = filterAction;
