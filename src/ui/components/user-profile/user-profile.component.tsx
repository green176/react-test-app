import React, { FC } from 'react';
import { UserResponse } from '../../../models/users.model';
import { LabledValue } from '../labled-value/labled-value.component';

type UserProfileProps = {
	user: UserResponse;
};

export const UserProfile: FC<UserProfileProps> = ({ user }) => {
	const { picture, name, location, email, phone, registered, dob } = user;
	const { state, street, city, postcode } = location;
	const fullName = `${name.title} ${name.first} ${name.last}`;
	return (
		<div className="user-profile">
			<div className="user-profile__full-name">{fullName}</div>
			<div className="user-profile__info">
				<div className="user-profile__photo">
					{picture && picture.large ? (
						<img src={picture.large} alt={fullName} />
					) : (
						<div className="user-profile__no-photo">No photo</div>
					)}
				</div>
				<div className="user-profile__info user-profile__info--column">
					<LabledValue label="Birthday">{new Date(dob).toLocaleDateString()}</LabledValue>
					<LabledValue label="E-mail">{email}</LabledValue>
					<LabledValue label="Phone">{phone}</LabledValue>
				</div>
			</div>
			<LabledValue label="State">{state}</LabledValue>
			<LabledValue label="City">{city}</LabledValue>
			<LabledValue label="Postcode">{postcode}</LabledValue>
			<LabledValue label="Street">{street}</LabledValue>
			<LabledValue label="Registered">{registered}</LabledValue>
		</div>
	);
};
