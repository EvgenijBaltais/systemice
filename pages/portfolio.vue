<template>
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
				<span class="active-page">04 </span>
				<span class="bl-page"> / 08</span>
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
						<div class="sl-card sl-box-1" :style="{backgroundImage: 'url(/images/conf1.jpg)'}">
							<NuxtLink to = "portfolio1/">
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
								</div>
							</NuxtLink>
						</div>
						<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(/images/conf.jpg)'}">
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
						<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(/images/conf.jpg)'}">
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
						<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(/images/conf.jpg)'}">
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
						<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(/images/conf.jpg)'}">
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
						<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(/images/conf.jpg)'}">
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
					<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(/images/conf.jpg)'}">
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
					<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(/images/conf.jpg)'}">
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
						<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(/images/conf.jpg)'}">
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
						<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(/images/conf.jpg)'}">
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
						<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(/images/conf.jpg)'}">
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
						<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(/images/conf.jpg)'}">
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
					<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(/images/conf.jpg)'}">
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
					<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(/images/conf.jpg)'}">
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
						<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(/images/conf.jpg)'}">
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
						<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(/images/conf.jpg)'}">
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
						<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(/images/conf.jpg)'}">
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
						<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(/images/conf.jpg)'}">
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
					<div class="sl-card sl-box-2" :style="{backgroundImage: 'url(/images/conf.jpg)'}">
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
</template>

<script>

import blRight from '@/components/bl_right'
import pageHeader from '@/components/page_header'

export default {
	head() {
		return {
			title: 'Systemice - портфолио компании',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Portfolio page description'
				}
			]
		}
	},
	data(){
		return {
			animationAction: 0,
			activePage: 0,
			dots: '',
			visibleSlides: 6,
			pages: 0
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

			// Сколько всего блоков на странице, которые будут анимироваться и появляться

			let slides = document.querySelectorAll('.sl-card'),
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
				this.pages = Math.ceil((slides.length - 5) / this.visibleSlides + 1);
				for (let i = 0; i < this.pages; i++) {
					i == 0 ? this.dots += '<div class="tr-bottom tr-active"></div>' : this.dots += '<div class="tr-bottom"></div>';
				}
				if (dotsContainer) dotsContainer.innerHTML = this.dots;
			}

			// Вправо

			document.querySelector('.arrow-right').addEventListener('click', this.moveLeft)

			// Влево

			document.querySelector('.arrow-left').addEventListener('click', this.moveRight)

			// Промотка секций при скроллинге мышью

			// Не Mozilla
			window.addEventListener('mousewheel', this.mouseScroll)

			// Mozilla
			window.addEventListener('DOMMouseScroll', this.mouseScroll)
	},
	methods: {
		moveRight() {

			if (this.animationAction > 0) return false
			this.animationStatus()

			this.changePageSlides('right')
			this.changeNavigationActiveItem()
		},
		moveLeft() {
			if (this.animationAction > 0) return false
			this.animationStatus()

			this.changePageSlides('left')
			this.changeNavigationActiveItem()
		},
		changePageSlides(direction) {

			let slides = document.querySelectorAll('.sl-card')

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
				if (this.activePage == this.pages - 1) {
					this.activePage = 0
					for (let i = 0; i < 5; i++) {
						slides[i] ? slides[i].classList.add('scrolling-portfolio-item') : ''
					}
				}
				// На первой странице
				else if (this.activePage == 0) {
					this.activePage++
					for (let i = 5; i < 11; i++) {
						slides[i] ? slides[i].classList.add('scrolling-portfolio-item') : ''
					}
				}
				// На остальных страницах
				else {
					this.activePage++
					show += (this.activePage - 1) * this.visibleSlides
					for (let i = show; i < show + this.visibleSlides; i++) {
						slides[i] ? slides[i].classList.add('scrolling-portfolio-item') : ''
					}
				}
			}
			else if (direction == 'right') {
				// На первой странице
				if (this.activePage == 0) {
					this.activePage = this.pages - 1
					let slidesToShow = slides.length - (this.activePage * this.visibleSlides - 1)
					for (let i = slides.length - slidesToShow; i < slides.length; i++) {
						slides[i] ? slides[i].classList.add('scrolling-portfolio-item') : ''
					}
				}
				// На остальных страницах
				else {
					this.activePage--
					let startShow = (this.activePage) * this.visibleSlides - 1
					for (let i = startShow; i < startShow + this.visibleSlides; i++) {
						slides[i] ? slides[i].classList.add('scrolling-portfolio-item') : ''
					}
				}
			}
			else {
				return false
			}
		},
		mouseScroll() {
			if (this.animationAction > 0) return false
			this.animationStatus()

			let direction = ''
			this.wheelAction > 0 ? direction = 'right' : direction = 'left'

			this.changePageSlides(direction)
			this.changeNavigationActiveItem(this.activePage)
		},
		changeNavigationActiveItem() {
			document.querySelector('.item-dots').querySelector('.tr-active').classList.remove('tr-active')
			document.querySelector('.item-dots').querySelectorAll('.tr-bottom')[this.activePage].classList.add('tr-active')
		},
		animationStatus(){
			this.animationAction++
			setTimeout(() => {
				this.animationAction = 0
			}, 1300)
		},
		wheelAction () {
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
	},
	beforeDestroy() {

		document.querySelector('.arrow-right').removeEventListener('click', this.moveLeft)

		// Влево

		document.querySelector('.arrow-left').removeEventListener('click', this.moveRight)

		// Промотка секций при скроллинге мышью

		// Не Mozilla
		window.removeEventListener('mousewheel', this.mouseScroll)

		// Mozilla
		window.removeEventListener('DOMMouseScroll', this.mouseScroll)
	}
}

</script>