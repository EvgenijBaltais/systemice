<template>
	<div class="wrapper service">
		<div class="bl-l fl-column">
			<div>
				<NuxtLink to = "/">
					<img src="@/assets/images/logo.png">
				</NuxtLink>
			</div>
			<div class="bl-menu-title">
				<span class="company-name">УСЛУГИ</span>
			</div>
			<div class="bl-pagination">
				<span class="active-page">02 </span>
				<span class="bl-page"> / 07</span>
			</div>
		</div>
		<div class="main mouse-scrolling-section">
			<pageHeader/>
			<div class="content-box">
				<div class="content-block-w scrolling-box" id = "scrolling-box">
					<div class="service-block">
						<div class="img-wrapper">
							<div class="service-img" :style="{backgroundImage: 'url(images/kt.jpg)'}"></div>
						</div>
						<div class="service-desc">
							<h1 class="h1">КЕЙТЕРИНГ</h1>
							<div class="line"></div>
							<div class="spy-left"></div>
							<div class="spy-top"></div>
							<div class="spy-right"></div>
							<div class="spy-bottom"></div>
							<div class="service-hover">
								<a href="" class="open-btn">Открыть</a>
							</div>
						</div>
						<p class="bl-desc">
							Мероприятия любого масштаба со вкусом, стилем и атмосферой. Лучшие event события Москвы и других городов.
						</p>
					</div>
					<div class="service-block">
						<div class="img-wrapper">
							<div class="service-img" :style="{backgroundImage: 'url(images/akk.jpg)'}"></div>
						</div>
						<div class="service-desc">
							<h1 class="h1">АККАУНТ-МЕНЕДЖЕР</h1>
							<div class="line"></div>
							<div class="spy-left"></div>
							<div class="spy-top"></div>
							<div class="spy-right"></div>
							<div class="spy-bottom"></div>
							<div class="service-hover">
								<a href="" class="open-btn">Открыть</a>
							</div>
						</div>
						<p class="bl-desc">
							работает с клиентами компании и обеспечивает их лояльность, выполнение всех необходимых клиенту задач, находит к каждому заказчику индивидуальный подход
						</p>
					</div>
					<div class="service-block">
						<div class="img-wrapper">
							<div class="service-img" :style="{backgroundImage: 'url(images/guids.jpg)'}"></div>
						</div>
						<div class="service-desc">
							<h1 class="h1">ВЕДУЩИЕ</h1>
							<div class="line"></div>
							<div class="spy-left"></div>
							<div class="spy-top"></div>
							<div class="spy-right"></div>
							<div class="spy-bottom"></div>
							<div class="service-hover">
								<a href="https://systemice.ru/guids/" target = "_blank" class="open-btn">Открыть</a>
							</div>
						</div>
						<p class="bl-desc">
							Мы подобрали для Вас лучших!
						</p>
					</div>
					<div class="service-block">
						<div class="img-wrapper">
							<div class="service-img" :style="{backgroundImage: 'url(images/cases.jpg)'}"></div>
						</div>
						<div class="service-desc">
							<h1 class="h1">КОРПОРАТИВНЫЕ КЕЙСЫ</h1>
							<div class="line"></div>
							<div class="spy-left"></div>
							<div class="spy-top"></div>
							<div class="spy-right"></div>
							<div class="spy-bottom"></div>
							<div class="service-hover">
								<a href="https://systemice.ru/corporate_cases/" target = "_blank" class="open-btn">Открыть</a>
							</div>
						</div>
						<p class="bl-desc">
							Здесь каждый найдет выгодное предложение для себя.
						</p>
					</div>
					<div class="service-block">
						<div class="img-wrapper">
							<div class="service-img" :style="{backgroundImage: 'url(images/online.jpg)'}"></div>
						</div>
						<div class="service-desc">
							<h1 class="h1">ОНЛАЙН-МЕРОПРИЯТИЯ</h1>
							<div class="line"></div>
							<div class="spy-left"></div>
							<div class="spy-top"></div>
							<div class="spy-right"></div>
							<div class="spy-bottom"></div>
							<div class="service-hover">
								<a href="https://systemice-stream.ru/" target = "_blank" class="open-btn">Открыть</a>
							</div>
						</div>
						<p class="bl-desc">
							Онлайн-мероприятия всех форматов. Более 500 проведенных мероприятий
						</p>
					</div>
					<div class="service-block">
						<div class="img-wrapper">
							<div class="service-img" :style="{backgroundImage: 'url(images/places.jpg)'}"></div>
						</div>
						<div class="service-desc">
							<h1 class="h1">ПОДБОР МЕСТ ПРОВЕДЕНИЯ</h1>
							<div class="line"></div>
							<div class="spy-left"></div>
							<div class="spy-top"></div>
							<div class="spy-right"></div>
							<div class="spy-bottom"></div>
							<div class="service-hover">
								<a href="https://systemice.ru/platforms/" target = "_blank" class="open-btn">Открыть</a>
							</div>
						</div>
						<p class="bl-desc">
							Мы гарантируем, что все площадки прошли через строгие критерии отбора.
						</p>
					</div>
					<div class="service-block">
						<div class="img-wrapper">
							<div class="service-img" :style="{backgroundImage: 'url(images/market.jpg)'}"></div>
						</div>
						<div class="service-desc">
							<h1 class="h1">ПОЗАБОТЬТЕСЬ О КЛИЕНТАХ (системайс маркет)</h1>
							<div class="line"></div>
							<div class="spy-left"></div>
							<div class="spy-top"></div>
							<div class="spy-right"></div>
							<div class="spy-bottom"></div>
							<div class="service-hover">
								<a href="https://system-market.ru/" target = "_blank" class="open-btn">Открыть</a>
							</div>
						</div>
						<p class="bl-desc">
							Это очень просто – нужно о них позаботиться прямо сейчас! Мы предлагаем сделать это с помощью наших подарочных наборов.
						</p>
					</div>
					<div class="service-block">
						<div class="img-wrapper">
							<div class="service-img" :style="{backgroundImage: 'url(images/teambuilding.jpg)'}"></div>
						</div>
						<div class="service-desc">
							<h1 class="h1">ТИМБИЛДИНГ</h1>
							<div class="line"></div>
							<div class="spy-left"></div>
							<div class="spy-top"></div>
							<div class="spy-right"></div>
							<div class="spy-bottom"></div>
							<div class="service-hover">
								<a href="http://www.sysevent.ru/" target = "_blank" class="open-btn">Открыть</a>
							</div>
						</div>
						<p class="bl-desc">
							#тимбилдинг #командообразование #квест #корпоративныйквест
						</p>
					</div>
				</div>
			</div>
			<div class="centered-block">
				<div class="bl-preview">
					<div class="item-dots item-service-dots"></div>
					<div class="arrow-left" @click = "scrollLeft"></div>
					<div class="arrow-right" @click = "scrollRight"></div>
				</div>
			</div>
			<div class="footer-mob">
				<div class="bl-pagination">
					<span class="active-page">02 </span>
					<span class="bl-page"> / 07</span>
				</div>
				<div class="bl-copyright">
					<!--Ⓒ2014 - <?=date('Y');?>-->
				</div>
			</div>
		</div>
		<blRight/>
	</div>
