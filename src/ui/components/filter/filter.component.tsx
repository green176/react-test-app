import React, { FC, useRef, useEffect } from 'react';
import { FilterPropsFromRedux } from '../../containers/filter.container';
import { convertDate } from './filter.utils';

export const Filter: FC<FilterPropsFromRedux> = ({ onFilter, filterValues }) => {
	const lastNameInputRef = useRef<HTMLInputElement>();
	const cityInputRef = useRef<HTMLInputElement>();
	const phoneInputRef = useRef<HTMLInputElement>();
	const birthdayFromRef = useRef<HTMLInputElement>();
	const birthdayToRef = useRef<HTMLInputElement>();

	useEffect(() => {
		lastNameInputRef.current.value = filterValues.lastName;
		cityInputRef.current.value = filterValues.city;
		phoneInputRef.current.value = filterValues.phone;
		birthdayFromRef.current.value = convertDate(filterValues.birthday.from);
		birthdayToRef.current.value = convertDate(filterValues.birthday.to);
	}, [filterValues]);

	const handleFilterValuesChange = () => {
		onFilter({
			lastName: lastNameInputRef.current.value,
			city: cityInputRef.current.value,
			phone: phoneInputRef.current.value,
			birthday: {
				from: new Date(birthdayFromRef.current.value).getTime(),
				to: new Date(birthdayToRef.current.value).getTime(),
			},
		});
	};

	const handleClearFilter = () => {
		onFilter({
			lastName: '',
			city: '',
			phone: '',
			birthday: {},
		});
	};

	return (
		<div className="filter">
			<div className="filter__inputs">
				<div className="form-group">
					<label>
						<input
							className="input"
							ref={lastNameInputRef}
							type="text"
							placeholder="Last name"
							onChange={handleFilterValuesChange}
						/>
					</label>
				</div>
				<div className="form-group">
					<label>
						<input
							className="input"
							ref={phoneInputRef}
							type="text"
							placeholder="Phone"
							onChange={handleFilterValuesChange}
						/>
					</label>
				</div>
				<div className="form-group">
					<label>
						<input
							className="input"
							ref={cityInputRef}
							type="text"
							placeholder="City"
							onChange={handleFilterValuesChange}
						/>
					</label>
				</div>
				<div className="form-group">
					<label>
						<input
							className="input"
							ref={birthdayFromRef}
							type="date"
							placeholder="From"
							onChange={handleFilterValuesChange}
						/>
					</label>
				</div>
				<div className="form-group">
					<label>
						<input
							className="input"
							ref={birthdayToRef}
							type="date"
							placeholder="To"
							onChange={handleFilterValuesChange}
						/>
					</label>
				</div>
			</div>
			<div className="filter__buttons">
				<button className="button" onClick={handleClearFilter}>
					Clear filters
				</button>
			</div>
		</div>
	);
};
