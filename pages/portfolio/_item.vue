<template>
	<div class="wrapper portfolio_in">
		<div class="bl-l fl-column">
			<div>
				<NuxtLink to = "/">
					<img src="@/assets/images/logo.png">
				</NuxtLink>
			</div>
			<div class="bl-menu-title">
				<span class="company-name">Мероприятие</span>
			</div>
			<div class="bl-pagination">
				<span class="active-page"></span>
				<span class="bl-page"></span>
			</div>
		</div>
		<div class="main">
			<pageHeader/>
			<div class="content-main event-page">
				<div class="event-page-wrapper">
					<div class="event-page-sl">
						<div class="slider-block glide-b">
							<a class="arrow-left"></a>
							<a class="arrow-right"></a>
							<img class="sl-search" src="@/assets/images/icons/search.png">
								<div class="bl-info-wrapper glide__track" data-glide-el="track">
									<ul class="glide__slides glide__slides-b">

										<li class="news-sldr-box content-slide glide__slide" v-for = "item in portfolioData[eventItem].pics">
												<div class="slides-img" :style="{backgroundImage: `url(${require('@/assets/images/portfolio/' + portfolioData[eventItem].picsFolder + '/' + item + '.jpg')})`}"></div>
										</li>
									</ul>
								</div>
							<div class="bl-preview">
								<div class="item-dots item-service-dots"></div>
							</div>
						</div>
					</div>
					<div class="inter-event-page">
						<div class="event-info">
							<span class="event-name">{{portfolioData[eventItem].title}}</span>
							<div class="line"></div>
							<div class="event-desc">
								<p v-html="portfolioData[eventItem].dateData"></p>
								<p v-html="portfolioData[eventItem].membersData"></p>
								<p v-html="portfolioData[eventItem].spectators"></p>
							</div>
						</div>
						<form class="contact-form contact-info" id = "portfolio-form">
							<p>Хотите так же?</p>
							<div class="line"></div>
							<div class="form-line">
								<div class="input-box">
									<input type="text" name="name" class = "contact-name" placeholder="Ваше имя">
									<div class="spy-left"></div>
									<div class="spy-top"></div>
									<div class="spy-right"></div>
									<div class="spy-bottom"></div>
								</div>
								<div class="input-box">
									<input type="text" name="phone" class = "contact-phone" placeholder="Телефон">
									<div class="spy-left"></div>
									<div class="spy-top"></div>
									<div class="spy-right"></div>
									<div class="spy-bottom"></div>
								</div>
							</div>
							<label class="checkbox-block">
				                <input type="checkbox" name="" class="input-check" checked>
				                <span class="checkbox-style">
				                	<div class="spy-left"></div>
									<div class="spy-top"></div>
									<div class="spy-right"></div>
									<div class="spy-bottom"></div>
				                </span>
								<span class = "i-agree">Я согласен на обработку персональных данных</span>
							</label>
							<div class="button-box">
								<input class="send-button" type="button" value="Отправить">
								<div class="spy-left"></div>
								<div class="spy-top"></div>
								<div class="spy-right"></div>
								<div class="spy-bottom"></div>
							</div>
						</form>
					</div>
				</div>

				<ul>
					<li v-for = "item in portfolioData[eventItem].details" :key="item">{{item}}</li>
				</ul>
			</div>
			<div class="footer-mob">
				<div class="bl-pagination">
					<span class="active-page">03 </span>
					<span class="bl-page"> / 07</span>
				</div>
				<div class="bl-copyright">
					Ⓒ2014 - 2021
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
			title: 'Проект в портфолио',
			meta: [
				{

				}
			]
		}
	},
	data(){
		return {
			eventItem: this.$route.params.item - 1,
			portfolioData: this.$store.state.portfolioData
		}
	},
	components: {
		blRight, pageHeader
  	},
	methods: {

	},
	  mounted() {

			// Карусель glide js для информации рядом с картой

			let glide_b = new Glide('.glide-b', {
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
    
			glide_b.mount()

	},
	beforeDestroy() {

	}
}

</script>