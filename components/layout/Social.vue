<template>
	<a :href="url" target="_blank">
		<img
			:src="img"
			:alt="alt"
			width="30px"
			class="dark:invert hover:scale-110 cursor-pointer"
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
