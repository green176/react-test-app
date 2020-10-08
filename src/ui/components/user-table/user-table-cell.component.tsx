import React, { FC } from 'react';

type UsersTableCellProps = {
	size: string;
};
export const UsersTableCell: FC<UsersTableCellProps> = ({ children, size }) => (
	<div className="table-cell" style={{ flexBasis: size }} title={children.toString()}>
		<div className="table-cell__content">{children}</div>
	</div>
);
