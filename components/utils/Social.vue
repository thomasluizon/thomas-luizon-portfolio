<template>
	<a
		:href="url"
		:aria-label="label"
		class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/80 transition-transform duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
		target="_blank"
		rel="noopener noreferrer"
	>
		<img
			:src="img"
			alt=""
			aria-hidden="true"
			width="20"
			height="20"
			class="h-5 w-5 dark:invert"
		/>
	</a>
</template>

<script setup lang="ts">
defineProps({
	url: {
		type: String,
		required: true,
	},
	img: {
		type: String,
		required: true,
	},
	label: {
		type: String,
		required: true,
	},
})
</script>
