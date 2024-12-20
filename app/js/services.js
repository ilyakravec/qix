// const darkSliderInner = document.querySelector('.ready__slider.dark .ready__slider__inner');
// const whiteSliderInner = document.querySelector('.ready__slider.white .ready__slider__inner');

// // Дублируем элементы слайдера для бесконечного эффекта
// darkSliderInner.innerHTML += darkSliderInner.innerHTML;
// whiteSliderInner.innerHTML += whiteSliderInner.innerHTML;

// // Анимация темного слайдера
// gsap.to(darkSliderInner, {
// 	xPercent: -100, // Сдвиг на 100% влево
// 	ease: "none", // Линейное движение
// 	duration: 20, // Продолжительность одного полного цикла
// 	repeat: -1, // Бесконечный цикл
// 	modifiers: {
// 		xPercent: gsap.utils.wrap(-100, 0) // Возвращаем элементы в начало
// 	}
// });

// // Анимация светлого слайдера
// gsap.to(whiteSliderInner, {
// 	xPercent: 100, // Сдвиг на 100% вправо
// 	ease: "none", // Линейное движение
// 	duration: 20, // Продолжительность одного полного цикла
// 	repeat: -1, // Бесконечный цикл
// 	modifiers: {
// 		xPercent: gsap.utils.wrap(0, 100) // Возвращаем элементы в начало
// 	}
// });

// const darkSliderItems = document.querySelectorAll('.ready__slider.dark .ready__item');
// const whiteSliderItems = document.querySelectorAll('.ready__slider.white .ready__item');

// function animateSlider(items, delay) {
// 	items.forEach((item, index) => {
// 		item.style.animationDelay = `${index * delay}s`; // Задаем задержку для каждого элемента
// 		item.style.opacity = '1'; // Устанавливаем непрозрачность 1, чтобы анимация работала
// 		item.style.animationPlayState = 'running'; // Запускаем анимацию
// 	});
// // }
// window.addEventListener('load', function () {
// 	// Инициализируем GSAP
// 	gsap.registerPlugin();

// 	// Функция для инициализации слайдера
// 	function initSlider(sliderInner) {
// 		// Дублируем элементы слайдера для бесконечного эффекта
// 		sliderInner.innerHTML += sliderInner.innerHTML;

// 		// Устанавливаем начальное положение слайдера
// 		gsap.set(sliderInner, { xPercent: 100 }); // Начальное положение справа

// 		// Анимация слайдера
// 		gsap.to(sliderInner, {
// 			xPercent: -100, // Сдвиг на 100% влево
// 			ease: "none", // Линейное движение
// 			duration: 30, // Увеличьте продолжительность до 20 секунд для медленной анимации
// 			repeat: -1, // Бесконечный цикл
// 			modifiers: {
// 				xPercent: gsap.utils.wrap(-100, 0) // Возвращаем элементы в начало
// 			}
// 		});
// 	}

// 	// Находим все слайдеры
// 	const sliders = document.querySelectorAll('.ready__slider__inner');

// 	// Инициализируем каждый слайдер
// 	sliders.forEach(slider => initSlider(slider));
// });
// window.addEventListener('load', function () {
// 	gsap.registerPlugin();

// 	const darkSliderInner = document.querySelector('.ready__slider.dark .ready__slider__inner');
// 	const whiteSliderInner = document.querySelector('.ready__slider.white .ready__slider__inner');

// 	// Дублируем элементы слайдера для бесконечного эффекта
// 	darkSliderInner.innerHTML += darkSliderInner.innerHTML;
// 	whiteSliderInner.innerHTML += whiteSliderInner.innerHTML;

// 	// Анимация темного слайдера
// 	gsap.to(darkSliderInner, {
// 		xPercent: -100, // Сдвиг на 100% влево
// 		ease: "none", // Линейное движение
// 		duration: 30, // Продолжительность одного полного цикла
// 		repeat: -1, // Бесконечный цикл
// 		modifiers: {
// 			xPercent: gsap.utils.wrap(-100, 0) // Возвращаем элементы в начало
// 		}
// 	});

// 	// Анимация светлого слайдера
// 	gsap.to(whiteSliderInner, {
// 		xPercent: 100, // Сдвиг на 100% вправо
// 		ease: "none",
// 		duration: 50, // Продолжительность одного полного цикла
// 		repeat: -1,
// 		modifiers: {
// 			xPercent: gsap.utils.wrap(0, 100)
// 		}
// 	});
// });


var owl = $('.article__slider');
owl.owlCarousel();
// Go to the next item
$('.article__slider-btn .next').click(function () {
	owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.article__slider-btn .prev').click(function () {
	// With optional speed parameter
	// Parameters has to be in square bracket '[]'
	owl.trigger('prev.owl.carousel', [300]);
})

window.addEventListener('load', function () {
	gsap.registerPlugin();

	const sliderInner = document.querySelectorAll('.ready__slider__inner');

	// Дублируем элементы слайдера для бесконечного эффекта
	sliderInner.innerHTML += sliderInner.innerHTML;

	// Получаем полное количество элементов
	const totalItems = document.querySelectorAll('.ready__item').length;

	// Анимация слайдера
	gsap.to(sliderInner, {
		xPercent: -100, // Сдвиг на 100% влево за весь слайдер
		ease: "none", // Линейное движение
		duration: 30, // Уменьшаем продолжительность одного полного цикла до 15 секунд
		repeat: -1, // Бесконечный цикл
		modifiers: {
			xPercent: gsap.utils.wrap(-100, 0) // Возвращаем элементы в начало
		}
	});
});


