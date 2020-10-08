import { User } from '../../../models/users.model';

export const getWidthByKey = (key: keyof User) =>
	({
		username: '150px',
		firstName: '160px',
		lastName: '160px',
		phone: '200px',
		city: '220px',
		birthday: '140px',
	}[key] || '150px');
export const getCellNameByKey = (key: keyof User) =>
	({
		username: 'Username',
		firstName: 'First Name',
		lastName: 'Last  Name',
		phone: 'Phone',
		city: 'City',
		birthday: 'Birthday',
	}[key] || '');

export const isDate = (value: string | Date): value is Date => value instanceof Date;
