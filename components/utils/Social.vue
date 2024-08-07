<template>
	<a :href="url" target="_blank">
		<NuxtImg
			:src="img"
			:alt="alt"
			width="30px"
			class="dark:invert hover:scale-110 cursor-pointer"
			:placeholder="500"
			sizes="100vw sm:50vw md:400px"
			height="30px"
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
