<template>
	<div class="wrapper tenders">

		<div class="bl-l fl-column">
			<div class = "main-logo-left">
				<mainLogo/>
			</div>
			<div class="bl-menu-title">
				<span class="company-name">SYSTEMICE</span>
			</div>
			<div class="bl-pagination">
				<span class="active-page">03 </span>
				<span class="bl-page"> / 08</span>
			</div>
		</div>
		<div class="main tenders-main">
			<pageHeader/>

			<div class="content-box tenders-wrapper">

				<div class = "tenders-left">

					<p class = "tenders-title-huge">Тендеры</p>

					<ul class = "tenders-list">
						<li class = "tenders-item">Более 100 выигранных тендеров;</li>
						<li class = "tenders-item">Работаем с небольшими компаниями и крупными корпорациями;</li>
						<li class = "tenders-item">Имеем всю необходимую документацию для участия в тендерных закупках;</li>
						<li class = "tenders-item">Оперативно и качественно готовим коммерческие предложения;</li>
						<li class = "tenders-item">Участвуем как в разовых торгах, так и в тендерах на абонентское годовое обслуживание;</li>
						<li class = "tenders-item">Зачастую включаем в договор пункт о гарантии лучшей цены на рынке.</li>
					</ul>

					<div class = "tenders-important">
						
						<p class = "tenders-important-text">Более 100 выигранных тендеров
							Оперативно и качественно готовим коммерческие предложения
						Работаем с небольшими компаниями и крупными корпорациями</p>
					</div>

					<div class = "tenders-info">
						
						<p class = "tenders-info-p">Если Ваша компания рассматривает нас, как потенциального участника тендерных торгов, то можете не сомневаться, что мы будем достойным участником, который с высокой долей вероятности выиграет торги путем предоставления высокого качества предлагаемых услуг и максимально выгодной для вас цены. Несомненно, мы готовы принять участие в тендере не только на разовые мероприятия, но и заключаем долгосрочные договоры на обслуживание, куда зачастую включаем пункт о гарантии лучшей цены на рынке. Пришлите прямо сейчас нам описание планируемого Вами мероприятия, укажите максимально подробно все параметры и получите предварительный расчет-смету, это позволит вам убедиться, что у нас есть для вас действительно уникальное предложение.</p>
					</div>

				</div>

				<div class = "tenders-right">

					<p class = "tenders-title-big">
						Приглашение к тендеру
					</p>

					<p class = "tenders-garanties">Мы гарантируем наличие и предоставление всех необходимых документов, разрешений, сертификатов и лицензий, а также финансовых гарантий согласно законодательству РФ о проведении торгов.</p>
					<form action="" name = "tenders-form" @submit.prevent = "checkForm">
						<div class = "tenders-form">
							<div class="tenders-half-width">
								<div class="tenders-input-block">
									<input
									type="text"
									class="tenders-input"
									placeholder="Максимальный бюджет"
									v-model = "budget"
									/>
									<div class="spy-left-input"></div>
									<div class="spy-bottom-input"></div>
									<div class="spy-right-input"></div>
									<div class="spy-top-input"></div>
								</div>
							</div>
							<div class="tenders-half-width">
								<div class="tenders-input-block">
									<input
									type="text"
									class="tenders-input"
									placeholder="Регион или отель (если известно)"
									v-model = "region"
									/>
									<div class="spy-left-input"></div>
									<div class="spy-bottom-input"></div>
									<div class="spy-right-input"></div>
									<div class="spy-top-input"></div>
								</div>
							</div>
							<div class="tenders-half-width">
								<div class="tenders-input-block">
									<input
									type="text"
									class="tenders-input"
									placeholder="Дата мероприятия"
									v-model = "date"
									/>
									<div class="spy-left-input"></div>
									<div class="spy-bottom-input"></div>
									<div class="spy-right-input"></div>
									<div class="spy-top-input"></div>
								</div>
							</div>
							<div class="tenders-half-width">
								<div class="tenders-input-block">
									<input
									type="text"
									class="tenders-input"
									placeholder="Количество гостей"
									v-model = "guestsNumber"
									/>
									<div class="spy-left-input"></div>
									<div class="spy-bottom-input"></div>
									<div class="spy-right-input"></div>
									<div class="spy-top-input"></div>
								</div>
							</div>
							<div class="tenders-half-width">
								<div class="tenders-input-block">
									<input
									type="text"
									class="tenders-input"
									placeholder="Процедура оплаты"
									v-model = "procedurePayment"
									/>
									<div class="spy-left-input"></div>
									<div class="spy-bottom-input"></div>
									<div class="spy-right-input"></div>
									<div class="spy-top-input"></div>
								</div>
							</div>
							<div class="tenders-half-width">
								<div class="tenders-input-block">
									<input
									type="text"
									class="tenders-input"
									placeholder="Email"
									v-model = "email"
									/>
									<div class="spy-left-input"></div>
									<div class="spy-bottom-input"></div>
									<div class="spy-right-input"></div>
									<div class="spy-top-input"></div>
								</div>
							</div>
							<div class="tenders-half-width">
								<div class="tenders-input-block">
									<input
									type="text"
									class="tenders-input tenders-input-name"
									placeholder="Имя *"
									v-model = "name"
									/>
									<div class="spy-left-input"></div>
									<div class="spy-bottom-input"></div>
									<div class="spy-right-input"></div>
									<div class="spy-top-input"></div>
								</div>
							</div>
							<div class="tenders-half-width">
								<div class="tenders-input-block">
									<input
									type="text"
									class="tenders-input tenders-input-phone"
									placeholder="Телефон *"
									v-model = "phone"
									/>
									<div class="spy-left-input"></div>
									<div class="spy-bottom-input"></div>
									<div class="spy-right-input"></div>
									<div class="spy-top-input"></div>
								</div>
							</div>
							<div class = "tenders-textarea-w">
								<textarea
									placeholder = "Комментарий"
									class = "tenders-textarea"
									v-model = "comment"
								></textarea>
								<div class="spy-left-textarea"></div>
								<div class="spy-bottom-textarea"></div>
								<div class="spy-right-textarea"></div>
								<div class="spy-top-textarea"></div>
							</div>
						</div>
						<div class="send-info-btns">
							<div class="warning-info">* Нажимая на кнопку, вы даете согласие на обработку персональных данных</div>
							<div class = "tenders-send-order">
								<input class="tenders-send-input" type="submit" value="Отправить">
								<div class="spy-left-btn"></div>
								<div class="spy-bottom-btn"></div>
								<div class="spy-right-btn"></div>
								<div class="spy-top-btn"></div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<blRight/>
	</div>
