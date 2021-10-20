<template>
	<div class="wrapper contact">

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
		<div class="main">
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
						
						Более 100 выигранных тендеров
						Оперативно и качественно готовим коммерческие предложения
						Работаем с небольшими компаниями и крупными корпорациями
					</div>

					<div class = "tenders-info">
						
						<p>Если Ваша компания рассматривает нас, как потенциального участника тендерных торгов, то можете не сомневаться, что мы будем достойным участником, который с высокой долей вероятности выиграет торги путем предоставления высокого качества предлагаемых услуг и максимально выгодной для вас цены. Несомненно, мы готовы принять участие в тендере не только на разовые мероприятия, но и заключаем долгосрочные договоры на обслуживание, куда зачастую включаем пункт о гарантии лучшей цены на рынке. Пришлите прямо сейчас нам описание планируемого Вами мероприятия, укажите максимально подробно все параметры и получите предварительный расчет-смету, это позволит вам убедиться, что у нас есть для вас действительно уникальное предложение.</p>
					</div>

				</div>

				<div class = "tenders-right">

					<p class = "tenders-title-big">Приглашение к тендеру</p>

					<p class = "tenders-garanties">Мы гарантируем наличие и предоставление всех необходимых документов, разрешений, сертификатов и лицензий, а также финансовых гарантий согласно законодательству РФ о проведении торгов.</p>

					<div class = "tenders-form">
						
						<div class="tenders-half-width">
							<label class="tenders-date-label" for="">Максимальный бюджет</label>
							<div class="tenders-input-block">
								<input
								type="text"
								class="tenders-input"
								placeholder="Укажите сумму в рублях"
								/>
							</div>
						</div>

						<div class="tenders-half-width">
							<label class="tenders-date-label" for="">Регион (или отель). если известно</label>
							<div class="tenders-input-block">
								<input
								type="text"
								class="tenders-input"
								placeholder="Укажите адрес или название отеля"
								/>
							</div>
						</div>

						<div class="tenders-half-width">
							<label class="tenders-date-label" for="">Дата мероприятия</label>
							<div class="tenders-input-block">
								<input
								type="text"
								class="tenders-input"
								placeholder="Укажите сумму в рублях"
								/>
							</div>
						</div>

						<div class="tenders-half-width">
							<label class="tenders-date-label" for="">Количество гостей</label>
							<div class="tenders-input-block">
								<input
								type="text"
								class="tenders-input"
								placeholder="Укажите адрес или название отеля"
								/>
							</div>
						</div>

						<div class="tenders-half-width">
							<label class="tenders-date-label" for="">Процедура оплаты</label>
							<div class="tenders-input-block">
								<input
								type="text"
								class="tenders-input"
								placeholder="Укажите сумму в рублях"
								/>
							</div>
						</div>

						<div class="tenders-half-width">
							<label class="tenders-date-label" for="">Email*</label>
							<div class="tenders-input-block">
								<input
								type="text"
								class="tenders-input"
								placeholder="Укажите адрес или название отеля"
								/>
							</div>
						</div>

						<div class="tenders-half-width">
							<label class="tenders-date-label" for="">Имя*</label>
							<div class="tenders-input-block">
								<input
								type="text"
								class="tenders-input"
								placeholder="Укажите сумму в рублях"
								/>
							</div>
						</div>

						<div class="tenders-half-width">
							<label class="tenders-date-label" for="">Телефон*</label>
							<div class="tenders-input-block">
								<input
								type="text"
								class="tenders-input"
								placeholder="Укажите адрес или название отеля"
								/>
							</div>
						</div>

						<div class = "tenders-textarea-w">
							<label class="tenders-date-label" for="">Комментарий</label>
							<textarea placeholder = "Контактное лицо" class = "tenders-textarea"></textarea>
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