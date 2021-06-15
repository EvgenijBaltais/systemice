<template>
<!--
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
	<meta content="width=device-width, initial-scale=1.0" name="viewport">
	<title>Systemice Service</title>
	<meta content="systemice" name="keywords">
	<meta content="" name="description">
	<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">
	<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
	<script src="js/plugins/jquery.inputmask.bundle.js"></script>
	<link rel="stylesheet" type="text/css" href="css/fontstyle.css">
    <link href="https://use.fontawesome.com/bccb4e85ab.css" media="all" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/animation.css">
	<script type="text/javascript" src="plugins/lightcase-2.5.0/src/js/lightcase.js"></script>
	<link rel="stylesheet" href="plugins/lightcase-2.5.0/src/css/lightcase.css">
	<script type="text/javascript" src="js/script.js"></script>
	<script type="text/javascript" src="js/team-carousel.js"></script>
</head>
<body>
-->
	<div class="wrapper team">
		<div class="bl-l fl-column">
			<div>
				<NuxtLink to = "/">
					<img src="@/assets/images/logo.png">
				</NuxtLink>
			</div>
			<div class="bl-menu-title">
				<span class="company-name">КОМАНДА</span>
			</div>
			<div class="bl-pagination">
				<span class="active-page">04 </span>
				<span class="bl-page"> / 07</span>
			</div>
		</div>
		<div class="main">
			<pageHeader/>
			<div class="content-box">
				<img class="sotrud-img main-sotrud-img" src="@/assets/images/sotrud1.png">
				<div class="right-wth">
					<h1 class="h1-more">МАРИНА БЕЛОЦЕРКОВСКАЯ</h1>
					<div class="line"></div>
					<h3 class="h3 h3-more">РУКОВОДИТЕЛЬ ОТДЕЛА РАЗВИТИЯ</h3>
					<div class="sotrud-contact">
						<b>Телефон:</b> <a href="tel:79853074317">+7 (985) 307-43-17</a> (доб. 887) <br>
						<b>Email:</b> zamkova@mailbox.ru
					</div>
				</div>
			</div>
			<div class="bl-preview">
				<div class="preview-container">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
					<img class="link-arrow dop-arrow-left" src="@/assets/images/arrow-left.png">
					<img class="link-arrow dop-arrow-right" src="@/assets/images/arrow-right.png">
					<div class = "sl-wrapper-shadow">
						<div class = "sl-wrapper">
							<img src = "@/assets/images/mini/3.png" class="sl-teammate preview-item first" data-name = "Мирхайдарова Мария" data-position = "Руководитель компании">
							<img src = "@/assets/images/mini/2.png" class="sl-teammate preview-item slide-user-active second" data-name = "Марина Белоцерковская" data-position ="Руководитель отдела развития">
							<img src = "@/assets/images/mini/4.png" class="sl-teammate preview-item third" data-name = "Георгиев Алексей" data-position = "Руководитель корпоративного отдела">
							<img src = "@/assets/images/mini/5.png" class="sl-teammate preview-item" data-name = "Сергеева Валерия" data-position = "Старший менеджер">
							<img src = "@/assets/images/mini/6.png" class="sl-teammate preview-item" data-name = "Евграфов Артур" data-position = "Руководитель IT отдела">
							<img src = "@/assets/images/mini/7.png" class="sl-teammate preview-item" data-name = "Крюкова Анастасия" data-position = "Главный маркетолог">
							<img src = "@/assets/images/mini/8.png" class="sl-teammate preview-item" data-name = "Ларин Станислав" data-position = "Руководитель рекламного отдела">
						</div>
					</div>
				</div>
				<div class = "item-dots">
					<div class = "dots-container clearfix"></div>
				</div>
				<div class="arrow-left"></div>
				<div class="arrow-right"></div>
			</div>
			<div class="footer-mob">
				<div class="bl-pagination">
					<span class="active-page">04 </span>
					<span class="bl-page"> / 07</span>
				</div>
				<div class="bl-copyright">
					<!--Ⓒ2014 - <?=date('Y');?>-->
				</div>
			</div>
		</div>
		<blRight/>
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
			activeItemIndex: 1,
			animationAction: 0
		}
	},
	components: {
		blRight, pageHeader
  	},

	  mounted(){

			// Карусель сотрудников

			let getPrev = document.getElementsByClassName('arrow-left'),              // Влево
				getNext = document.getElementsByClassName('arrow-right'),             // Вправо
				mainManagerImg = document.getElementsByClassName('main-sotrud-img'),  // Большое фото менеджера
				itemsContainer = document.querySelector('.sl-wrapper'),               // Контейнер с фото сотрудников в карусели
				dotsContainer = document.querySelector('.dots-container'),            // Контейнер с нижними полосками
				items = document.getElementsByClassName('sl-teammate'),               // Менеджеры в превью-карусели
				dots = '',                                                            // Нижние полоски
				lastItem = items.length - 2,                                          // Номер последнего элемента, после которого карусель не смещается
				itemsSlides = [],                                                     // Массив, в котором хранятся элементы и их ширина для дальнейшего смещения
				itemsDots = []                                                       // Массив, в котором хранятся точки и их ширина для дальнейшего смещения

				for (let i = 0; i < items.length; i++) {
					// Добавление точек
					i == this.activeItemIndex ? dots += '<div class="tr-bottom tr-active"></div>' : dots += '<div class="tr-bottom"></div>';
				}

				if (dotsContainer) dotsContainer.innerHTML = dots;

			let itemDots = document.getElementsByClassName('tr-bottom');

				for (let i = 0; i < items.length; i++) {
					itemsSlides[i] = items[i].offsetWidth + parseInt(getComputedStyle(items[i], true).marginRight);   // Ширина фото в карусели + Margin
					itemsDots[i] = itemDots[i].offsetWidth + parseInt(getComputedStyle(itemDots[i], true).marginRight);     // Ширина фото в карусели + Margin
				}

			// Установить ширину контейнера с фото

			if (itemsContainer) itemsContainer.style.left = 0;  // Установка изначальной позиции    
			if (dotsContainer) dotsContainer.style.left = 0;  // Установка изначальной позиции  

			// Следующий менеджер в карусели

			if (getNext[0]) {
				getNext[0].addEventListener('click', () => {

					if (this.activeItemIndex > lastItem) return false;

					itemsContainer.style.left = parseInt(itemsContainer.style.left) - itemsSlides[this.activeItemIndex] + 'px';  // Сдвигаем контейнер
					dotsContainer.style.left = parseInt(dotsContainer.style.left) - itemsDots[this.activeItemIndex] + 'px';      // Сдвигаем контейнер с точками

					this.activeItemIndex++;                              //Прибавляем активный элемент

					defineActiveItem(items, itemDots, this.activeItemIndex);
				});
			}

			// Предыдущий менеджер в карусели

			if (getPrev[0]) {
				getPrev[0].addEventListener('click', () => {

					if (this.activeItemIndex == 0) return false;

					itemsContainer.style.left = parseInt(itemsContainer.style.left) + itemsSlides[this.activeItemIndex] + 'px';  // Сдвигаем контейнер
					dotsContainer.style.left = parseInt(dotsContainer.style.left) + itemsDots[this.activeItemIndex] + 'px';  // Сдвигаем контейнер с точками

					this.activeItemIndex--;                              //Прибавляем активный элемент

					defineActiveItem(items, itemDots, this.activeItemIndex);
				});
			}

			// Нажатие на клавиатуре

			document.addEventListener('keydown', (event) => {
				if (event.code == 'ArrowLeft') {

					if (this.activeItemIndex == 0) return false;
					itemsContainer.style.left = parseInt(itemsContainer.style.left) + itemsSlides[this.activeItemIndex] + 'px';  // Сдвигаем контейнер
					dotsContainer.style.left = parseInt(dotsContainer.style.left) + itemsDots[this.activeItemIndex] + 'px';  // Сдвигаем контейнер с точками
					this.activeItemIndex--;                              //Прибавляем активный элемент
					defineActiveItem(items, itemDots, this.activeItemIndex);
				}
				if (event.code == 'ArrowRight') {

					if (this.activeItemIndex > lastItem) return false;
					itemsContainer.style.left = parseInt(itemsContainer.style.left) - itemsSlides[this.activeItemIndex] + 'px';  // Сдвигаем контейнер
					dotsContainer.style.left = parseInt(dotsContainer.style.left) - itemsDots[this.activeItemIndex] + 'px';      // Сдвигаем контейнер с точками
					this.activeItemIndex++;                              //Прибавляем активный элемент
					defineActiveItem(items, itemDots, this.activeItemIndex);
				}
			});

			//прокрутка

			if ($(window).width() > 850) {

				// Не Mozilla
				window.addEventListener('mousewheel', (e) => {

					if (this.animationAction > 0) return false
					this.animationStatus()

					if (this.wheelAction(e) > 0) {

						if (this.activeItemIndex == 0) return false;
						itemsContainer.style.left = parseInt(itemsContainer.style.left) + itemsSlides[this.activeItemIndex] + 'px';  // Сдвигаем контейнер
						dotsContainer.style.left = parseInt(dotsContainer.style.left) + itemsDots[this.activeItemIndex] + 'px';  // Сдвигаем контейнер с точками
						this.activeItemIndex--;                              //Прибавляем активный элемент
						defineActiveItem(items, itemDots, this.activeItemIndex);
					}
					else {
						if (this.activeItemIndex > lastItem) return false;
						itemsContainer.style.left = parseInt(itemsContainer.style.left) - itemsSlides[this.activeItemIndex] + 'px';  // Сдвигаем контейнер
						dotsContainer.style.left = parseInt(dotsContainer.style.left) - itemsDots[this.activeItemIndex] + 'px';      // Сдвигаем контейнер с точками
						this.activeItemIndex++;                              //Прибавляем активный элемент
						defineActiveItem(items, itemDots, this.activeItemIndex);
					}
				})
				// Mozilla
				
				window.addEventListener('DOMMouseScroll', (e) => {

					if (this.animationAction > 0) return false
					this.animationStatus()

					if (this.wheelAction(e) > 0) {

						if (this.activeItemIndex == 0) return false;
						itemsContainer.style.left = parseInt(itemsContainer.style.left) + itemsSlides[this.activeItemIndex] + 'px';  // Сдвигаем контейнер
						dotsContainer.style.left = parseInt(dotsContainer.style.left) + itemsDots[this.activeItemIndex] + 'px';  // Сдвигаем контейнер с точками
						this.activeItemIndex--;                              //Прибавляем активный элемент
						defineActiveItem(items, itemDots, this.activeItemIndex);
					}
					else {
						if (this.activeItemIndex > lastItem) return false;
						itemsContainer.style.left = parseInt(itemsContainer.style.left) - itemsSlides[this.activeItemIndex] + 'px';  // Сдвигаем контейнер
						dotsContainer.style.left = parseInt(dotsContainer.style.left) - itemsDots[this.activeItemIndex] + 'px';      // Сдвигаем контейнер с точками
						this.activeItemIndex++;                              //Прибавляем активный элемент
						defineActiveItem(items, itemDots, this.activeItemIndex);
					}
				})
			}
				//конец

				// Нажатие на менеджера

				for (let i = 0; i < items.length; i++){
					// Нажатие на портрет
					items[i].addEventListener('click', (e) => {

						let index = this.getArrayIndex(items, e)

							this.activeItemIndex = index
							defineActiveItem(items, itemDots, index)
							moveOnClick(index)
					});
					// Нажатие на красную точку
					itemDots[i].addEventListener('click', (e) => {

						let index = this.getArrayIndex(itemDots, e)

							this.activeItemIndex = index
							defineActiveItem(items, itemDots, index)
							moveOnClick(index)
				});
			}

			function moveOnClick(index) {

				let leftSlides = 0,
					leftDots = 0;
			
				for (let i = 0; i < index - 1; i++) {
					leftSlides += itemsSlides[i];
					leftDots += itemsDots[i];
				}
				if (index == 0) {
					leftSlides = -itemsSlides[1];   // Для первого слайда
					leftDots = -itemsDots[1];   // Для первого слайда
				}

				itemsContainer.style.left = -leftSlides + 'px';  // Сдвигаем контейнер
				dotsContainer.style.left = -leftDots + 'px';  // Сдвигаем контейнер
			}

			// Функция, которая делает активным элемент в массиве
			function defineActiveItem(slides, dots, index) {

				for (let i = 0; i < slides.length; i++) {
					slides[i].classList.remove('slide-user-active');
					dots[i].classList.remove('tr-active');
				}

				slides[index].classList.add('slide-user-active');
				document.getElementsByClassName('main-sotrud-img')[0].src = '/images/sotrud' + slides[index].src.slice(slides[index].src.lastIndexOf('/') + 1);
				document.querySelector('.h1-more').innerText = slides[index].getAttribute('data-name').toUpperCase()
				document.querySelector('.h3-more').innerText = slides[index].getAttribute('data-position').toUpperCase()
				dots[index].classList.add('tr-active');
			}
	  },
	  methods: {
		getArrayIndex(arr, event){
			for (let i = 0; i < arr.length; i++) {
				if (arr[i] == event.target) return i;
			}
		},
		animationStatus(){
			this.animationAction++
			setTimeout(() => {
				this.animationAction = 0
			}, 500)
		},
		wheelAction (e) {
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
	  }
}

</script>