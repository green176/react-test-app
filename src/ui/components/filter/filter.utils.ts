export const convertDate = (timestamp: number) => {
	if (!timestamp) {
		return null;
	}
	const date = new Date(timestamp);
	const day = date.getDate();
	const dayMonth = day < 10 ? `0${day}` : day;
	const month = date.getMonth() + 1;
	const dateMonth = month < 10 ? `0${month}` : month;
	const year = date.getFullYear();
	const dateYear = year < 10 ? `000${year}` : year < 100 ? `00${year}` : year < 1000 ? `0${year}` : year;
	return `${dateYear}-${dateMonth}-${dayMonth}`;
};
