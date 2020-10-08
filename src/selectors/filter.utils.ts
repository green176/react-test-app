import { User } from '../models/users.model';
import { Filter, DateRange } from '../models/filter.model';

const filters = {
	lastName: (filterValue: string) => (lastName: User['lastName']) =>
		lastName.toLowerCase().includes(filterValue.toLowerCase()),
	city: (filterValue: string) => (city: User['city']) => city.toLowerCase().includes(filterValue.toLowerCase()),
	phone: (filterValue: string) => (phone: User['phone']) => phone.toLowerCase().includes(filterValue.toLowerCase()),
	birthday: (filterValue: DateRange) => (birthday: User['birthday']) => {
		const timestamp = birthday.getTime();
		if (!isNaN(filterValue.from) && !isNaN(filterValue.to)) {
			return filterValue.from < timestamp && timestamp < filterValue.to;
		}
		if (!isNaN(filterValue.from)) {
			return filterValue.from < timestamp;
		}
		if (!isNaN(filterValue.to)) {
			return timestamp < filterValue.to;
		}

		return true;
	},
};

export const filterUsers = (array: User[], filterValue: Filter) => {
	const keys = Object.keys(filterValue);
	if (!keys.length) {
		return array;
	}
	return array.filter((item) =>
		Object.keys(filterValue).every((key) => (filterValue[key] ? filters[key](filterValue[key])(item[key]) : true)),
	);
};