</template>

<script>

import blRight from '@/components/bl_right'
import pageHeader from '@/components/page_header'

export default {
	head() {
		return {
			title: 'Systemice - услуги компании',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Service page description'
				}
			]
		}
	},
	data(){
		return {
			animationAction: 0,
			activePage: 0,
			pages: 0,
			visibleSlides: 4
		}
	},
	components: {
		blRight, pageHeader
  	},
	methods: {

		// Функция для вычисления направления скролла мышью, если вверх то возвращает 1, если вниз то -1
		wheelAction (e) {
			let delta
				event = e || window.event;
				if (event.wheelDelta) {
					delta = event.wheelDelta / 120;
					if (window.opera) delta = -delta;
				}
				else if (event.detail) {
					delta = -event.detail / 3;
				}
				return delta
		},
		animationStatus(){
			this.animationAction++
			setTimeout(() => {
				this.animationAction = 0
			}, 1300)
		},
		onKeyDown(event){
			if (event.code == 'ArrowLeft' || event.code == 'ArrowRight') {
				this.changeActiveElement()
			}
		},
		scrollLeft() {
			if (this.animationAction > 0) return false
			this.animationStatus()

			this.changePageSlides('right')
			this.changeNavigationActiveItem(this.activePage)
		},
		scrollRight(){
			if (this.animationAction > 0) return false
			this.animationStatus()

			this.changePageSlides('left')
			this.changeNavigationActiveItem(this.activePage)
		},
		changePageSlides(direction) {

			let slides = document.querySelector('.scrolling-box').querySelectorAll('.service-block')

			// Скрыть все элементы

			for (let i = 0; i < slides.length; i++) {
				slides[i].classList.remove('scrolling-item')
			}

			// Определить куда листать

			// Если пролистывается вправо или влево (или вверх или вниз в случае со скроллингом)
			// Карусель берет все элементы на экране (в данном случае visibleSlides) и показывает другие visibleSlides
			// Индексы видимых элементов хранятся в массиве activeItems

			if (direction == 'left') {
				let show = 0
				// На последней странице
				if (this.activePage == this.pages - 1) {
					this.activePage = 0
					for (let i = 0; i < this.visibleSlides; i++) {
						slides[i] ? slides[i].classList.add('scrolling-item') : ''
					}
				}
				// На первой странице
				else if (this.activePage == 0) {
					this.activePage++
					for (let i = this.visibleSlides; i < this.visibleSlides * 2; i++) {
						slides[i] ? slides[i].classList.add('scrolling-item') : ''
					}
				}
				// На остальных страницах
				else {
					this.activePage++
					show = this.activePage * this.visibleSlides
					for (let i = show; i < show + this.visibleSlides; i++) {
						slides[i] ? slides[i].classList.add('scrolling-item') : ''
					}
				}
			}
			else if (direction == 'right') {
				// На первой странице
				if (this.activePage == 0) {
					this.activePage = this.pages - 1
					let slidesToShow = slides.length - this.activePage * this.visibleSlides
					for (let i = slides.length - slidesToShow; i < slides.length; i++) {
						slides[i] ? slides[i].classList.add('scrolling-item') : ''
					}
				}
				// На остальных страницах
				else {
					this.activePage--
					let startShow = this.activePage * this.visibleSlides
					for (let i = startShow; i < startShow + this.visibleSlides; i++) {
						slides[i] ? slides[i].classList.add('scrolling-item') : ''
					}
				}
			}
			else {
				return false
			}
		},
		changeNavigationActiveItem() {
			document.querySelector('.item-dots').querySelector('.tr-active').classList.remove('tr-active')
			document.querySelector('.item-dots').querySelectorAll('.tr-bottom')[this.activePage].classList.add('tr-active')
		},
		mouseScroll(e) {
			if (this.animationAction > 0) return false
			this.animationStatus()

			let direction = ''
			this.wheelAction(e) > 0 ? direction = 'right' : direction = 'left'

			this.changePageSlides(direction)
			this.changeNavigationActiveItem(this.activePage)
		}
	},
	mounted(){

		// Размер блока Услуг на планшете
		if (document.getElementById('scrolling-box') && document.getElementById('scrolling-box').querySelectorAll('.service-block').length > 0) {
			if (window.screen.width < 850 && window.screen.width > 630) {
				let width = 0;
				for (let i = 0; i < document.getElementById('scrolling-box').querySelectorAll('.service-block').length; i++){
					width += parseInt(document.getElementById('scrolling-box').querySelectorAll('.service-block')[i].clientWidth)
					width += parseInt(getComputedStyle(document.getElementById('scrolling-box').querySelectorAll('.service-block')[i])["margin-right"])
				}
				width += parseInt(document.getElementById('scrolling-box').querySelector('.service-block').clientWidth)
				width += parseInt(getComputedStyle(document.getElementById('scrolling-box').querySelector('.service-block'))["margin-right"])
				document.getElementById('scrolling-box').style.width = width / 2 + 'px'
			}
		}

		if (window.screen.width < 850) return false

		// Сколько всего блоков на странице, которые будут анимироваться и появляться

		let slides = document.querySelectorAll('.service-block'),
			dots = '',
			dotsContainer = document.querySelector('.item-dots');

		// Определить количество страниц и скрыть лишние слайды

		for (let i = 0; i < this.visibleSlides; i++) {
			slides[i].classList.add('scrolling-item')
		}

		// Добавление точек страниц
		// Если Элементов мало то удалить навигацию, если более visibleSlides то вывести количество страниц

		if (slides.length < this.visibleSlides) {
			document.querySelector('.bl-preview').remove()
		}
		else {
			this.pages = Math.ceil(slides.length / this.visibleSlides);
			for (let i = 0; i < this.pages; i++) {
				i == 0 ? dots += '<div class="tr-bottom tr-active"></div>' : dots += '<div class="tr-bottom"></div>';
			}
			if (dotsContainer) dotsContainer.innerHTML = dots;
		}

		// Промотка секций при скроллинге мышью

		// Не Mozilla
		window.addEventListener('mousewheel', this.mouseScroll)
		// Mozilla
		window.addEventListener('DOMMouseScroll', this.mouseScroll)
	},
	beforeDestroy() {
			
		// Не Mozilla
		window.removeEventListener('mousewheel', this.mouseScroll)

		// Mozilla
		window.removeEventListener('DOMMouseScroll', this.mouseScroll)
	}
}

</script>