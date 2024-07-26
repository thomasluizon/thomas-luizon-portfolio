<template>
	<a :href="url" target="_blank">
		<img
			:src="img"
			:alt="alt"
			width="30px"
			class="dark:invert transition-transform hover:scale-110"
		/>
	</a>
</template>

<script setup lang="ts">
const props = defineProps({
	url: {
		type: String,
		required: true,
	},
	img: {
		type: String,
		required: true,
	},
	alt: {
		type: String,
		required: true,
	},
})
</script>
