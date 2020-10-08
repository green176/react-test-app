import { State } from '../reducers/root.reducer';
import { filterUsers } from './filter.utils';
import { responseToUsers } from './users.utils';

const usersState = (state: State) => state.usersState;
const filterState = (state: State) => state.filterState;
const paginationState = (state: State) => state.paginationState;

const getAllForTableUsers = (state: State) => (usersState(state) ? responseToUsers(usersState(state).users) : []);
export const getTotalPages = (state: State) => {
	const count = getFilteredUsers(state).length;
	const { perPage } = paginationState(state);

	return Math.ceil(count / perPage);
};

const getFilteredUsers = (state: State) => {
	const allUsers = getAllForTableUsers(state);
	const filters = filterState(state);

	return filterUsers(allUsers, filters);
};

export const getUsers = (state: State) => {
	const users = getFilteredUsers(state);
	const { perPage, currentPage } = paginationState(state);
	const end = perPage * currentPage;
	const start = end - perPage;
	const usersOnPage = users.slice(start, end);

	return usersOnPage;
};

export const getUser = (state: State) => {
	const { selectedUser, users } = usersState(state);
	return users.find((user) => user.login.username === selectedUser);
};
