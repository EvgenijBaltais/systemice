<template>

<!--
<!DOCTYPE html>
<html>
<head>
	<title>Systemice</title>
	<script src="plugins/imakewebthings-waypoints/lib/noframework.waypoints.min.js"></script>
	<script type="text/javascript" src="plugins/lightcase-2.5.0/src/js/lightcase.js"></script>
	<link rel="stylesheet" href="plugins/lightcase-2.5.0/src/css/lightcase.css">
	<script type="text/javascript" src="js/script.js"></script>
	<script type="text/javascript" src="js/main-carousel.js"></script>
	<script type="text/javascript" src="js/map-carousel.js"></script>
</head>

<body>
-->
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
			<span class="bl-page"> / 07</span>
		</div>
	</div>
	<div class="main h-page">

		<pageHeader/>

		<div class="content-box video">
			<div class="video-box clearfix">
				<h2 class="h2">МЕРОПРИЯТИЕ НАЧИНАЕТСЯ С НАС</h2>
				<div class="video-container">
					<div class="bg-btn"></div>
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
				<div class="bl-info">
					<div class="info-left"></div>
					<div class="info-right"></div>
					<div class="bl-info-wrapper">
						<div class="info-data-item first">
							<span> >15</span> лет
							<p>работаем в сфере<br>делового туризма</p>
						</div>
						<div class="info-data-item info-active second">
							<span>4</span> 
							<p>представительства<br> в городах России</p>
						</div>
						<div class="info-data-item third">
							<span>18</span>
							<p>стран<br> партнеров</p>
						</div>
						<div class="info-data-item">
							<span>68</span>
							<p>штатных<br> сотрудников</p>
						</div>
						<div class="info-data-item">
							<span> >500</span>
							<p>отелей на<br> эксклюзивных<br> условиях</p>
						</div>
						<div class="info-data-item">
							<span> >827</span>
							<p>реализованных<br> проектов</p>
						</div>
						<div class="info-data-item">
							<span> >367</span>
							<p>надежных<br> подрядчиков<br> по всему миру</p>
						</div>
					</div>
				</div>
			</div>
			<div class="map-bg">
				<div class="sity">
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
				<img class="link-arrow dop-arrow-right" src="@/assets/images/arrow-right.png">
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
		head() {
			return {
				title: 'Systemice - главная страница',
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
			}
		},
		components: {
			blRight, pageHeader
		},

		methods: {
			changeActiveElement() {

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
			}
		},
		mounted(){

				// Карусель главного экрана

				document.addEventListener('keydown', this.onKeyDown)

				//прокрутка
				if (window.screen.width > 630) {

					// Промотка секций при скроллинге мышью

					// Не Mozilla
					window.addEventListener('mousewheel', this.changeActiveElement)

					// Mozilla
					window.addEventListener('DOMMouseScroll', this.changeActiveElement)
				}
				//конец
		},
		beforeDestroy() {
			
			document.removeEventListener('keydown', this.onKeyDown)

			// Не Mozilla
			window.removeEventListener('mousewheel', this.changeActiveElement)

			// Mozilla
			window.removeEventListener('DOMMouseScroll', this.changeActiveElement)
		}
}
</script>