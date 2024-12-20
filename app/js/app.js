// main js

scrollCue.init({
	duration: 1000,
	percentage: 0.9,
	docSlider: true,
	pageChangeReset: true
});

docSlider.init({
	speed: 1200,
	easing: 'ease-in-out',
	pager: false,
	// scrollReset: true,
});


Fancybox.bind("[data-fancybox]", {
});

// Код для GSAP и preloader
// gsap.registerPlugin();

// // Функция показа контента и скрытия прелоадера
// function showContent() {
// 	gsap.to("#fade-out", { duration: 0.5, opacity: 1, onComplete: hidePreloader });
// }

// function hidePreloader() {
// 	gsap.to("#preloader", {
// 		duration: 0.5, opacity: 0, onComplete: () => {
// 			document.getElementById('preloader').style.display = 'none';
// 			document.getElementById('content').style.display = 'block';

// 			// Запуск GSAP анимации
// 			const tl = gsap.timeline();
// 			tl.fromTo('header', { y: -300 }, { y: 0, duration: 2 })
// 				.fromTo('.intro__title, .intro__text', { y: -400, opacity: 0 }, { y: 0, opacity: 1, duration: 2 }, '<')
// 				.fromTo('.intro__discuss', { y: 400, x: 400 }, { y: 0, x: 0, duration: 2 }, '<')
// 				.fromTo('.intro__stack', { y: 400, x: -400 }, { y: 0, x: 0, duration: 2 }, '<')
// 				.fromTo('.intro__blur-left', { y: 200, x: -200 }, { scale: 1, y: 0, x: 0, duration: 2 }, '<')
// 				.fromTo('.intro__blur-right', { opacity: 0 }, { opacity: 1, duration: 2 }, '<')
// 				.fromTo('.intro__blur-right-2', { y: 200, x: 200 }, { y: 0, x: 0, duration: 2 }, '<')
// 				.fromTo('.intro__img-bg', { scale: 0 }, { scale: 1, duration: 2 }, '<');
// 		}
// 	});
// }

// // Проверяем, прошло ли достаточное время и показываем контент
// const animationDuration = 4700;
// let startTime = Date.now();

// function checkTimeElapsed() {
// 	const elapsedTime = Date.now() - startTime;
// 	if (elapsedTime >= animationDuration) {
// 		showContent();
// 	} else {
// 		setTimeout(showContent, animationDuration - elapsedTime);
// 	}
// }

// if (document.readyState === 'complete') {
// 	checkTimeElapsed();
// } else {
// 	window.addEventListener('load', checkTimeElapsed);
// }

// Найдем элемент круга в блоке quote и секцию services
const circle = document.querySelector(".quote .circle");
const quoteSection = document.querySelector('.quote');
const servicesSection = document.querySelector('.services');

// Проверяем, существует ли круг и секции
if (circle && quoteSection && servicesSection) {
	let isInQuote = false;
	let isInServices = false;

	// Функция для анимации круга
	function animateCircle(isEnteringNextBlock) {
		if (isEnteringNextBlock) {
			circle.classList.add('animate');
			circle.classList.remove('reset');
		} else {
			circle.classList.add('reset');
			circle.classList.remove('animate');
		}
	}

	// Создаем наблюдатель для блока quote
	const quoteObserver = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			isInQuote = entry.isIntersecting;
			// Если пользователь вышел из блока quote, сбрасываем анимацию
			if (!isInQuote) {
				animateCircle(false);
			}
		});
	}, {
		root: null,
		rootMargin: '0px',
		threshold: 0.01 // Порог видимости (10%)
	});

	quoteObserver.observe(quoteSection);

	// Создаем наблюдатель для блока services
	const servicesObserver = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			isInServices = entry.isIntersecting;

			if (isInQuote && isInServices) {
				// Когда секция services видима и пользователь находится в блоке quote
				animateCircle(true);
			} else if (isInServices && !isInQuote) {
				// Когда секция services видима, но пользователь уже не в quote
				animateCircle(false);
			}
		});
	}, {
		root: null,
		rootMargin: '0px',
		threshold: 0.01 // Порог видимости (10%)
	});

	servicesObserver.observe(servicesSection);
} else {
	console.warn("Круг в блоке quote или секция services не найдены");
}


