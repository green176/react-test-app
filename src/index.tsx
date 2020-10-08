import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { UsersContainer } from './ui/containers/users.container';

import './styles.scss';

ReactDOM.render(
	<div className="container">
		<Provider store={store}>
			<UsersContainer />
		</Provider>
	</div>,
	document.getElementById('root'),
);
