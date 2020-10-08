import React, { FC } from 'react';
import { SpinIcon } from './assets/spin';

export const Loader: FC = () => (
	<div className="loader">
		<i className="loader__spinner">
			<SpinIcon />
		</i>
	</div>
);
