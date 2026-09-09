<template>
	<div class="wrapper partner">
		<div class="bl-l fl-column">
			<div class = "main-logo-left">
				<mainLogo/>
			</div>
			<div class="bl-menu-title">
				<span class="company-name">ПАРТНЕРЫ</span>
			</div>
			<div class="bl-pagination">
				<span class="active-page">06 </span>
				<span class="bl-page"> / 08</span>
			</div>
		</div>
		<div class="main">
			<pageHeader/>
			<div class="content-box partner-wrapper">
				<div class="bl-partner">	
					<img class="img-partner" src="@/assets/images/partners/1.png" alt="Партнёр Systemice — Сбер А">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/2.png" alt="Партнёр Systemice — HAOM">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/3.png" alt="Партнёр Systemice — курорт Красная Поляна">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/4.png" alt="Партнёр Systemice — Azimut Hotels">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/5.png" alt="Партнёр Systemice — DataForum">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/6.png" alt="Партнёр Systemice — 1С">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/7.png" alt="Партнёр Systemice — Mantera Resort &amp; Congress">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/8.png" alt="Партнёр Systemice — RUSSPASS Business">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/9.png" alt="Партнёр Systemice — национальная премия «Событие года»">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/10.png" alt="Партнёр Systemice — MC">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/11.png" alt="Партнёр Systemice — Росэлторг">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/12.png" alt="Партнёр Systemice — сеть отелей Cosmos">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/13.png" alt="Партнёр Systemice — АльфаСтрахование">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/14.png" alt="Партнёр Systemice — Инсайт Люди">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/15.png" alt="Партнёр Systemice — Яндекс">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/16.png" alt="Партнёр Systemice — Росатом">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
			</div>
			<div class="footer-mob">
				<div class="bl-pagination">
					<span class="active-page">06 </span>
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

export default {
	head() {
		return {
			title: 'Партнеры - Systemice Group Системайс Групп',
			script:[],
			meta: [
			{
				hid: 'name',
				name: 'name',
				content: 'Systemice Group'
			},
			{
				hid: 'description',
				name: 'description',
				content: 'Партнёры Systemice Group: отели, площадки, сервисы и отраслевые компании, с которыми мы организуем корпоративные мероприятия.'
			},
            {
                hid: 'og:title',
                name: 'og:title',
                content: 'Systemice Group Системайс Групп',
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: ``,
            },
            {
                hid: 'og:description',
                property: 'og:description',
				content: 'Партнёры Systemice Group: отели, площадки, сервисы и отраслевые компании, с которыми мы организуем корпоративные мероприятия.',
            },
            {
                hid: 'og:url',
                property: 'og:url',
                content: ``,
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

	},
	  mounted() {

	},
	beforeDestroy() {

	}
}

</script>
