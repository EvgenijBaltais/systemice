<template>
	<div class="wrapper partner">
		<div class="bl-l fl-column">
			<div class = "main-logo-left">
				<mainLogo/>
			</div>
			<div class="bl-menu-title">
				<span class="company-name">ПАРТНЕРЫ</span>
			</div>
			<div class="bl-pagination">
				<span class="active-page">06 </span>
				<span class="bl-page"> / 08</span>
			</div>
		</div>
		<div class="main" id = "partner-box">
			<pageHeader/>
			<div class="content-box content-slide partners-slides scrolling-box" id = "partners-slider">
				<div class="bl-partner">	
					<img class="img-partner" src="@/assets/images/partners/1.png">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/2.png">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/3.png">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/4.png">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/5.png">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/6.png">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/7.png">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/8.png">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
			</div>
			<div class="bl-preview">
				<div class="item-dots item-service-dots"></div>
				<a class="arrow-left"></a>
				<a class="arrow-right"></a>
			</div>
			<div class="footer-mob">
				<div class="bl-pagination">
					<span class="active-page">06 </span>
					<span class="bl-page"> / 08</span>
				</div>
				<copyright/>
			</div>
		</div>
		<blRight/>
	</div>
</template>

<script>

import blRight from '@/components/bl_right'
import mainLogo from '@/components/main_logo'
import copyright from '@/components/copyright'
import pageHeader from '@/components/page_header'

export default {
	head() {
		return {
			title: 'Systemice - партнеры компании',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Partners page description'
				}
			]
		}
	},
	data(){
		return {
			animationAction: 0,
			activePage: 0,
			pages: 0,
			visibleSlides: 8
		}
	},
	components: {
		blRight, pageHeader, mainLogo, copyright
  	},
	methods: {
		animationStatus(){
			this.animationAction++
			setTimeout(() => {
				this.animationAction = 0
			}, 1300)
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
		},
		changeNavigationActiveItem(activePage) {
			document.querySelector('.item-dots').querySelector('.tr-active').classList.remove('tr-active')
			document.querySelector('.item-dots').querySelectorAll('.tr-bottom')[this.activePage].classList.add('tr-active')
		},
		changePageSlides(direction) {

			let slides = document.querySelector('.scrolling-box').querySelectorAll('.bl-partner')

			// Скрыть все элементы

			for (let i = 0; i < slides.length; i++) {
				slides[i].classList.remove('partner-scrolling-item')
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
						slides[i] ? slides[i].classList.add('partner-scrolling-item') : ''
					}
				}
				// На первой странице
				else if (this.activePage == 0) {
					this.activePage++
					for (let i = this.visibleSlides; i < this.visibleSlides * 2; i++) {
						slides[i] ? slides[i].classList.add('partner-scrolling-item') : ''
					}
				}
				// На остальных страницах
				else {
					this.activePage++
					show = this.activePage * this.visibleSlides
					for (let i = show; i < show + this.visibleSlides; i++) {
						slides[i] ? slides[i].classList.add('partner-scrolling-item') : ''
					}
				}
			}
			else if (direction == 'right') {
				// На первой странице
				if (this.activePage == 0) {
					this.activePage = this.pages - 1
					let slidesToShow = slides.length - this.activePage * this.visibleSlides
					for (let i = slides.length - slidesToShow; i < slides.length; i++) {
						slides[i] ? slides[i].classList.add('partner-scrolling-item') : ''
					}
				}
				// На остальных страницах
				else {
					this.activePage--
					let startShow = this.activePage * this.visibleSlides
					for (let i = startShow; i < startShow + this.visibleSlides; i++) {
						slides[i] ? slides[i].classList.add('partner-scrolling-item') : ''
					}
				}
			}
			else {
				return false
			}
		},
		clickChange(){
			if (this.animationAction > 0) return false
			this.animationStatus

			this.changePageSlides('right')
			this.changeNavigationActiveItem(this.activePage)
		},
		mouseScroll(e){
			if (this.animationAction > 0) return false
			this.animationStatus

			let direction = ''
			this.wheelAction(e) > 0 ? direction = 'right' : direction = 'left'

			this.changePageSlides(direction)
			this.changeNavigationActiveItem(this.activePage)
		}
	},
	  mounted() {

			if (window.screen.width < 850) return false

			if (!document.getElementById('partner-box')) return false

			const animationNavigation = document.querySelector('.item-dots')

			// Сколько всего блоков на странице, которые будут анимироваться и появляться

			let slides = document.querySelectorAll('.bl-partner'),
				dots = '',
				dotsContainer = document.querySelector('.item-dots')

			// Определить количество страниц и скрыть лишние слайды

			for (let i = 0; i < this.visibleSlides; i++) {
				slides[i].classList.add('partner-scrolling-item')
			}

			// Добавление точек страниц
			// Если Элементов мало то удалить навигацию, если более visibleSlides то вывести количество страниц

			if (slides.length < this.visibleSlides) {
				document.querySelector('.bl-preview').remove()
			}
			else {
				this.pages = Math.ceil(slides.length / this.visibleSlides)
				for (let i = 0; i < this.pages; i++) {
					i == 0 ? dots += '<div class="tr-bottom tr-active"></div>' : dots += '<div class="tr-bottom"></div>'
				}
				if (dotsContainer) dotsContainer.innerHTML = dots
			}

			document.querySelector('.arrow-right').addEventListener('click', this.clickChange)
			document.querySelector('.arrow-left').addEventListener('click', this.clickChange)

			// Промотка секций при скроллинге мышью

			// Не Mozilla
			window.addEventListener('mousewheel', this.mouseScroll)
			// Mozilla
			window.addEventListener('DOMMouseScroll', this.mouseScroll)
	},
	beforeDestroy() {

		document.querySelector('.arrow-right').removeEventListener('click', this.clickChange)
		document.querySelector('.arrow-left').removeEventListener('click', this.clickChange)

		// Не Mozilla
		window.removeEventListener('mousewheel', this.mouseScroll)

		// Mozilla
		window.removeEventListener('DOMMouseScroll', this.mouseScroll)
	}
}

</script>