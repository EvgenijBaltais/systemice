<template>
<!--
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
	<meta content="width=device-width, initial-scale=1.0" name="viewport">
	<title>Systemice Portfolio</title>
	<meta content="systemice" name="keywords">
	<meta content="" name="description">
	<link rel="shortcut icon" type="image/x-icon" href="../images/favicon.ico">
	<link rel="stylesheet" type="text/css" href="../css/fontstyle.css">
    <link href="https://use.fontawesome.com/bccb4e85ab.css" media="all" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="../css/style.css">
	<script src="../js/jquery-1.10.2.min.js"></script>
	<script src="js/plugins/jquery.inputmask.bundle.js"></script>
	<script src="plugins/lightcase-2.5.0/src/js/lightcase.js"></script>
	<link rel="stylesheet" href="plugins/lightcase-2.5.0/src/css/lightcase.css">
	<script src="../js/script.js"></script>
	<script src="../js/portfolio-carousel.js"></script>
</head>
<body>
-->
	<div class="wrapper portfolio">
		<div class="bl-l fl-column">
			<div>
				<NuxtLink to = "/">
					<img src="@/assets/images/logo.png">
				</NuxtLink>
			</div>
			<div class="bl-menu-title">
				<span class="company-name">Проекты любой сложности</span>
			</div>
			<div class="bl-pagination">
				<span class="active-page">03 </span>
				<span class="bl-page"> / 07</span>
			</div>
		</div>
		<div class="main">
			<pageHeader/>
			<div class = "centered-block">
				<div class="bl-preview">
					<div class="item-dots item-service-dots"></div>
					<div class="arrow-left"></div>
					<div class="arrow-right"></div>
				</div>
			</div>
			<div class="content-main" id = "portfolio-box">
				<div class="slider content-slide scrolling-box" id = "portfolio-slider">
						<div class="sl-card sl-box-1" :style="{backgroundImage: 'url(images/conf1.jpg)'}"><a href="portfolio1.php">
							<div class="bg-hover">
								<div class="event-info">
									<span class="event-name">EVENT 1</span>
									<div class="line"></div>
									<div class="event-desc">
										<p>География проекта: <b>г.Ногинск, МО</b></p>
										<p>Год проведения: <b>2018 - 2019</b></p>
										<p>Более <b>1000</b> гостей</p>
										<p>Заказчик: <b>СПАО Ресо-Гарантия</b></p>
									</div>
								</div>
							</div></a>
						</div>
						<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(images/conf.jpg)'}">
							<div class="bg-hover">
								<div class="event-info">
									<span class="event-name">EVENT 2</span>
									<div class="line"></div>
									<div class="event-desc">
										<p>География проекта: <b>г.Ногинск, МО</b></p>
										<p>Год проведения: <b>2018 - 2019</b></p>
										<p>Более <b>1000</b> гостей</p>
										<p>Заказчик: <b>СПАО Ресо-Гарантия</b></p>
									</div>
								</div>
							</div>
						</div>
						<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(images/conf.jpg)'}">
							<div class="bg-hover">
								<div class="event-info">
									<span class="event-name">EVENT 3</span>
									<div class="line"></div>
									<div class="event-desc">
										<p>География проекта: <b>г.Ногинск, МО</b></p>
										<p>Год проведения: <b>2018 - 2019</b></p>
										<p>Более <b>1000</b> гостей</p>
										<p>Заказчик: <b>СПАО Ресо-Гарантия</b></p>
									</div>
								</div>
							</div>
						</div>
						<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(images/conf.jpg)'}">
							<div class="bg-hover">
								<div class="event-info">
									<span class="event-name">EVENT 4</span>
									<div class="line"></div>
									<div class="event-desc">
										<p>География проекта: <b>г.Ногинск, МО</b></p>
										<p>Год проведения: <b>2018 - 2019</b></p>
										<p>Более <b>1000</b> гостей</p>
										<p>Заказчик: <b>СПАО Ресо-Гарантия</b></p>
									</div>
								</div>
							</div>
						</div>
						<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(images/conf.jpg)'}">
							<div class="bg-hover">
								<div class="event-info">
									<span class="event-name">PECO 2019</span>
									<div class="line"></div>
									<div class="event-desc">
										<p>География проекта: <b>г.Ногинск, МО</b></p>
										<p>Год проведения: <b>2018 - 2019</b></p>
										<p>Более <b>1000</b> гостей</p>
										<p>Заказчик: <b>СПАО Ресо-Гарантия</b></p>
									</div>
								</div>
							</div>
						</div>
						<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(images/conf.jpg)'}">
						<div class="bg-hover">
							<div class="event-info">
								<span class="event-name">PECO 2019</span>
								<div class="line"></div>
								<div class="event-desc">
									<p>География проекта: <b>г.Ногинск, МО</b></p>
									<p>Год проведения: <b>2018 - 2019</b></p>
									<p>Более <b>1000</b> гостей</p>
									<p>Заказчик: <b>СПАО Ресо-Гарантия</b></p>
								</div>
							</div>
						</div>
					</div>
					<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(images/conf.jpg)'}">
						<div class="bg-hover">
							<div class="event-info">
								<span class="event-name">PECO 2019</span>
								<div class="line"></div>
								<div class="event-desc">
									<p>География проекта: <b>г.Ногинск, МО</b></p>
									<p>Год проведения: <b>2018 - 2019</b></p>
									<p>Более <b>1000</b> гостей</p>
									<p>Заказчик: <b>СПАО Ресо-Гарантия</b></p>
								</div>
							</div>
						</div>
					</div>
					<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(images/conf.jpg)'}">
							<div class="bg-hover">
								<div class="event-info">
									<span class="event-name">EVENT 2</span>
									<div class="line"></div>
									<div class="event-desc">
										<p>География проекта: <b>г.Ногинск, МО</b></p>
										<p>Год проведения: <b>2018 - 2019</b></p>
										<p>Более <b>1000</b> гостей</p>
										<p>Заказчик: <b>СПАО Ресо-Гарантия</b></p>
									</div>
								</div>
							</div>
						</div>
						<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(images/conf.jpg)'}">
							<div class="bg-hover">
								<div class="event-info">
									<span class="event-name">EVENT 3</span>
									<div class="line"></div>
									<div class="event-desc">
										<p>География проекта: <b>г.Ногинск, МО</b></p>
										<p>Год проведения: <b>2018 - 2019</b></p>
										<p>Более <b>1000</b> гостей</p>
										<p>Заказчик: <b>СПАО Ресо-Гарантия</b></p>
									</div>
								</div>
							</div>
						</div>
						<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(images/conf.jpg)'}">
							<div class="bg-hover">
								<div class="event-info">
									<span class="event-name">EVENT 4</span>
									<div class="line"></div>
									<div class="event-desc">
										<p>География проекта: <b>г.Ногинск, МО</b></p>
										<p>Год проведения: <b>2018 - 2019</b></p>
										<p>Более <b>1000</b> гостей</p>
										<p>Заказчик: <b>СПАО Ресо-Гарантия</b></p>
									</div>
								</div>
							</div>
						</div>
						<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(images/conf.jpg)'}">
							<div class="bg-hover">
								<div class="event-info">
									<span class="event-name">PECO 2019</span>
									<div class="line"></div>
									<div class="event-desc">
										<p>География проекта: <b>г.Ногинск, МО</b></p>
										<p>Год проведения: <b>2018 - 2019</b></p>
										<p>Более <b>1000</b> гостей</p>
										<p>Заказчик: <b>СПАО Ресо-Гарантия</b></p>
									</div>
								</div>
							</div>
						</div>
						<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(images/conf.jpg)'}">
						<div class="bg-hover">
							<div class="event-info">
								<span class="event-name">PECO 2019</span>
								<div class="line"></div>
								<div class="event-desc">
									<p>География проекта: <b>г.Ногинск, МО</b></p>
									<p>Год проведения: <b>2018 - 2019</b></p>
									<p>Более <b>1000</b> гостей</p>
									<p>Заказчик: <b>СПАО Ресо-Гарантия</b></p>
								</div>
							</div>
						</div>
					</div>
					<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(images/conf.jpg)'}">
						<div class="bg-hover">
							<div class="event-info">
								<span class="event-name">PECO 2019</span>
								<div class="line"></div>
								<div class="event-desc">
									<p>География проекта: <b>г.Ногинск, МО</b></p>
									<p>Год проведения: <b>2018 - 2019</b></p>
									<p>Более <b>1000</b> гостей</p>
									<p>Заказчик: <b>СПАО Ресо-Гарантия</b></p>
								</div>
							</div>
						</div>
					</div>
					<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(images/conf.jpg)'}">
							<div class="bg-hover">
								<div class="event-info">
									<span class="event-name">EVENT 2</span>
									<div class="line"></div>
									<div class="event-desc">
										<p>География проекта: <b>г.Ногинск, МО</b></p>
										<p>Год проведения: <b>2018 - 2019</b></p>
										<p>Более <b>1000</b> гостей</p>
										<p>Заказчик: <b>СПАО Ресо-Гарантия</b></p>
									</div>
								</div>
							</div>
						</div>
						<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(images/conf.jpg)'}">
							<div class="bg-hover">
								<div class="event-info">
									<span class="event-name">EVENT 3</span>
									<div class="line"></div>
									<div class="event-desc">
										<p>География проекта: <b>г.Ногинск, МО</b></p>
										<p>Год проведения: <b>2018 - 2019</b></p>
										<p>Более <b>1000</b> гостей</p>
										<p>Заказчик: <b>СПАО Ресо-Гарантия</b></p>
									</div>
								</div>
							</div>
						</div>
						<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(images/conf.jpg)'}">
							<div class="bg-hover">
								<div class="event-info">
									<span class="event-name">EVENT 4</span>
									<div class="line"></div>
									<div class="event-desc">
										<p>География проекта: <b>г.Ногинск, МО</b></p>
										<p>Год проведения: <b>2018 - 2019</b></p>
										<p>Более <b>1000</b> гостей</p>
										<p>Заказчик: <b>СПАО Ресо-Гарантия</b></p>
									</div>
								</div>
							</div>
						</div>
						<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(images/conf.jpg)'}">
							<div class="bg-hover">
								<div class="event-info">
									<span class="event-name">PECO 2019</span>
									<div class="line"></div>
									<div class="event-desc">
										<p>География проекта: <b>г.Ногинск, МО</b></p>
										<p>Год проведения: <b>2018 - 2019</b></p>
										<p>Более <b>1000</b> гостей</p>
										<p>Заказчик: <b>СПАО Ресо-Гарантия</b></p>
									</div>
								</div>
							</div>
						</div>
						<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(images/conf.jpg)'}">
						<div class="bg-hover">
							<div class="event-info">
								<span class="event-name">PECO 2019</span>
								<div class="line"></div>
								<div class="event-desc">
									<p>География проекта: <b>г.Ногинск, МО</b></p>
									<p>Год проведения: <b>2018 - 2019</b></p>
									<p>Более <b>1000</b> гостей</p>
									<p>Заказчик: <b>СПАО Ресо-Гарантия</b></p>
								</div>
							</div>
						</div>
					</div>
					<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(images/conf.jpg)'}">
						<div class="bg-hover">
							<div class="event-info">
								<span class="event-name">PECO 2019</span>
								<div class="line"></div>
								<div class="event-desc">
									<p>География проекта: <b>г.Ногинск, МО</b></p>
									<p>Год проведения: <b>2018 - 2019</b></p>
									<p>Более <b>1000</b> гостей</p>
									<p>Заказчик: <b>СПАО Ресо-Гарантия</b></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="footer-mob">
				<div class="bl-pagination">
					<span class="active-page">03 </span>
					<span class="bl-page"> / 07</span>
				</div>
				<div class="bl-copyright">
					<!--Ⓒ2014 - <?=date('Y');?>-->
				</div>
			</div>
		</div>
		<blRight/>
		<div class="bottom-bg"></div>
	</div>
