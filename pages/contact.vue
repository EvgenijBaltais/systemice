<template>
	<div class="wrapper contact">
		<div class="bl-l fl-column">
			<div class = "main-logo-left">
				<mainLogo/>
			</div>
			<div class="bl-menu-title">
				<span class="company-name">КОНТАКТЫ</span>
			</div>
			<div class="bl-pagination">
				<span class="active-page">08 </span>
				<span class="bl-page"> / 08</span>
			</div>
		</div>
		<div class="main">
			<pageHeader/>
			<div class="content-box fixed-rightside-padding">
				<div class="contact-info">
					<h1 class="h1">КОНТАКТЫ</h1>
					<div class="line"></div>
					<p class="p-contact"><b>Наш адрес:</b><br>г. Москва, ул. Бауманская д. 6.</p>
					<p class="p-contact"><b>Телефон:</b><br> +7 (495) 215-24-80</p>
					<p class="p-contact"><b>Электропочта:</b><br> info@systemice.ru</p>
					<form class="contact-form" id = "contact-form" @submit.prevent = "checkForm">
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
						<img src="@/assets/images/icons/sheet.png"><span id = "copy-text" data-clipboard-text="55.775555, 37.674597">Скопировать координаты для навигатора копия</span>
					</div>
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
			</div>
			<div class="footer-mob">
				<div class="bl-pagination">
					<span class="active-page">08 </span>
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
import clipboardJS from 'clipboard'
import Inputmask from 'inputmask'
import ymaps from 'ymaps';

export default {
	head() {
		return {
			title: 'Systemice - наши контакты',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Contact page description'
				}
			]
		}
	},
	data(){
		return {
			name: '',
			phone: '',
			agreeTerms: 'yes',
			im: new Inputmask("+7 (999) 999-99-99")
		}
	},
	components: {
		blRight, pageHeader, mainLogo, copyright
  	},
	mounted(){

	/* Скопировать */

	if (document.getElementById('copy-text')) {
		let clipboard = new clipboardJS('#copy-text');

		clipboard.on('success', function(e) {
			document.getElementById('copy-text').innerText = 'Скопировано';
			setTimeout(function(){
				document.getElementById('copy-text').innerText = 'Скопировать координаты для навигатора копия';
			}, 1000)
		});
	}

	/* Скопировать, конец */

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

    $(document).mouseup(function (e){

        var div = $('.login-block');

        if (!div.is(e.target) 
            && div.has(e.target).length === 0) {
        	div.css('display','none');
			$('.btn-exit').removeClass('active');
        }

        var div2 = $('.other-event')

        if (!div2.is(e.target) 
            && div2.has(e.target).length === 0) {
        	div2.css('display','none')
			$('.more-portfolio').removeClass('active')
        }
    })

		/* Карты */

		ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
		  .then(maps => {
			const map = new maps.Map('map-block', {
			  center: [55.775555, 37.674597],
			  zoom: 12
			})
		

		  })
		  .catch(error => console.log('Failed to load Yandex Maps', error))

		/* Карты, конец */
	},

	methods: {

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

		}
	}
}

</script>