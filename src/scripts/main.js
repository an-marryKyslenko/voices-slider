'use strict';
import { data } from "./data";
import { updatePagination } from "./pagination";

const brackets = new URL('../assets/“.svg', import.meta.url).href;

let visibleCards = 1;
let slideWidth = 380;
const sliderGap = 15;
let currentIndex = 0;
let paginationIndex = 0;

const track = document.getElementById("sliderTrack");
const sliderContainer = document.getElementById("sliderContainer");

const fullData = [...data, ...data];

function createCard({ text, logo, avatar, author, position }) {
	const card = document.createElement("div");
	card.classList.add("card");
	card.innerHTML = `
		<div class="card__logo">
			<img src="${logo}" alt="Company Logo" />
		</div>
		<p class="card__text">${text}</p>
		<img class="card__decorate" src="${brackets}"/>
		<div class="card__footer">
			<img class="card__avatar" src="${avatar}" alt="${author}" />
			<div class="card__author">
				<strong class="card__anthor-name">${author}</strong><br />
				<span>${position}</span>
			</div>
		</div>
	`;
	return card;
}

function renderCards() {
	fullData.forEach((item) => {
		const card = createCard(item);
		track.appendChild(card);
	});
}

let prevVisibleCards = visibleCards;

function calculateVisibleCards() {
	const containerWidth = sliderContainer.offsetWidth;
	const minCardWidth = 320;
	const maxCardWidth = 380;

	let possibleCards = Math.floor(containerWidth / (minCardWidth + sliderGap));
	
	if (possibleCards < 1) possibleCards = 1;
	if (possibleCards > 3) possibleCards = 3;

	if (possibleCards === prevVisibleCards) return false;

	let availableSpace = containerWidth - (possibleCards - 1) * sliderGap;
	
	slideWidth = Math.min(maxCardWidth, Math.floor(availableSpace / possibleCards));
	
	sliderContainer.classList.remove(`slider__slides-${prevVisibleCards}`)
	sliderContainer.classList.add(`slider__slides-${possibleCards}`)
	
	visibleCards = possibleCards;

	return true;
}

function updateTrackWidth() {
	const trackWidth = visibleCards > 1
		? slideWidth * visibleCards + sliderGap * (visibleCards - 1)
		: slideWidth;
	track.style.width = `${trackWidth}px`;

	// Проставляємо width карткам
	const cards = track.querySelectorAll(".card");
	cards.forEach(card => {
		card.style.width = `${slideWidth}px`;
	});
}

function updateSlider() {
	const offset = (slideWidth + sliderGap) * currentIndex;
	track.style.transform = `translateX(-${offset}px)`;

	updatePagination(visibleCards, paginationIndex);
}

function resetSlider() {
	calculateVisibleCards();
	updateTrackWidth();
	updateSlider();
}

document.querySelector("#next").addEventListener("click", () => {
	currentIndex++;
	paginationIndex++;

	if(paginationIndex > fullData.length - 1){
		paginationIndex = 0;
	}

	if (currentIndex > data.length - 1) {
		currentIndex = 0;
		track.style.transition = "none";
		
		updateSlider();
		setTimeout(() => {
			track.style.transition = "transform 0.4s ease";
			currentIndex++;
			// paginationIndex++;
			updateSlider();
		}, 20);
	} else {
		updateSlider();
	}
});

document.querySelector("#prev").addEventListener("click", () => {
	currentIndex--;
	paginationIndex--;

	if(paginationIndex < 0) {
		paginationIndex = fullData.length - 1;
	}
	if (currentIndex < 0) {
		currentIndex = data.length - 1;
		track.style.transition = "none";
		
		updateSlider();
		setTimeout(() => {
			track.style.transition = "transform 0.4s ease";
			currentIndex--;
			// paginationIndex--;
			updateSlider();
		}, 20);
	} else {
		updateSlider();
	}
});

// Initial
renderCards();
resetSlider();

// On resize
let resizeTimeout;

window.addEventListener("resize", () => {
	clearTimeout(resizeTimeout);
	resizeTimeout = setTimeout(() => {
		if (calculateVisibleCards()) {
			resetSlider();
		}
	}, 200);
});
