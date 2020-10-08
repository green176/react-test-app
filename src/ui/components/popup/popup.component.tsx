import React, { FC, Fragment } from 'react';
import { UserResponse } from '../../../models/users.model';
import { UserProfile } from '../user-profile/user-profile.component';

type PopupProps = {
	user?: UserResponse;
	onClose: () => void;
};

export const Popup: FC<PopupProps> = ({ user, onClose }) =>
	user ? (
		<Fragment>
			<div className="popup">
				<UserProfile user={user} />
				<div className="popup__footer">
					<button className="button popup__button" onClick={onClose}>
						Close
					</button>
				</div>
			</div>
			<div className="backdrop"></div>
		</Fragment>
	) : null;
