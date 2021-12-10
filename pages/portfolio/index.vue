<template>
	<div class="wrapper portfolio">
		<div class="bl-l fl-column">
			<div class = "main-logo-left">
				<mainLogo/>
			</div>
			<div class="bl-menu-title">
				<span class="company-name">Проекты любой сложности</span>
			</div>
			<div class="bl-pagination">
				<span class="active-page">04 </span>
				<span class="bl-page"> / 08</span>
			</div>
		</div>
		<div class="main">
			<pageHeader/>
			<div class="content-box portfolio-block">
				<div v-for = "(item, index) in portfolioData"
				:key="item.id" :class="['sl-card', 'scrolling-portfolio-item', 'sl-box-' + (index === 0 ? 1 : 2)]"
				:style="{backgroundImage: `url(${require('@/assets/images/portfolio/' + item.picsFolder + '/1m.jpg')})`}">
					<NuxtLink :to = "{path: `/portfolio/${++index}`}">
						<div class="bg-hover">
							<div class="event-info">
								<span class="event-name">{{item.title}}</span>
							</div>
						</div>
					</NuxtLink>
				</div>
			</div>
			<div class="footer-mob">
				<div class="bl-pagination">
					<span class="active-page">04 </span>
					<span class="bl-page"> / 08</span>
				</div>
				<copyright/>
			</div>
		</div>
	<blRight/>
	<div class="bottom-bg"></div>
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
			title: 'Портфолио - Systemice Hotel Group Системайс Хотел Групп',
			script:[],
			meta: [
			{
				hid: 'name',
				name: 'name',
				content: 'Systemice Hotel Group'
			},
			{
				hid: 'description',
				name: 'description',
				content: 'Организуем корпоративные мероприятия любого формата по лучшим ценам'
			},
            {
                hid: 'og:title',
                name: 'og:title',
                content: 'Systemice Hotel Group Системайс Хотел Групп',
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: ``,
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: 'Организуем корпоративные мероприятия любого формата по лучшим ценам',
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

			portfolioData: this.$store.state.portfolioData
		}
	},
	components: {
		blRight, pageHeader, mainLogo, copyright
	},
	mounted(){

	},
	methods: {

	}
}

</script>