// document.querySelectorAll('.dark-section').forEach((section) => {
// 	const animationType = section.getAttribute('data-animation');
// 	const duration = 3; // Продолжительность анимации в секундах

// 	let tl = gsap.timeline({
// 		scrollTrigger: {
// 			trigger: section,
// 			start: 'top top',
// 			end: 'bottom top',
// 			scrub: 1,
// 			// markers: true,
// 			pin: true, // Закрепляем секцию на экране, чтобы анимация не прерывалась
// 		}
// 	});

// 	switch (animationType) {
// 		case 'type1':
// 			tl.fromTo(section.querySelector('.pg-slider__item'),
// 				{ opacity: 0 },
// 				{ opacity: 1, duration: duration }
// 			)
// 				.fromTo(section.querySelector('.pg-slider__top'),
// 					{ y: -200, opacity: 0 },
// 					{ opacity: 1, y: 0, duration: duration }, '<'
// 				)
// 				.fromTo(section.querySelector('.pg-slider__bottom'),
// 					{ opacity: 0, y: 200 },
// 					{ y: 0, opacity: 1, duration: duration }, '<'
// 				)
// 				.fromTo(section.querySelector('.pg-slider__img'),
// 					{ opacity: 0, x: 500 },
// 					{ x: 0, opacity: 1, duration: duration }, '<'
// 				)
// 				.fromTo(section.querySelector('.pg-slider__img'),
// 					{ opacity: 1, x: 0 },
// 					{ x: 500, opacity: 0, duration: duration },
// 				)
// 			// .to(section.querySelector('.pg-slider__item'),
// 			// 	{ opacity: 0, duration: duration }
// 			// );
// 			break;

// 		case 'type2':
// 			tl.fromTo(section.querySelector('.pg-slider__item'),
// 				{ opacity: 0 },
// 				{ opacity: 1, duration: duration }
// 			)
// 				.fromTo(section.querySelector('.pg-slider__top'),
// 					{ y: -200, opacity: 0 },
// 					{ opacity: 1, y: 0, duration: duration }, '<'
// 				)
// 				.fromTo(section.querySelector('.pg-slider__bottom'),
// 					{ opacity: 0, y: 200 },
// 					{ y: 0, opacity: 1, duration: duration }, '<'
// 				)
// 				.fromTo(section.querySelector('.pg-slider__img'),
// 					{ opacity: 0, x: 500 },
// 					{ x: 0, opacity: 1, duration: duration }, '<'
// 				)
// 				.to(section.querySelector('.pg-slider__item'),
// 					{ opacity: 0, duration: duration }
// 				);
// 			break;

// 		case 'type3':
// 			tl.fromTo(section.querySelector('.pg-slider__item'),
// 				{ opacity: 0 },
// 				{ opacity: 1, duration: duration }
// 			)
// 				.fromTo(section.querySelector('.pg-slider__top'),
// 					{ y: -200, opacity: 0 },
// 					{ opacity: 1, y: 0, duration: duration }, '<'
// 				)
// 				.fromTo(section.querySelector('.pg-slider__bottom'),
// 					{ opacity: 0, y: 200 },
// 					{ y: 0, opacity: 1, duration: duration }, '<'
// 				)
// 				.fromTo(section.querySelector('.pg-slider__img'),
// 					{ opacity: 0, x: 500 },
// 					{ x: 0, opacity: 1, duration: duration }, '<'
// 				)
// 				.to(section.querySelector('.pg-slider__item'),
// 					{ opacity: 0, duration: duration }
// 				);
// 			break;

// 		case 'type4':
// 			tl.fromTo(section.querySelector('.pg-slider__item'),
// 				{ opacity: 0 },
// 				{ opacity: 1, duration: duration }
// 			)
// 				.fromTo(section.querySelector('.pg-slider__top'),
// 					{ y: -200, opacity: 0 },
// 					{ opacity: 1, y: 0, duration: duration }, '<'
// 				)
// 				.fromTo(section.querySelector('.pg-slider__bottom'),
// 					{ opacity: 0, y: 200 },
// 					{ y: 0, opacity: 1, duration: duration }, '<'
// 				)
// 				.fromTo(section.querySelector('.pg-slider__img'),
// 					{ opacity: 0, x: 500 },
// 					{ x: 0, opacity: 1, duration: duration }, '<'
// 				)
// 				.to(section.querySelector('.pg-slider__item'),
// 					{ opacity: 0, duration: duration }
// 				);
// 			break;

