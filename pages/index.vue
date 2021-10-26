<template>
<div id="waypoint-main" class="wrapper main-page waypoint">
	<div class="bl-l fl-column">
		<div>
			<NuxtLink to = "/">
				<img src="@/assets/images/logo.png">
			</NuxtLink>
		</div>
		<div class="bl-menu-title">
			<span class="company-name">SYSTEMICE</span>
		</div>
		<div class="bl-pagination">
			<span class="active-page">01 </span>
			<span class="bl-page"> / 08</span>
		</div>
	</div>
	<div class="main h-page">

		<pageHeader/>

		<div class="content-box video">
			<div class="video-box clearfix">
				<h2 class="h2">МЕРОПРИЯТИЕ НАЧИНАЕТСЯ С НАС</h2>
				<div class="video-container" @click = "startVideo($event)">
					<iframe id="YoutubeVideo" width="100%" height="100%" style = "display: block;margin: 0 auto;" data-src="https://www.youtube-nocookie.com/embed/iudxo0NaKNY?rel=0&fmt=18&html5=1&showinfo=0&autoplay=1" frameborder="0" allowfullscreen></iframe>
				</div>
				<p class="p-title">Видеопрезентация компании Systemice</p>
			</div>
			<div class="main-description clearfix">
				<h1 class="h1">КОРПОРАТИВНЫЕ МЕРОПРИЯТИЯ</h1>
				<div class="line"></div>
				<p class="bl-desc">
					Компания <strong>Systemice</strong> помогает провести презентации, переговоры, конференции, конгрессы, форумы и выставки. Наш конёк — конференции и семинары в Москве и Подмосковье. Назначаем вам куратора мероприятия. Он показывает отель или площадку, помогает с документами, встречает гостей из-за рубежа и сопровождает к месту события.
				</p>
			</div>
		</div>
		<div class="content-box map hidden-screen">
			<div class="agency-map">
				<h1 class="h1">НАМ ЕСТЬ ЧЕМ ГОРДИТЬСЯ</h1>
				<div class="line"></div>
				<div class="bl-info glide-a">
					<div class="info-left"></div>
					<div class="info-right"></div>
					<div class="bl-info-wrapper glide__track" data-glide-el="track">
						<ul class="glide__slides glide__slides-a">
							<li class="info-data-item glide__slide">
								<span> >15</span> лет
								<p>работаем в сфере<br>делового туризма</p>
							</li>
							<li class="info-data-item glide__slide info-active">
								<span>4</span> 
								<p>представительства<br> в городах России</p>
							</li>
							<li class="info-data-item glide__slide">
								<span>18</span>
								<p>стран<br> партнеров</p>
							</li>
							<li class="info-data-item glide__slide">
								<span>68</span>
								<p>штатных<br> сотрудников</p>
							</li>
							<li class="info-data-item glide__slide">
								<span> >500</span>
								<p>отелей на<br> эксклюзивных<br> условиях</p>
							</li>
							<li class="info-data-item glide__slide">
								<span> >827</span>
								<p>реализованных<br> проектов</p>
							</li>
							<li class="info-data-item glide__slide">
								<span> >367</span>
								<p>надежных<br> подрядчиков<br> по всему миру</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="map-bg">
				<div class="city">
					<span class="spb"><i class="fa fa-map-marker fa-2" aria-hidden="true"></i> Caнкт-Петербург</span>
					<span class="sochi"><i class="fa fa-map-marker fa-2" aria-hidden="true"></i> Cочи</span>
					<span class="tula"><i class="fa fa-map-marker fa-2" aria-hidden="true"></i> Тула</span>
					<span class="msk"><i class="fa fa-map-marker fa-2" aria-hidden="true"></i> Москва</span>
				</div>
			</div>
		</div>
		<div class="bl-preview">
			<div class="preview-container">
				<div class="spy-left"></div>
				<div class="spy-top"></div>
				<div class="spy-right"></div>
				<div class="spy-bottom"></div>
				<img class="link-arrow dop-arrow-right" src="@/assets/images/icons/arrow-right.png">
				<div class = "sl-wrapper-shadow">
					<div class = "sl-wrapper">
						<img src = "@/assets/images/m1.png" class="sl-teammate preview-item preview-item-first prev-page-show slide-user-active">
						<img src = "@/assets/images/m2.png" class="sl-teammate preview-item preview-item-last next-page-show">
					</div>
				</div>
			</div>
			<div class = "item-dots">
				<div class = "dots-container clearfix">
					<div class="tr-bottom prev-page-show tr-active"></div>
					<div class="tr-bottom next-page-show"></div>
				</div>
			</div>
			<div class="arrow-left prev-page-show" @click = "changeActiveElement"></div>
			<div class="arrow-right next-page-show" @click = "changeActiveElement"></div>
		</div>
		<div class="footer-mob">
			<div class="bl-pagination">
				<span class="active-page">01 </span>
				<span class="bl-page"> / 08</span>
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
	import Glide from '@glidejs/glide'

	export default {
		head() {
			return {
				title: 'Systemice - главная страница',
				script:[],
				meta: [
					{
						hid: 'description',
						name: 'description',
						content: 'Home page description'
					}
				]
			}
		},
		data(){
			return {
				animationAction: 0
			}
		},
		components: {
			blRight, pageHeader
		},

		methods: {

			startVideo(event){

				event.target.style.backgroundImage = 'none'
				event.target.querySelector('iframe').style.visibility = "visible"
				event.target.querySelector('iframe').setAttribute('src', event.target.querySelector('iframe').getAttribute('data-src'))
			},

			changeActiveElement(e) {

			if (this.animationAction || e && e.target.classList.contains('slide-user-active')) return false

			let carouselImg = document.getElementsByClassName('sl-teammate'),
				content = document.getElementsByClassName('content-box'),
				dot = document.getElementsByClassName('tr-bottom')

				for (let i = 0; i < content.length; i++) {
					
					if (content[i].classList.contains('hidden-screen')) {
						content[i].classList.remove('hidden-screen');
						content[i].classList.add('visible-screen');
					}
					else{
						content[i].classList.add('hidden-screen');
						content[i].classList.remove('visible-screen');
					}
					
					dot[i].classList.contains('tr-active') ? dot[i].classList.remove('tr-active') : dot[i].classList.add('tr-active');
					carouselImg[i].classList.contains('slide-user-active') ? carouselImg[i].classList.remove('slide-user-active') : carouselImg[i].classList.add('slide-user-active'); 
				} 

				this.animationStatus()
			},
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
			onKeyDown(event){
				if (event.code == 'ArrowLeft' || event.code == 'ArrowRight') {
					this.changeActiveElement()
				}
			},
			animationStatus(){
				this.animationAction++
				setTimeout(() => {
					this.animationAction = 0
				}, 400)
			}
		},
		mounted(){

			// Карусель главного экрана

			document.addEventListener('keydown', this.onKeyDown)

			document.querySelector('.next-page-show').addEventListener('click', this.changeActiveElement)
			document.querySelector('.prev-page-show').addEventListener('click', this.changeActiveElement)

			//прокрутка
			if (window.screen.width > 630) {

				// Промотка секций при скроллинге мышью

				// Не Mozilla
				//window.addEventListener('mousewheel', this.changeActiveElement)

				// Mozilla
				//window.addEventListener('DOMMouseScroll', this.changeActiveElement)

				//window.addEventListener("touchmove", this.changeActiveElement);

			}
			//конец

			// Карусель glide js для информации рядом с картой

			let glide_a = new Glide('.glide-a', {
				type: 'carousel',
				startAt: 1,
				perView: 1,
				gap: 5,
				breakpoints: {
					800: {
						perView: 1
					},
					480: {
						perView: 1,
						gap: 20
					}
				}
			})
    
			if (window.screen.width < 1101) {
				glide_a.mount()
			}
		},
		beforeDestroy() {
			
			document.removeEventListener('keydown', this.onKeyDown)

			document.querySelector('.next-page-show').removeEventListener('click', this.changeActiveElement)
			document.querySelector('.prev-page-show').removeEventListener('click', this.changeActiveElement)


			// Не Mozilla
			//window.removeEventListener('mousewheel', this.changeActiveElement)

			// Mozilla
			//window.removeEventListener('DOMMouseScroll', this.changeActiveElement)
		}
}
</script>