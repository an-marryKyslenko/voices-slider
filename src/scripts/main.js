const track = document.querySelector('.slider-track');
let currentIndex = 0;
const cardsPerView = 3;
const cardCount = track.children.length;

function slideNext() {
	currentIndex += cardsPerView;

	if (currentIndex >= cardCount / 2) {
		currentIndex = 0;
	}

	const offset = currentIndex * (100 / cardsPerView);
	track.style.transform = `translateX(-${offset}%)`;
}

setInterval(slideNext, 3000);
