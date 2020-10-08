import React, { FC, SyntheticEvent } from 'react';
import { PaginationPropsFromRedux } from '../../containers/pagination.container';

export const Pagination: FC<PaginationPropsFromRedux> = ({
	currentPage,
	totalPages,
	perPage,
	onChangePage,
	onNextPage,
	onPrevPage,
	onChangePerPage,
}) => {
	const handleSelectChange = (e: SyntheticEvent) => {
		if (e.target instanceof HTMLSelectElement) {
			const page = Number(e.target.value);
			if (!isNaN(page)) {
				onChangePerPage(Number(e.target.value));
			}
		}
	};
	return (
		<div className="pagination">
			<div className="pagination__per-page">
				<label>
					Elements per page
					<select
						className="select pagination__select"
						name="perPage"
						value={perPage}
						onChange={handleSelectChange}>
						<option value="10">10</option>
						<option value="20">20</option>
						<option value="30">30</option>
					</select>
				</label>
			</div>
			<div className="pagination__pages">
				<button className="button pagination__button" disabled={currentPage === 1} onClick={() => onPrevPage()}>
					{'<<<'} Back
				</button>
				{[...Array(totalPages)].map((_, index) => (
					<button
						className="button pagination__button"
						disabled={index + 1 === currentPage}
						key={index}
						onClick={() => onChangePage(index + 1)}>
						{index + 1}
					</button>
				))}
				<button
					className="button pagination__button"
					disabled={currentPage === totalPages}
					onClick={() => onNextPage()}>
					Next {'>>>'}
				</button>
			</div>
		</div>
	);
};
