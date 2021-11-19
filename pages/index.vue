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
			</div>
			<div class="content-box services-main">
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

			<div class="content-box tenders-main">
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
							<div class="spy-left-btn-main spy-btn-red"></div>
							<div class="spy-top-btn-main spy-btn-red"></div>
							<div class="spy-right-btn-main spy-btn-red"></div>
							<div class="spy-bottom-btn-main spy-btn-red"></div>
							<p class = "tenders-important-text">Более 100 выигранных тендеров
								Оперативно и качественно готовим коммерческие предложения
							Работаем с небольшими компаниями и крупными корпорациями</p>
						</div>
						<NuxtLink to = "/tenders" class="button-box-main button-box-main-white">
							<span class = "button-box-main-title">Перейти на страницу "Тендеры"</span>
							<div class="spy-left-btn-main spy-btn-white"></div>
							<div class="spy-top-btn-main spy-btn-white"></div>
							<div class="spy-right-btn-main spy-btn-white"></div>
							<div class="spy-bottom-btn-main spy-btn-white"></div>
						</NuxtLink>
					</div>
				</div>
			</div>
			<div class="content-box content-box-main-portfolio">

				<div class = "main-portfolio-small">
					<h1 class="h1">ПОРТФОЛИО</h1>
					<div class="line"></div>
					<div class = "main-portfolio-s-block">
						<span>На странице "Портфолио" Вы найдете отчеты о проделанной работе. И убедитесь, что наша компания способна организовать мероприятия любой сложности!</span>
						<NuxtLink to = "/tenders" class="button-box-main button-box-main-red">
							<span class = "button-box-main-title">Перейти на страницу "Портфолио"</span>
							<div class="spy-left-btn-main spy-btn-red"></div>
							<div class="spy-top-btn-main spy-btn-red"></div>
							<div class="spy-right-btn-main spy-btn-red"></div>
							<div class="spy-bottom-btn-main spy-btn-red"></div>
						</NuxtLink>
					</div>
				</div>

				<div v-for = "(item, index) in portfolioData.slice(0, 4)"
				:key="item.title" :class="['sl-card', 'scrolling-portfolio-item', (index === 0 ? 'main-portfolio-big' : 'main-portfolio-small')]"
				:style="{backgroundImage: `url(${require('@/assets/images/portfolio/' + item.picsFolder + '/1.jpg')})`}">
				<NuxtLink :to = "{path: `/portfolio/${++index}`}">
					<div class="bg-hover">
						<div class="event-info">
							<span class="event-name">{{item.title}}</span>
						</div>
					</div>
				</NuxtLink>
			</div>
		</div>

		<div class="content-box partners-main">

			<div class = "centered-title">
				<div class = "h1-centered">
					<h1 class="h1">ПАРТНЕРЫ</h1>
					<div class="line"></div>
				</div>
			</div>

			<div class = "partner-carousel">
				<img class="partner-link-arrow partner-link-arrow-left" src="@/assets/images/icons/arr-left.svg" @click = "moveLeft">
				<img class="partner-link-arrow partner-link-arrow-right" src="@/assets/images/icons/arr-right.svg" @click = "moveRight">
				<div class = "partner-carousel-wrap glide">
					<div class = "partner-carousel-w glide__track" data-glide-el="track">	
						<div class="glide__slides">
							<div class="bl-partner bl-partner-carousel-item">	
								<img class="img-partner" src="@/assets/images/partners/1.png">
								<div class="spy-left"></div>
								<div class="spy-top"></div>
								<div class="spy-right"></div>
								<div class="spy-bottom"></div>
							</div>
							<div class="bl-partner bl-partner-carousel-item">	
								<img class="img-partner" src="@/assets/images/partners/2.png">
								<div class="spy-left"></div>
								<div class="spy-top"></div>
								<div class="spy-right"></div>
								<div class="spy-bottom"></div>
							</div>
							<div class="bl-partner bl-partner-carousel-item">	
								<img class="img-partner" src="@/assets/images/partners/3.png">
								<div class="spy-left"></div>
								<div class="spy-top"></div>
								<div class="spy-right"></div>
								<div class="spy-bottom"></div>
							</div>
							<div class="bl-partner bl-partner-carousel-item">	
								<img class="img-partner" src="@/assets/images/partners/4.png">
								<div class="spy-left"></div>
								<div class="spy-top"></div>
								<div class="spy-right"></div>
								<div class="spy-bottom"></div>
							</div>
							<div class="bl-partner bl-partner-carousel-item">	
								<img class="img-partner" src="@/assets/images/partners/5.png">
								<div class="spy-left"></div>
								<div class="spy-top"></div>
								<div class="spy-right"></div>
								<div class="spy-bottom"></div>
							</div>
							<div class="bl-partner bl-partner-carousel-item">	
								<img class="img-partner" src="@/assets/images/partners/6.png">
								<div class="spy-left"></div>
								<div class="spy-top"></div>
								<div class="spy-right"></div>
								<div class="spy-bottom"></div>
							</div>
							<div class="bl-partner bl-partner-carousel-item">	
								<img class="img-partner" src="@/assets/images/partners/7.png">
								<div class="spy-left"></div>
								<div class="spy-top"></div>
								<div class="spy-right"></div>
								<div class="spy-bottom"></div>
							</div>
							<div class="bl-partner bl-partner-carousel-item">	
								<img class="img-partner" src="@/assets/images/partners/8.png">
								<div class="spy-left"></div>
								<div class="spy-top"></div>
								<div class="spy-right"></div>
								<div class="spy-bottom"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="content-box contacts-wrapper">
			<div class="contact-info">
				<h1 class="h1">КОНТАКТЫ</h1>
				<div class="line"></div>
				<p class="p-contact"><b>Наш адрес:</b><br>г. Москва, ул. Бауманская д. 6.</p>
				<p class="p-contact"><b>Телефон:</b><br> +7 (495) 215-24-80</p>
				<p class="p-contact"><b>Электронная почта:</b><br> info@systemice.ru</p>
				<form class="contact-form" id = "contact-form" name = "contacts_form" @submit.prevent = "checkForm">
					<p>Заявка на обратный звонок</p>
					<div class="line"></div>
					<div class="form-line">
						<div class="input-box">
							<input type="text" name="name" class = "contact-name" placeholder="Ваше имя" v-model = "name">
							<div class="spy-left-input"></div>
							<div class="spy-top-input"></div>
							<div class="spy-right-input"></div>
							<div class="spy-bottom-input"></div>
						</div>
						<div class="input-box">
							<input type="text" name="phone" class = "contact-phone" placeholder="Телефон">
							<div class="spy-left-input"></div>
							<div class="spy-top-input"></div>
							<div class="spy-right-input"></div>
							<div class="spy-bottom-input"></div>
						</div>
					</div>
					<label class="checkbox-block">
						<input type="checkbox" name="" class="input-check" v-model="agreeTerms" true-value="yes" false-value="no">
						<span class="checkbox-style">
							<div class="spy-left"></div>
							<div class="spy-top"></div>
							<div class="spy-right"></div>
							<div class="spy-bottom"></div>
						</span>
						<span class = "i-agree">Я согласен на обработку персональных данных</span>
					</label>
					<div class="button-box">
						<input class="send-button" type="submit" value="Отправить">
						<div class="spy-left-btn"></div>
						<div class="spy-top-btn"></div>
						<div class="spy-right-btn"></div>
						<div class="spy-bottom-btn"></div>
					</div>
				</form>
			</div>
			<div class="contact-map">
				<div id="map-block"></div>
				<div class="copy-coordinat">
					<img src="@/assets/images/icons/sheet.png"><span id = "copy-text" data-clipboard-text="55.775555, 37.674597">Скопировать координаты для навигатора</span>
				</div>
				<div class="spy-left"></div>
				<div class="spy-top"></div>
				<div class="spy-right"></div>
				<div class="spy-bottom"></div>
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
import clipboardJS from 'clipboard'
import Inputmask from 'inputmask'
import ymaps from 'ymaps'
import axios from 'axios'

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
			portfolioData: this.$store.state.portfolioData,
			name: '',
			phone: '',
			agreeTerms: 'yes',
			im: new Inputmask("+7 (999) 999-99-99"),
			sendingForm: 0,
			glide: {}
		}
	},
	components: {
		blRight, pageHeader, mainLogo, copyright
	},

	methods: {
		moveRight(){

			this.glide.go('>')
		},
		moveLeft(){

			this.glide.go('<')
		},

		startVideo(event){

			event.target.style.backgroundImage = 'none'
			event.target.querySelector('iframe').style.visibility = "visible"
			event.target.querySelector('iframe').setAttribute('src', event.target.querySelector('iframe').getAttribute('data-src'))
		},
		checkForm(e){

			e.preventDefault()

			if (this.agreeTerms == 'no' || !e.target.querySelector('.contact-phone').inputmask.isComplete()) {

				if (this.agreeTerms == 'no') {
					document.querySelector('.i-agree').style = "color: red;"
				}
				if (!e.target.querySelector('.contact-phone').inputmask.isComplete()) {
					document.querySelector('.contact-phone').classList.add('input-box-wrong')
				}
				return false
			}

			this.sendForm(e.target)
		},

		sendForm(form){

			if (this.sendingForm != 0) return false

				this.sendingForm = 1

			axios.interceptors.request.use((req) => {
				form.querySelector('.send-button').value = "Отправка..."
				return req
			}
			)

			let bodyFormData = new FormData()
			bodyFormData.append('name', form.querySelector('.contact-name').value)
			bodyFormData.append('phone', form.querySelector('.contact-phone').value)
			bodyFormData.append('form_name', form.getAttribute('name'))

			axios.post('https://systemice.ru/say_online_send_test.php', bodyFormData, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			})
			.then(response => {

				if (!response.data || response.data == '') {
					form.querySelector('.tenders-send-input').value = "Ошибка!"
					return false
				}

				form.querySelector('.tenders-send-input').value = "Успешно!"
			})
		}
	},
	mounted(){


		/* Скопировать */

		if (document.getElementById('copy-text')) {
			let clipboard = new clipboardJS('#copy-text');

			clipboard.on('success', function(e) {
				document.getElementById('copy-text').innerText = 'Скопировано';
				setTimeout(function(){
					document.getElementById('copy-text').innerText = 'Скопировать координаты для навигатора';
				}, 1000)
			});
		}

		/* Скопировать, конец */

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

			// Карусель миниатюр

			this.glide = new Glide('.glide', {
				type: 'carousel',
				startAt: 1,
				perView: 3,
				gap: 0,
				focusAt: 'center',
				animationDuration: 500,
				animationTimingFunc: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
			})

			let glide = this.glide

			glide.mount()


		// Форма на странице Контакты

		let phones = document.getElementsByClassName("contact-phone");

		for (let i = 0; i < phones.length; i++) {
			this.im.mask(phones[i]);
		}

		for (let i = 0; i < phones.length; i++) {
			phones[i].addEventListener('keyup', function(){
				this.classList.remove('input-box-wrong');
			})
			phones[i].addEventListener('focus', function(){
				this.classList.remove('input-box-wrong');
			})
		}


		let label = document.getElementsByClassName('checkbox-block');
		for (let i = 0; i < label.length; i++) {
			label[i].addEventListener('click', function(){
				label[i].querySelector('.i-agree').style = "color: white;"
			})
		}

		/* Карты */

		let myMap, myPlacemark,
		koordinats = [55.776108388031815, 37.67544507980347],
		companyName = 'Systemice Hotel Group',
		balloonContent = 'ул. Бауманская д.6с2.<br>8 этаж. 804 офис'

		ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
		.then(maps => {

			myMap = new maps.Map('map-block', {
				center: koordinats,
				zoom: 12
			})
			
			myPlacemark = new maps.Placemark(koordinats, {
				hintContent: 'Systemice Hotel Group',
				balloonContent: 'ул. Бауманская д.6с2. Бизнес-центр Виктория Плаза. 8 этаж. 804 офис'
			})

			myMap.geoObjects.add(myPlacemark)
			myMap.setType('yandex#map')
			myMap.behaviors.disable('scrollZoom')
		})
		.catch(error => console.log('Failed to load Yandex Maps', error))

		/* Карты, конец */
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