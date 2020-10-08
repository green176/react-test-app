import { all, call } from 'redux-saga/effects';
import { usersSaga } from './users.saga';
import { filterSaga } from './filter.saga';

export default function* rootSaga() {
	yield all([call(usersSaga), call(filterSaga)]);
}
