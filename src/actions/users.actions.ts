import { UsersActionTypes, REQUEST_USERS, SELECT_USER, User } from '../models/users.model';

export const requestUsers = (): UsersActionTypes => ({
	type: REQUEST_USERS,
});

export const selectUser = (username: User['username']): UsersActionTypes => ({
	type: SELECT_USER,
	payload: username,
});
