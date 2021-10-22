<template>
	<div class="wrapper tenders">

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
				<span class="active-page">03 </span>
				<span class="bl-page"> / 08</span>
			</div>
		</div>
		<div class="main tenders-main">
			<pageHeader/>

			<div class="content-box tenders-wrapper scrolling-box">

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
					<div class = "tenders-form">
						<div class="tenders-half-width">
							<div class="tenders-input-block">
								<input
								type="text"
								class="tenders-input"
								placeholder="Максимальный бюджет"
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
								placeholder="Регион (или отель). если известно"
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
								placeholder="Email *"
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
								placeholder="Имя *"
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
								placeholder="Телефон *"
								/>
								<div class="spy-left-input"></div>
								<div class="spy-bottom-input"></div>
								<div class="spy-right-input"></div>
								<div class="spy-top-input"></div>
							</div>
						</div>
						<div class = "tenders-textarea-w">
							<textarea placeholder = "Комментарий" class = "tenders-textarea"></textarea>
							<div class="spy-left-textarea"></div>
							<div class="spy-bottom-textarea"></div>
							<div class="spy-right-textarea"></div>
							<div class="spy-top-textarea"></div>
						</div>
					</div>
					<div class="send-info-btns">
						<div class="warning-info">* Нажимая на кнопку, вы даете согласие на обработку персональных данных</div>
						<div class = "tenders-send-order">
							<span>Отправить</span>
							<div class="spy-left-btn"></div>
							<div class="spy-bottom-btn"></div>
							<div class="spy-right-btn"></div>
							<div class="spy-top-btn"></div>
						</div>
					</div>
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
	data(){
		return {
		}
	},
	components: {
		blRight, pageHeader
	},
}

</script>