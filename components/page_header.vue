<template>

	<header>
		<div class="header">
			<NuxtLink class="btn-no-animate" to = "/event-progress">
				<span>Собрать собственное мероприятие</span>
			</NuxtLink>
			<a class="btn event-progress-stripe" href="">
				<div class = "event-progress bta-hover"></div>
				<div class = "common-progress-text">Общий прогресс сборки мероприятия</div>
			</a>
			<div class="tel-continer">
				<div class="tel-wrap">
					<a class="tel-btn tel-whtsp" href="https://api.whatsapp.com/send?phone=79266410573">+7(926)641-05-73</a>
					<span>Для связи по Whatsapp</span> 
				</div>

				<div class="tel-wrap">
					<a class="tel-btn" href="tel:74952152480">+7(495)215-24-80</a>
					<span>Для звонков</span>
				</div>

			</div>
		</div>
		<div class="header-mob">

			<div class="bl-tel bl-phone">
				<a class="mob-tel" href="tel:74952152480">+7(495)215-24-80</a>
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
			</div>

			<div class="bl-phone mob-whtsp">
				<a href="https://api.whatsapp.com/send?phone=79266410573" target = "_blank" class="wtsp-link">
					<img src="@/assets/images/icons/whatsapp.png">
				</a>
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
			</div>

			<div class="mob-menu" @click = "menuShowHide">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
		<div class="menu-wrapper">

			<NuxtLink class="btn-no-animate" to = "/event-progress"><span>Собрать мероприятие</span></NuxtLink>

			<ul class="menu-list">
				<li class="menu-item"><NuxtLink to = "/">О компании</NuxtLink></li>
				<li class="menu-item"><NuxtLink to = "/service">Услуги</NuxtLink></li>
				<li class="menu-item"><NuxtLink to = "/tenders">Тендеры</NuxtLink></li>
				<li class="menu-item"><NuxtLink to = "/portfolio">Портфолио</NuxtLink></li>
				<!--<li class="menu-item"><NuxtLink to = "/team">Команда</NuxtLink></li>-->
				<li class="menu-item"><NuxtLink to = "/partner">Партнеры</NuxtLink></li>
				<!--<li class="menu-item"><NuxtLink to = "/news">Новости</NuxtLink></li>-->
				<li class="menu-item"><NuxtLink to = "/contact">Контакты</NuxtLink></li>
			</ul>
			<!--
			<div class="bl-social">
				<a href="https://instagram.com/systemice_stream?igshid=MzRlODBiNWFlZA==" target = "_blank" class="social-link social-link-instagram">
					<img src="@/assets/images/icons/instagram.png">
				</a>
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
			</div>
			-->
		</div>
	</header>

</template>

<script>
export default {
	name: 'pageHeader',
    mounted(){

    	let mobMenu = document.querySelector('.mob-menu'),
    		menuWrapper = document.querySelector('.menu-wrapper')

    		mobMenu.classList.remove('open')
    		menuWrapper.classList.remove('open-active')
    		document.body.classList.remove('overlay')

    },
    methods: {

    	menuShowHide() {

	    	let mobMenu = document.querySelector('.mob-menu'),
	    		menuWrapper = document.querySelector('.menu-wrapper')


	    		mobMenu.classList.contains('open') ? 
	    		mobMenu.classList.remove('open') :
	    		mobMenu.classList.add('open')

	       		menuWrapper.classList.contains('open-active') ? 
	    		menuWrapper.classList.remove('open-active') :
	    		menuWrapper.classList.add('open-active')

	       		document.body.classList.contains('overlay') ? 
	    		document.body.classList.remove('overlay') :
	    		document.body.classList.add('overlay')
    	}
    }
}
</script>