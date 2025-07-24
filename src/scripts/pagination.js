const paginationDots = document.querySelectorAll('.pagination__dot');

export function updatePagination(visibleCards, paginationIndex) {
	if (visibleCards !== 3) {
		paginationDots.forEach(dot => dot.style.display = 'none');
		return;
	}

	paginationDots.forEach(dot => dot.style.display = 'inline-block');

	const pageIndex = Math.floor(paginationIndex / 3) % 2;

	console.log(pageIndex, paginationIndex)
	paginationDots.forEach(dot => dot.classList.remove('pagination__dot-active'));
	paginationDots[pageIndex].classList.add('pagination__dot-active');
}
