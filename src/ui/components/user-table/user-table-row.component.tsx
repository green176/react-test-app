import React, { FC } from 'react';
import { User, UserKeys } from '../../../models/users.model';
import { UsersTableCell } from './user-table-cell.component';
import { getWidthByKey, getCellNameByKey, isDate } from './user-table.utils';

type UserTableHeaderRowProps = {
	user: User;
};

type UserTableRowProps = UserTableHeaderRowProps & {
	onUserSelect: (username: User['username']) => void;
};

export const UsersTableHeaderRow: FC<UserTableHeaderRowProps> = ({ user }) => (
	<div className="table-row header-row">
		{Object.keys(user).map((key: UserKeys) => (
			<UsersTableCell key={key} size={getWidthByKey(key)}>
				{getCellNameByKey(key)}
			</UsersTableCell>
		))}
	</div>
);

export const UsersTableRow: FC<UserTableRowProps> = ({ user, onUserSelect }) => (
	<div className="table-row" onClick={() => onUserSelect(user.username)}>
		{Object.keys(user).map((key: UserKeys) => {
			let value = user[key];
			if (isDate(value)) {
				value = value.toLocaleDateString();
			}

			return (
				<UsersTableCell key={key} size={getWidthByKey(key)}>
					{value}
				</UsersTableCell>
			);
		})}
	</div>
);
