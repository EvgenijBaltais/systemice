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
			<a class="tel-btn" href="tel:74952152480">+7(495)215-24-80</a>
		</div>
		<div class="header-mob">
			<NuxtLink class="btn-no-animate" to = "/event-progress"><span>Собрать мероприятие</span></NuxtLink>
			<div class="mob-menu">
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
			<div class="bl-search">
				<div class="btn-exit">
					<div class="img"></div>
					Войти
				</div>
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
			</div>
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
			<div class="bl-social">
				<a href="https://www.instagram.com/systemice/" target = "_blank" class="social-link">
					<img src="@/assets/images/icons/instagram.png">
				</a>
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
			</div>
		</div>
	</header>

</template>

<script>
export default {
	name: 'pageHeader',
    mounted(){

    	$('.mob-menu').removeClass('open');
        $('.menu-wrapper').removeClass('open-active');
        $('body').removeClass('overlay');

        $('.mob-menu').on('click', function(){
            $('.mob-menu').toggleClass('open');
            $('.menu-wrapper').toggleClass('open-active');
            $('body').toggleClass('overlay');
        })
    }
}
</script>