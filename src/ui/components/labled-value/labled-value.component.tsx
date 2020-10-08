import React, { FC } from 'react';

type LabledValueProps = {
	label: string;
};

export const LabledValue: FC<LabledValueProps> = ({ label, children }) => (
	<div className="labled-value">
		<div className="labled-value__label">{label}</div>
		<div className="labled-value__value">{children}</div>
	</div>
);
