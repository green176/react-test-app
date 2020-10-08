import { all, takeLatest, put } from 'redux-saga/effects';
import { REQUEST_USERS, REQUEST_USERS_SUCCESS, REQUEST_USERS_ERROR, UserResponse } from '../models/users.model';

function* fetchUsers() {
	try {
		const response = yield fetch(`http://jsteam.sibedge.com/raw/task/users.json`).then((response) =>
			response.json(),
		);
		yield put(fetchUsersSuccess(response.results));
	} catch (error) {
		fetchUsersError();
	}
}

export const fetchUsersSuccess = (users: UserResponse[]) => ({
	type: REQUEST_USERS_SUCCESS,
	payload: users,
});

export const fetchUsersError = () => ({
	type: REQUEST_USERS_ERROR,
});

export function* usersSaga() {
	yield all([takeLatest(REQUEST_USERS, fetchUsers)]);
}
