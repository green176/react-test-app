import React, { FC } from 'react';
import { User } from '../../../models/users.model';
import { UsersTableHeaderRow, UsersTableRow } from './user-table-row.component';

type UserTableProps = {
	users: Array<User>;
	onUserSelect: (username: User['username']) => void;
};

export const UsersTable: FC<UserTableProps> = ({ users, onUserSelect }) => (
	<div className="table">
		<UsersTableHeaderRow user={users[0]} />
		{users.map((user) => (
			<UsersTableRow key={user.username} user={user} onUserSelect={onUserSelect} />
		))}
	</div>
);