// 		// Добавьте другие типы анимаций по необходимости
// 	}
// });


// scrollCue.init({
// 	duration: 800,
// 	percentage: 0.9,
// 	docSlider: true,
// 	pageChangeReset: true
// });

// docSlider.init({
// 	speed: 1100,
// 	easing: 'ease-in-out',
// 	pager: false,
// });

gsap.registerPlugin();

window.addEventListener('load', function () {

	const sliderInner = document.querySelector('.slider__inner');

	// Дублируем элементы слайдера для бесконечного эффекта
	sliderInner.innerHTML += sliderInner.innerHTML;

	// Анимация слайдера
	gsap.to(sliderInner, {
		xPercent: 100, // Сдвиг на 100% влево
		ease: "none", // Линейное движение
		duration: 20, // Продолжительность одного полного цикла
		repeat: -1, // Бесконечный цикл
		modifiers: {
			xPercent: gsap.utils.wrap(-100, 0) // Возвращаем элементы в начало
		}
	});

	const animationDuration = 4600;
	let startTime = Date.now();

	function showContent() {
		gsap.to("#fade-out", { duration: 0.5, opacity: 1, onComplete: hidePreloader });
	}

	function hidePreloader() {
		gsap.to("#preloader", {
			duration: -1, opacity: 0, onComplete: () => {
				document.getElementById('preloader').style.display = 'none';
				document.getElementById('content').style.display = 'block';

				// Запуск GSAP анимации
				const tl = gsap.timeline();
				tl.fromTo(
					'header', { y: -300 }, { y: 0, duration: 2 }
				)
					.fromTo(
						'.intro__title, .intro__text', { y: -400, opacity: 0 }, { y: 0, opacity: 1, duration: 2 }, '<'
					)
					.fromTo(
						'.intro__discuss', { y: 400, x: 400 }, { y: 0, x: 0, duration: 2 }, '<'
					)
					.fromTo(
						'.intro__stack', { y: 400, x: -400 }, { y: 0, x: 0, duration: 2 }, '<'
					)
					.fromTo(
						'.intro__blur-left', { y: 200, x: -200 }, { scale: 1, y: 0, x: 0, duration: 2 }, '<'
					)
					.fromTo(
						'.intro__blur-right', { opacity: 0 }, { opacity: 1, duration: 2 }, '<'
					)
					.fromTo(
						'.intro__blur-right-2', { y: 200, x: 200 }, { y: 0, x: 0, duration: 2 }, '<'
					)
					.fromTo(
						'.intro__img-bg', { scale: 0 }, { scale: 1, duration: 2 }, '<'
					);
			}
		});
	}

	const checkTimeElapsed = () => {
		const elapsedTime = Date.now() - startTime;
		if (elapsedTime >= animationDuration) {
			showContent();
		} else {
			setTimeout(showContent, animationDuration - elapsedTime);
		}
	};

	if (document.readyState === 'complete') {
		checkTimeElapsed();
	} else {
		window.addEventListener('load', checkTimeElapsed);
	}
});

document.querySelectorAll('.faq__tab__header').forEach(item => {
	item.addEventListener('click', function () {
		const parentItem = this.parentElement;
		const isActive = parentItem.classList.contains('active');

		// Закрываем все активные элементы
		document.querySelectorAll('.faq__tab__item').forEach(tab => {
			tab.classList.remove('active');
			tab.querySelector('.faq__tab__content').style.maxHeight = null;
		});

		// Если текущий элемент был неактивен, то раскрываем его
		if (!isActive) {
			parentItem.classList.add('active');
			const content = parentItem.querySelector('.faq__tab__content');
			content.style.maxHeight = content.scrollHeight + 'px';
		}
	});
});