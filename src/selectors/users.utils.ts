import { UserResponse, User } from '../models/users.model';

export const responseToUsers = (response: UserResponse[]): User[] =>
	response.map(({ name, location: { city }, phone, dob, login: { username } }) => ({
		username,
		firstName: name.first,
		lastName: name.last,
		phone,
		city,
		birthday: new Date(dob),
	}));
