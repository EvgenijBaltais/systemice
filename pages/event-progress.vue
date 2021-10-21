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
		<div class="main">
			<pageHeader/>

			<div class="content-box">
				<component :is="componentStatus" @updateStatus="onUpdateStatus"></component>
			</div>
		</div>
		<blRight/>
	</div>
</template>

<script>

import blRight from '@/components/bl_right'
import pageHeader from '@/components/page_header'
import eventData from '@/components/event_data'

export default {
	data(){
		return {
			componentStatus: 'eventData'
		}
	},
	components: {
		blRight, pageHeader
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