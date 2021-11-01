<template>
	<div class="wrapper events">
		<div class="bl-l fl-column">
			<div class = "main-logo-left">
				<mainLogo/>
			</div>
			<div class="bl-menu-title">
				<span class="company-name">SYSTEMICE</span>
			</div>
			<div class="bl-pagination">
				<span class="active-page"></span>
				<span class="bl-page"></span>
			</div>
		</div>
		<div class="main event-p">
			<pageHeader/>

			<div class="content-box event-wrapper">
				<component :is="componentStatus" @updateStatus="onUpdateStatus"></component>
			</div>
		</div>
		<blRight/>
	</div>
</template>

<script>

import blRight from '@/components/bl_right'
import mainLogo from '@/components/main_logo'
import pageHeader from '@/components/page_header'
import eventData from '@/components/event_data'
import Inputmask from 'inputmask'

export default {
	data(){
		return {
			componentStatus: 'eventData',
			im: new Inputmask("+7 (999) 999-99-99")
		}
	},
	components: {
		blRight, pageHeader, mainLogo
	},
	methods: {

		onUpdateStatus(value){
			this.componentStatus = value
		}
	},

    computed: {

    },
	mounted(){

	}
}

</script>