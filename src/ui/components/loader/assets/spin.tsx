import React, { FC } from 'react';

export const SpinIcon: FC = () => (
	<svg height="38" width="38" viewBox="0 0 38 38">
		<defs>
			<linearGradient id="a" x1="8.042%" x2="65.682%" y1="0%" y2="23.865%">
				<stop offset="0%" stopColor="currentColor" stopOpacity="0" />
				<stop offset="63.146%" stopColor="currentColor" stopOpacity=".631" />
				<stop offset="100%" stopColor="currentColor" />
			</linearGradient>
		</defs>
		<g fill="none" fillRule="evenodd">
			<g transform="translate(1 1)">
				<path id="Oval-2" d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" strokeWidth="2" />
				<circle cx="36" cy="18" fill="currentColor" r="1" />
			</g>
		</g>
	</svg>
);
