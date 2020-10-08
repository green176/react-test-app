import {
	User,
	REQUEST_USERS,
	REQUEST_USERS_SUCCESS,
	SELECT_USER,
	UsersActionTypes,
	UserResponse,
} from '../models/users.model';

export type UsersState = {
	users: Array<UserResponse>;
	isLoading: boolean;
	selectedUser: User['username'];
};

const initialState: UsersState = {
	users: [],
	isLoading: false,
	selectedUser: null,
};

export const usersReducer = (state = initialState, action: UsersActionTypes) => {
	switch (action.type) {
		case SELECT_USER:
			return { ...state, selectedUser: action.payload };
		case REQUEST_USERS:
			return { ...state, isLoading: true };
		case REQUEST_USERS_SUCCESS:
			return {
				...state,
				users: action.payload,
				isLoading: false,
			};
		default:
			return state;
	}
};
