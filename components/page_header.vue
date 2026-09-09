<template>

	<header>
		<div class="header">
			<NuxtLink class="btn-no-animate" to = "/event-progress">
				<span>Обсудить проект</span>
			</NuxtLink>
			<a class="btn event-progress-stripe" href="">
				<div class = "event-progress bta-hover"></div>
				<div class = "common-progress-text">Общий прогресс сборки мероприятия</div>
			</a>
			<div class="tel-continer">
				<div class="tel-wrap tel-messenger-wrap">
					<div class="tel-messenger-line">
						<div class="messenger-links" aria-label="Мессенджеры Systemice">
							<a class="messenger-link" href="https://api.whatsapp.com/send?phone=79266410573&amp;text=Здравствуйте, у меня вопрос с вашего корпоративного сайта Systemice" target="_blank" rel="noopener noreferrer" aria-label="Написать Systemice в WhatsApp" title="WhatsApp">
								<img src="@/assets/images/icons/whatsapp.png" alt="WhatsApp Systemice">
							</a>
							<a class="messenger-link" href="https://t.me/systemice" target="_blank" rel="noopener noreferrer" aria-label="Открыть Telegram Systemice" title="Telegram">
								<img src="@/assets/images/icons/telegram-logo.webp" alt="Telegram Systemice">
							</a>
							<span class="messenger-link messenger-link-disabled" aria-label="Systemice в MAX — ссылка пока не указана" title="MAX — ссылка пока не указана">
								<img src="@/assets/images/icons/max.svg" alt="MAX Systemice">
							</span>
						</div>
						<a class="tel-btn" href="https://api.whatsapp.com/send?phone=79266410573&amp;text=Здравствуйте, у меня вопрос с вашего корпоративного сайта Systemice">+7(926)641-05-73</a>
					</div>
					<span>Для связи в мессенджерах</span>
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

			<div class="bl-phone mob-messengers">
				<div class="messenger-links" aria-label="Мессенджеры Systemice">
					<a href="https://api.whatsapp.com/send?phone=79266410573&amp;text=Здравствуйте, у меня вопрос с вашего корпоративного сайта Systemice" target="_blank" rel="noopener noreferrer" class="messenger-link" aria-label="Написать Systemice в WhatsApp" title="WhatsApp">
						<img src="@/assets/images/icons/whatsapp.png" alt="WhatsApp Systemice">
					</a>
					<a href="https://t.me/systemice" target="_blank" rel="noopener noreferrer" class="messenger-link" aria-label="Открыть Telegram Systemice" title="Telegram">
						<img src="@/assets/images/icons/telegram-logo.webp" alt="Telegram Systemice">
					</a>
					<span class="messenger-link messenger-link-disabled" aria-label="Systemice в MAX — ссылка пока не указана" title="MAX — ссылка пока не указана">
						<img src="@/assets/images/icons/max.svg" alt="MAX Systemice">
					</span>
				</div>
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
					<img src="@/assets/images/icons/instagram.png" alt="Systemice в Instagram">
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
