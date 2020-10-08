import { applyMiddleware, createStore as createReduxStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { createRootReducer } from './reducers/root.reducer';
import rootSaga from './sagas/root.saga';

function createStore() {
	const sagaMiddleware = createSagaMiddleware();
	const rootReducer = createRootReducer();
	const middleware = [sagaMiddleware];
	const store = createReduxStore(rootReducer, applyMiddleware(...middleware));
	sagaMiddleware.run(rootSaga);

	return store;
}

export const store = createStore();
