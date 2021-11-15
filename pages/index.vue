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
				<!--<div class="map-bg"></div>-->



			</div>
			<div class="content-box">
				<h1 class="h1">УСЛУГИ</h1>
				<div class="line"></div>
				<div class = "main-s">

					<div class="service-block">
						<div class="img-wrapper">
							<div
							class="service-img"
							:style="{
								backgroundImage: `url(${require('../assets/images/business-travel.jpg')})`,
							}"
							></div>
						</div>
						<div class = "service-desc-w">
							<div class="service-desc">
								<h1 class="h1">Business Travel</h1>
								<div class="line"></div>
								<div class="spy-left"></div>
								<div class="spy-top"></div>
								<div class="spy-right"></div>
								<div class="spy-bottom"></div>
								<div class="service-hover">
									<a href="https://systemice-business.ru/" target="_blank" class="open-btn"
									>Открыть</a
									>
								</div>
							</div>
							<p class="bl-desc">
								Подразделение Systemice Group, предоставляющее комплексное обслуживание
								корпоративным клиентам и госучреждениям.
							</p>
						</div>
					</div>

					<div class="service-block">
						<div class="img-wrapper">
							<div
							class="service-img"
							:style="{
								backgroundImage: `url(${require('../assets/images/cases.jpg')})`,
							}"
							></div>
						</div>
						<div class = "service-desc-w">
							<div class="service-desc">
								<h1 class="h1">КОРПОРАТИВНЫЕ КЕЙСЫ</h1>
								<div class="line"></div>
								<div class="spy-left"></div>
								<div class="spy-top"></div>
								<div class="spy-right"></div>
								<div class="spy-bottom"></div>
								<div class="service-hover">
									<a
									href="https://systemice.ru/corporate_cases/"
									target="_blank"
									class="open-btn"
									>Открыть</a
									>
								</div>
							</div>
							<p class="bl-desc">Здесь каждый найдет выгодное предложение для себя.</p>
						</div>
					</div>

					<div class="service-block">
						<div class="img-wrapper">
							<div
							class="service-img"
							:style="{
								backgroundImage: `url(${require('../assets/images/online.jpg')})`,
							}"
							></div>
						</div>
						<div class = "service-desc-w">
							<div class="service-desc">
								<h1 class="h1">ОНЛАЙН-МЕРОПРИЯТИЯ</h1>
								<div class="line"></div>
								<div class="spy-left"></div>
								<div class="spy-top"></div>
								<div class="spy-right"></div>
								<div class="spy-bottom"></div>
								<div class="service-hover">
									<a href="https://systemice-stream.ru/" target="_blank" class="open-btn"
									>Открыть</a
									>
								</div>
							</div>
							<p class="bl-desc">
								Онлайн-мероприятия всех форматов. Более 500 проведенных мероприятий
							</p>
						</div>
					</div>
					<div class="service-block-btns-w">
						<span>Наша компания предоставляет огромный спектр услуг для корпоративных клиентов. Мы уже много лет организовываем мероприятия любых форматов, масштабов и любой сложности. 
						Вы можете ознакомиться с основными направлениями нашей компании или оставить заявку и специалист Systemice Group поможет с реализацией поставленной задачей.</span>

						<div class = "service-block-btns">

							<div class="button-box-main button-box-main-red">
								<span class = "button-box-main-title">Перейти к остальным услугам</span>
								<div class="spy-left-btn-main spy-btn-red"></div>
								<div class="spy-top-btn-main spy-btn-red"></div>
								<div class="spy-right-btn-main spy-btn-red"></div>
								<div class="spy-bottom-btn-main spy-btn-red"></div>
							</div>
							<div class="button-box-main button-box-main-white">
								<span class = "button-box-main-title">Заявка для обратной связи</span>
								<div class="spy-left-btn-main spy-btn-white"></div>
								<div class="spy-top-btn-main spy-btn-white"></div>
								<div class="spy-right-btn-main spy-btn-white"></div>
								<div class="spy-bottom-btn-main spy-btn-white"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="content-box">
				<div class = "centered-title">
					<div class = "h1-centered">
						<h1 class="h1">ТЕНДЕРЫ</h1>
						<div class="line"></div>
					</div>
				</div>

				<div class="tenders-list-w">
					<div class = "tenders-list-first">
						
						<ul class = "tenders-list">
							<li class = "tenders-item">Более 100 выигранных тендеров;</li>
							<li class = "tenders-item">Работаем с небольшими компаниями и крупными корпорациями;</li>
							<li class = "tenders-item">Имеем всю необходимую документацию для участия в тендерных закупках;</li>
							<li class = "tenders-item">Оперативно и качественно готовим коммерческие предложения;</li>
							<li class = "tenders-item">Участвуем как в разовых торгах, так и в тендерах на абонентское годовое обслуживание;</li>
							<li class = "tenders-item">Зачастую включаем в договор пункт о гарантии лучшей цены на рынке.</li>
						</ul>
					</div>

					<div class = "tenders-list-second">
						<div class = "tenders-important">
							
							<p class = "tenders-important-text">Более 100 выигранных тендеров
								Оперативно и качественно готовим коммерческие предложения
							Работаем с небольшими компаниями и крупными корпорациями</p>
						</div>

						<div class="button-box-main button-box-main-white">
							<span class = "button-box-main-title">Перейти на страницу "Тендеры"</span>
							<div class="spy-left-btn-main spy-btn-white"></div>
							<div class="spy-top-btn-main spy-btn-white"></div>
							<div class="spy-right-btn-main spy-btn-white"></div>
							<div class="spy-bottom-btn-main spy-btn-white"></div>
						</div>
					</div>
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


			// svg
			/*window.addEventListener('DOMContentLoaded', (event) => {
				document.querySelector('.sochi').addEventListener('click', function(){

					alert('sochi')
				})
			});*/
		}
	}
	</script>

	<style>

	/* Секция Услуги на Главной */


	.spy-left-btn-main {

		position: absolute;
		bottom: 0;
		top: auto;
		left: 0;
		height: 35px;
		width: 1px;
	} 

	.spy-bottom-btn-main {
		position: absolute;
		bottom: 0;
		left: 0;
		height: 1px;
		width: 65%;
	}

	.spy-right-btn-main {
		position: absolute;
		top: 0;
		right: 0;
		height: 35px;
		width: 1px;
	}

	.spy-top-btn-main {
		position: absolute;
		top: 0;
		right: 0;
		height: 1px;
		width: 65%;
	}

	.button-box-main {
		cursor: pointer;
	}

	.spy-btn-red {
		background-color: #FF0000;
	}

	.spy-btn-white {
		background-color: rgb(255, 255, 255);
	}

	/* Секция Услуги на Главной, конец */

	</style>