import Swiper from 'swiper/bundle';
import { Navigation, Autoplay } from "swiper/modules";

// import styles bundle
import 'swiper/css/bundle';

const swiper1 = new Swiper(".first-slider", {
	modules: [Navigation, Autoplay],
	loop: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

const swiper2 = new Swiper(".fiveItem-slider", {
	modules: [Navigation, Autoplay],
	slidesPerView: 1,
	spaceBetween: 20,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		350: {
			slidesPerView: 2,
		},
		750: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
		1250: {
			slidesPerView: 5,
		},
	},
});
var swiper3 = new Swiper(".product-slider", {
	modules: [Navigation, Autoplay],
	slidesPerView: "auto",
	spaceBetween: 30,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		350: {
			slidesPerView: 1,
		},
		500: {
			slidesPerView: 2,
		},
		820: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
		1400: {
			slidesPerView: 5,
		},
		1900: {
			slidesPerView: 6,
		},
	},
});

console.log("hi");
