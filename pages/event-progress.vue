<template>
	<div class="wrapper events">

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

			<div class="content-box">
				<div class="event-details">

					<div class="details-header">
						<div class = "details-header-title">
							<span class = "details-text-span">ДЕТАЛИ</span>
							<span class = "details-step-span">Шаг № 1</span>
						</div>
						<div class = "details-progress-mini">
							<div class="details-half-filled"></div>
						</div>
						<div class="details-body">
							
							<div class = "details-body-left">
								<div class = "details-body-field">
									<label class = "details-date-label" for="">Дата мероприятия</label>
									<div class = "details-input-block">
										<input type="text" class = "" class = "details-input" placeholder="дд.мм.гг" readonly="readonly">
										<div class = "field-arrow"></div>
									</div>
								</div>

								<div class = "details-body-field">
									<label class = "details-date-label" for="">Количество гостей</label>
									<div class = "details-input-block">
										<input type="text" class = "" class = "details-input" placeholder="Введите кол-во" readonly="readonly">
										<div class = "field-arrow"></div>
									</div>
								</div>

								<div class = "details-body-field">
									<label class = "details-date-label" for="">Формат мероприятия</label>
									<div class = "details-input-block">
										<input type="text" class = "" class = "details-input" placeholder="Выбрать" readonly="readonly">
										<div class = "field-arrow"></div>
									</div>
								</div>

								<div class = "details-body-field">
									<label class = "details-date-label" for="">Бюджет</label>
									<div class = "details-input-block">
										<input type="text" class = "" class = "details-input" placeholder="Введите бюджет в рублях" readonly="readonly">
										<div class = "field-arrow"></div>
									</div>
								</div>
							</div>

							<div class = "details-body-right">

								<div class = "details-body-field">

									<input type="checkbox" id="cb1"> <label for="cb1">Флажок 1</label>
									
								</div>

								<div class = "details-body-field">
									<label class = "details-date-label" for="">Место проведения</label>
									<div class = "details-input-block">
										<input type="text" class = "" class = "details-input" placeholder="Выбрать" readonly="readonly">
										<div class = "field-arrow"></div>
									</div>
								</div>

								<div class = "details-body-field">
									<label class = "details-date-label" for="">Сайт компании/ссылка на соц. сети</label>
									<div class = "details-input-block">
										<input type="text" class = "" class = "details-input" placeholder="Вставьте ссылку" readonly="readonly">
										<div class = "field-arrow"></div>
									</div>
								</div>
							</div>
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