<!--
</body>
</html>
-->

</template>

<script>

import blRight from '@/components/bl_right'
import pageHeader from '@/components/page_header'

export default {

	data(){
		return {
		}
	},
	components: {
		blRight, pageHeader
  	},

	mounted(){

			if (window.screen.width < 850) return false

			// Общий блок, в котором содержатся элементы, к которым применяется анимация

			const animationBlock = document.querySelector('.scrolling-box')
			const animationNavigation = document.querySelector('.item-dots')
			let animationAction = 0

			// Сколько всего блоков на странице, которые будут анимироваться и появляться

			let slides = document.querySelectorAll('.sl-card'),
				dots = '',
				activePage = 0,
				visibleSlides = 6,
				pages = 0,
				dotsContainer = document.querySelector('.item-dots')

			// Показать контент первой страницы

			for (let i = 0; i < 5; i++) {
				slides[i].classList.add('scrolling-portfolio-item')
			}

			// Подсчет количества страниц
			// Добавление точек страниц
			// Если Элементов мало то удалить навигацию, если более 5 то вывести количество страниц

			if (slides.length < 5) {
				document.querySelector('.bl-preview').remove()
			}
			else {
				pages = Math.ceil((slides.length - 5) / visibleSlides + 1);
				for (let i = 0; i < pages; i++) {
					i == 0 ? dots += '<div class="tr-bottom tr-active"></div>' : dots += '<div class="tr-bottom"></div>';
				}
				if (dotsContainer) dotsContainer.innerHTML = dots;
			}

			// Функция, которая меняет видимые слайды в зависимости от свайпов, кликов, скроллов и прочих изменений

			function changePageSlides(direction) {

				// Скрыть все элементы и определить где видимые

				for (let i = 0; i < slides.length; i++) {
					slides[i].classList.remove('scrolling-portfolio-item')
				}

				// Определить куда листать

				// Если пролистывается вправо или влево (или вверх или вниз в случае со скроллингом)
				// Карусель берет все элементы на экране (в данном случае 4) и показывает другие 4
				// Индексы видимых элементов хранятся в массиве activeItems

				if (direction == 'left') {
					let show = 5
					// На последней странице
					if (activePage == pages - 1) {
						activePage = 0
						for (let i = 0; i < 5; i++) {
							slides[i] ? slides[i].classList.add('scrolling-portfolio-item') : ''
						}
					}
					// На первой странице
					else if (activePage == 0) {
						activePage++
						for (let i = 5; i < 11; i++) {
							slides[i] ? slides[i].classList.add('scrolling-portfolio-item') : ''
						}
					}
					// На остальных страницах
					else {
						activePage++
						show += (activePage - 1) * visibleSlides
						for (let i = show; i < show + visibleSlides; i++) {
							slides[i] ? slides[i].classList.add('scrolling-portfolio-item') : ''
						}
					}
				}
				else if (direction == 'right') {
					// На первой странице
					if (activePage == 0) {
						activePage = pages - 1
						let slidesToShow = slides.length - (activePage * visibleSlides - 1)
						for (let i = slides.length - slidesToShow; i < slides.length; i++) {
							slides[i] ? slides[i].classList.add('scrolling-portfolio-item') : ''
						}
					}
					// На остальных страницах
					else {
						activePage--
						let startShow = (activePage) * visibleSlides - 1
						for (let i = startShow; i < startShow + visibleSlides; i++) {
							slides[i] ? slides[i].classList.add('scrolling-portfolio-item') : ''
						}
					}
				}
				else {
					return false
				}
			}

			function changeNavigationActiveItem(a) {
				document.querySelector('.item-dots').querySelector('.tr-active').classList.remove('tr-active')
				document.querySelector('.item-dots').querySelectorAll('.tr-bottom')[activePage].classList.add('tr-active')
			}

			// Вправо

			document.querySelector('.arrow-right').addEventListener('click', function(e){

				if (animationAction > 0) return false
				animationStatus()

				changePageSlides('right')
				changeNavigationActiveItem()
			})

			// Влево

			document.querySelector('.arrow-left').addEventListener('click', function(e){

				if (animationAction > 0) return false
				animationStatus()

				changePageSlides('left')
				changeNavigationActiveItem()
			})

			// Промотка секций при скроллинге мышью

			// Не Mozilla
			window.addEventListener('mousewheel', function(e){

				if (animationAction > 0) return false
				animationStatus()

				let direction = ''
				wheelAction(e) > 0 ? direction = 'right' : direction = 'left'

				changePageSlides(direction)
				changeNavigationActiveItem(activePage)
			})
			// Mozilla
			window.addEventListener('DOMMouseScroll', function(e){

				if (animationAction > 0) return false
				animationStatus()

				let direction = ''
				wheelAction(e) > 0 ? direction = 'right' : direction = 'left'

				changePageSlides(direction)
				changeNavigationActiveItem(activePage)
			})

			// Функция для вычисления направления скролла мышью, если вверх то возвращает 1, если вниз то -1

			function wheelAction (e) {
				let delta;
				event = e || window.event;
				if (event.wheelDelta) {
					delta = event.wheelDelta / 120;
					if (window.opera) delta = -delta;
				}
				else if (event.detail) {
					delta = -event.detail / 3;
				}
				return delta
			}

			function animationStatus(){
				animationAction++
				setTimeout(() => {
					animationAction = 0
				}, 1300)
			}
	}
}

</script>