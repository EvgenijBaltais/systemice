<template>
<div id="waypoint-main" class="wrapper main-page waypoint">
<div class="bl-l fl-column">
<div class = "main-logo-left">
	<mainLogo/>
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
<div class="content-box map">
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
	<div class="map-bg"></div>
</div>
<div class="content-box">
	<div class = "to-services-w">
		<h1 class="h1">УСЛУГИ</h1>
		<div class="line"></div>
		<div class = "main-s">

			<div class="main-s__item">
				
				<div class = "services-pic services-pic-1"></div>
				<div class = "services-content"></div>
			</div>

	<div class = "service-desc-w">
		<div class="service-desc">
			<h1 class="h1">Пост-ковидные мероприятия</h1>
			<div class="line"></div>
			<div class="spy-left"></div>
			<div class="spy-top"></div>
			<div class="spy-right"></div>
			<div class="spy-bottom"></div>
			<div class="service-hover">
				<a href="https://systemice-stream.ru/post-covidnie-meropriyatiya" target="_blank" class="open-btn">Открыть</a>
			</div>
		</div>
	</div>
	<p class="bl-desc">
	Рекомендации по проведению мероприятий в пост-ковидный период
	</p>
	</div>
		</div>
		<!--
		<div class = "to-services">
			<NuxtLink to = "/service" class = "go-to-services">Перейти к услугам</NuxtLink>
			<div class="spy-left-btn"></div>
			<div class="spy-bottom-btn"></div>
			<div class="spy-right-btn"></div>
			<div class="spy-top-btn"></div>
		</div>
		-->
	</div>
</div>
<div class="footer-mob">
	<div class="bl-pagination">
		<span class="active-page">01 </span>
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

	}
},
components: {
	blRight, pageHeader, mainLogo, copyright
},

methods: {

	startVideo(event){

		event.target.style.backgroundImage = 'none'
		event.target.querySelector('iframe').style.visibility = "visible"
		event.target.querySelector('iframe').setAttribute('src', event.target.querySelector('iframe').getAttribute('data-src'))
	}
},
mounted(){


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
}
}
</script>