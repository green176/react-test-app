export const REQUEST_USERS = 'REQUEST_USERS';
export const REQUEST_USERS_SUCCESS = 'REQUEST_USERS_SUCCESS';
export const REQUEST_USERS_ERROR = 'REQUEST_USERS_ERROR';

export const SELECT_USER = 'SELECT_USER';

interface requestUsersAction {
	type: typeof REQUEST_USERS;
}
interface selectUserAction {
	type: typeof SELECT_USER;
	payload: User['username'];
}
interface requestUsersSuccessAction {
	type: typeof REQUEST_USERS_SUCCESS;
	payload: UserResponse[];
}

export type UsersActionTypes = requestUsersAction | requestUsersSuccessAction | selectUserAction;

export type User = {
	username: string;
	firstName: string;
	lastName: string;
	city: string;
	phone: string;
	birthday: Date;
};

export type UserKeys = keyof User;

export type UserResponse = {
	gender: string;
	name: {
		title: string;
		first: string;
		last: string;
	};
	location: {
		street: string;
		city: string;
		state: string;
		postcode: number;
	};
	email: string;
	login: {
		username: string;
		password: string;
		salt: string;
		md5: string;
		sha1: string;
		sha256: string;
	};
	dob: string;
	registered: string;
	phone: string;
	cell: string;
	id: {
		name: string;
		value: string;
	};
	picture: {
		large: string;
		medium: string;
		thumbnail: string;
	};
	nat: string;
};
