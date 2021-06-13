<template>
<!--
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
	<meta content="width=device-width, initial-scale=1.0" name="viewport">
	<title>Systemice Service</title>
	<meta content="systemice" name="keywords">
	<meta content="" name="description">
	<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">
	<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
	<script src="js/plugins/jquery.inputmask.bundle.js"></script>
	<link rel="stylesheet" type="text/css" href="css/fontstyle.css">
    <link href="https://use.fontawesome.com/bccb4e85ab.css" media="all" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/animation.css">
	<script type="text/javascript" src="plugins/lightcase-2.5.0/src/js/lightcase.js"></script>
	<link rel="stylesheet" href="plugins/lightcase-2.5.0/src/css/lightcase.css">
	<script type="text/javascript" src="js/script.js"></script>
	<script type="text/javascript" src="js/team-carousel.js"></script>
</head>
<body>
-->
	<div class="wrapper team">
		<div class="bl-l fl-column">
			<div>
				<NuxtLink to = "/">
					<img src="@/assets/images/logo.png">
				</NuxtLink>
			</div>
			<div class="bl-menu-title">
				<span class="company-name">КОМАНДА</span>
			</div>
			<div class="bl-pagination">
				<span class="active-page">04 </span>
				<span class="bl-page"> / 07</span>
			</div>
		</div>
		<div class="main">
			<pageHeader/>
			<div class="content-box">
				<img class="sotrud-img main-sotrud-img" src="@/assets/images/sotrud1.png">
				<div class="right-wth">
					<h1 class="h1-more">ЗАМКОВА ЛАРИСА</h1>
					<div class="line"></div>
					<h3 class="h3 h3-more">РУКОВОДИТЕЛЬ ОТДЕЛА РАЗВИТИЯ</h3>
					<div class="sotrud-contact">
						<b>Телефон:</b> <a href="tel:74995883939">+7 (499) 588-39-39</a> (доб. 887) <br>
						<b>Email:</b> zamkova@mailbox.ru
					</div>
				</div>
			</div>
			<div class="bl-preview">
				<div class="preview-container">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
					<img class="link-arrow dop-arrow-left" src="@/assets/images/arrow-left.png">
					<img class="link-arrow dop-arrow-right" src="@/assets/images/arrow-right.png">
					<div class = "sl-wrapper-shadow">
						<div class = "sl-wrapper">
							<img src = "@/assets/images/2.png" class="sl-teammate preview-item first" data-name = "Иванов Алексей" data-position = "Руководитель компании">
							<img src = "@/assets/images/1.png" class="sl-teammate preview-item slide-user-active second" data-name = "Замкова Лариса" data-position ="Руководитель отдела развития">
							<img src = "@/assets/images/3.png" class="sl-teammate preview-item third" data-name = "Бессонова Александра" data-position = "Руководитель корпоративного отдела">
							<img src = "@/assets/images/4.png" class="sl-teammate preview-item" data-name = "Бессонова Александра" data-position = "Старший менеджер">
							<img src = "@/assets/images/5.png" class="sl-teammate preview-item" data-name = "Иванов Иван" data-position = "Руководитель IT отдела">
							<img src = "@/assets/images/6.png" class="sl-teammate preview-item" data-name = "Сергеев Геннадий" data-position = "Главный маркетолог">
							<img src = "@/assets/images/7.png" class="sl-teammate preview-item" data-name = "Николаев Константин" data-position = "Руководитель рекламного отдела">
							<img src = "@/assets/images/8.png" class="sl-teammate preview-item" data-name = "Федоров Дмитрий" data-position = "Руководитель частного отдела">
						</div>
					</div>
				</div>
				<div class = "item-dots">
					<div class = "dots-container clearfix"></div>
				</div>
				<div class="arrow-left"></div>
				<div class="arrow-right"></div>
			</div>
			<div class="footer-mob">
				<div class="bl-pagination">
					<span class="active-page">04 </span>
					<span class="bl-page"> / 07</span>
				</div>
				<div class="bl-copyright">
					<!--Ⓒ2014 - <?=date('Y');?>-->
				</div>
			</div>
		</div>
		<blRight/>
	</div>
<!--
</body>
</html>
-->

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