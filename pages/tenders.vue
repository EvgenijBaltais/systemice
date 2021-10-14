<template>
	<div class="wrapper contact">

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
		<div class="main h-page">
			<pageHeader/>
		</div>
		<blRight/>
	</div>
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