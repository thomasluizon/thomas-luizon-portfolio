<template>
	<ul class="flex gap-3">
		<li v-for="social in socials" :key="social.url">
			<UtilsSocial :img="social.img" :url="social.url" :alt="social.alt" />
		</li>
	</ul>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const socials = [
	{
		url: config.public.github,
		img: '/images/github-icon.svg',
		alt: 'GitHub',
	},
	{
		url: config.public.linkedin,
		img: '/images/linkedin-icon.svg',
		alt: 'LinkedIn',
	},
]
</script>
