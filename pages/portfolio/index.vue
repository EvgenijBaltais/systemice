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

			<div class = "content-box portfolio-block">
				<div class = "videos-example">
					<h1 class = "videos-title">Видео с примерами нашей работы</h1>
					<p class = "videos-info">Команда Systemice подготовила и осуществила съемки различных проектов 2021 году. Была проделана огромная работа, чтобы мероприятие состоялось в лучшем виде!</p>
				</div>
				<div class="videos-example" @click = "startVideo($event)" :style="{backgroundImage: `url(${require('../../assets/images/videos/1.jpg')})`}">
					<iframe class="YoutubeVideo" width="100%" height="100%" style = "display: block;margin: 0 auto;" data-src="https://rutube.ru/play/embed/94585286cd58edb4875ee79972538c6f/" frameBorder="0" allow="clipboard-write; autoplay=1" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
				</div>
				<div class="videos-example" @click = "startVideo($event)" :style="{backgroundImage: `url(${require('../../assets/images/videos/12.jpg')})`}">
					<iframe class="YoutubeVideo" width="100%" height="100%" style = "display: block;margin: 0 auto;" data-src="https://rutube.ru/play/embed/e92bdd079990a831c30e6220145c0f33/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
				</div>
				<div class="videos-example" @click = "startVideo($event)" :style="{backgroundImage: `url(${require('../../assets/images/videos/13.jpg')})`}">
					<iframe class="YoutubeVideo" width="100%" height="100%" style = "display: block;margin: 0 auto;" data-src="https://rutube.ru/play/embed/aefc4c2bb2294d23e635d9e213697ea8/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
				</div>
				<div class="videos-example" @click = "startVideo($event)" :style="{backgroundImage: `url(${require('../../assets/images/videos/2.jpg')})`}">
					<iframe class="YoutubeVideo" width="100%" height="100%" style = "display: block;margin: 0 auto;" data-src="https://rutube.ru/play/embed/005ac4a654e9032f4c7c50e65d4bac7f/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
				</div>
				<div class="videos-example" @click = "startVideo($event)" :style="{backgroundImage: `url(${require('../../assets/images/videos/3.jpg')})`}">
					<iframe class="YoutubeVideo" width="100%" height="100%" style = "display: block;margin: 0 auto;" data-src="https://rutube.ru/play/embed/3d776b420feb251319552be2d1908e0b/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
				</div>
				<div class="videos-example" @click = "startVideo($event)" :style="{backgroundImage: `url(${require('../../assets/images/videos/10.jpg')})`}">
					<iframe class="YoutubeVideo" width="100%" height="100%" style = "display: block;margin: 0 auto;" data-src="https://rutube.ru/play/embed/b2d9c51c5c3a2aab74dfa0dd4c3e0029/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
				</div>
				<div class="videos-example" @click = "startVideo($event)" :style="{backgroundImage: `url(${require('../../assets/images/videos/11.jpg')})`}">
					<iframe class="YoutubeVideo" width="100%" height="100%" style = "display: block;margin: 0 auto;" data-src="https://rutube.ru/play/embed/a603b53e615e5c87716f8307a0526a13/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
				</div>
				<div class="videos-example" @click = "startVideo($event)" :style="{backgroundImage: `url(${require('../../assets/images/videos/4.jpg')})`}">
					<iframe class="YoutubeVideo" width="100%" height="100%" style = "display: block;margin: 0 auto;" data-src="https://rutube.ru/play/embed/6d9bbf65107b0591a219ed0957ddd2d2/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
				</div>
				<div class="videos-example" @click = "startVideo($event)" :style="{backgroundImage: `url(${require('../../assets/images/videos/5.jpg')})`}">
					<iframe class="YoutubeVideo" width="100%" height="100%" style = "display: block;margin: 0 auto;" data-src="https://rutube.ru/play/embed/49cc674a490fa585768918a7fe35c4f3/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
				</div>
				<div class="videos-example" @click = "startVideo($event)" :style="{backgroundImage: `url(${require('../../assets/images/videos/7.jpg')})`}">
					<iframe class="YoutubeVideo" width="100%" height="100%" style = "display: block;margin: 0 auto;" data-src="https://rutube.ru/play/embed/1dd1734c216a9612351f598ab2c51e4a/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
				</div>
				<div class="videos-example" @click = "startVideo($event)" :style="{backgroundImage: `url(${require('../../assets/images/videos/8.jpg')})`}">
					<iframe class="YoutubeVideo" width="100%" height="100%" style = "display: block;margin: 0 auto;" data-src="https://rutube.ru/play/embed/dfaac9fe33693729bc8785ba3c6f707e/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
				</div>
				<div class="videos-example" @click = "startVideo($event)" :style="{backgroundImage: `url(${require('../../assets/images/videos/9.jpg')})`}">
					<iframe class="YoutubeVideo" width="100%" height="100%" style = "display: block;margin: 0 auto;" data-src="https://rutube.ru/play/embed/52fe0f06946f25bc359d970d82998ec9" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
				</div>
				<div class="videos-example" @click = "startVideo($event)" :style="{backgroundImage: `url(${require('../../assets/images/videos/6.jpg')})`}">
					<iframe class="YoutubeVideo" width="100%" height="100%" style = "display: block;margin: 0 auto;" data-src="https://rutube.ru/play/embed/bf327eea20a350d4f5c887bfae825d5d" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
				</div>
			</div>
			
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
		startVideo(event){

			event.target.style.backgroundImage = 'none'
			event.target.querySelector('iframe').style.visibility = "visible"
			event.target.querySelector('iframe').setAttribute('src', event.target.querySelector('iframe').getAttribute('data-src'))
		},
	}
}

</script>