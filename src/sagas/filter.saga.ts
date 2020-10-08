import { all, takeLatest, put } from 'redux-saga/effects';
import { FILTER } from '../models/filter.model';
import { loadExactPage } from '../actions/pagination.actions';

function* resetPagination() {
	yield put(loadExactPage(1));
}

export function* filterSaga() {
	yield all([takeLatest(FILTER, resetPagination)]);
}
