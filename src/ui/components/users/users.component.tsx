import React, { useEffect, FC, Fragment } from 'react';
import { UsersPropsFromRedux } from '../../containers/users.container';
import { PaginationContainer } from '../../containers/pagination.container';
import { FilterContainer } from '../../containers/filter.container';
import { Loader } from '../loader/loader.component';
import { UsersTable } from '../user-table/user-table.component';
import { Popup } from '../popup/popup.component';

export const Users: FC<UsersPropsFromRedux> = (props) => {
	const { onRequestUsers, onUserSelect, isLoading, users, selectedUser } = props;
	useEffect(() => {
		onRequestUsers();
	}, []);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<div className="users">
			<Fragment>
				<FilterContainer />
				{!!users.length ? (
					<Fragment>
						<UsersTable users={users} onUserSelect={onUserSelect} />
						<PaginationContainer />
						<Popup user={selectedUser} onClose={() => onUserSelect(null)} />
					</Fragment>
				) : (
					<div>No users</div>
				)}
			</Fragment>
		</div>
	);
};