</template>

<script>

import blRight from '@/components/bl_right'
import mainLogo from '@/components/main_logo'
import pageHeader from '@/components/page_header'
import Inputmask from 'inputmask'
import axios from 'axios'

export default {
	data(){
		return {
			budget: '',
			region: '',
			date: '',
			guestsNumber: '',
			procedurePayment: '',
			email: '',
			name: '',
			phone: '',
			comment: '',
			im: new Inputmask("+7 (999) 999-99-99"),
			sendingForm: 0
		}
	},
	mounted(){

		// Обнуление стилей неверно заполненных полей
		
		let phoneField = document.querySelector('.tenders-input-phone'),
			nameField = document.querySelector('.tenders-input-name')

			phoneField.addEventListener('keyup', function(){
				this.classList.remove('input-box-wrong')
			})

			phoneField.addEventListener('focus', function(){
				this.classList.remove('input-box-wrong')
			})

			nameField.addEventListener('keyup', function(){
				this.classList.remove('input-box-wrong')
			})

			nameField.addEventListener('focus', function(){
				this.classList.remove('input-box-wrong')
			})

		// Маска телефона 
		
			this.im.mask(phoneField)
 
	},
	methods: {

		checkForm(e){

			let phoneField = document.querySelector('.tenders-input-phone')

			if (this.name == '' || !phoneField.inputmask.isComplete()) {

				if (this.name == '') {
					document.querySelector('.tenders-input-name').classList.add('input-box-wrong')
				}

				if (!phoneField.inputmask.isComplete()) {
					phoneField.classList.add('input-box-wrong')
				}

				return false
			}

			this.sendForm(e.target)
		},

       sendForm(form){

            if (this.sendingForm != 0) return false

            this.sendingForm = 1

            axios.interceptors.request.use((req) => {
                    form.querySelector('.tenders-send-input').value = "Отправка..."
                    return req
                }
            )

				let bodyFormData = new FormData()
				
					bodyFormData.append('budget', this.budget)
					bodyFormData.append('region', this.region)
					bodyFormData.append('date', this.date)
					bodyFormData.append('guestsNumber', this.guestsNumber)
					bodyFormData.append('procedurePayment', this.procedurePayment)
					bodyFormData.append('email', this.email)
					bodyFormData.append('name', this.name)
					bodyFormData.append('phone', this.phone)
					bodyFormData.append('comment', this.comment)
					bodyFormData.append('form_name', form.getAttribute('name'))

				axios.post('https://systemice.ru/say_online_send_test.php', bodyFormData, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
				})
				.then(response => {
					console.log(response.data.success === 1)

					response.data.success === 1 ? form.querySelector('.tenders-send-input').value = "Успешно!" :
												  form.querySelector('.tenders-send-input').value = "Ошибка!"
				})
        }

	},
	components: {
		blRight, pageHeader, mainLogo
	},
}

</script>