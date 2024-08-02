<template>
	<ul class="flex gap-3">
		<li v-for="social in socials" :key="social.url">
			<UtilsSocial :img="social.img" :url="social.url" :alt="social.alt" />
		</li>
	</ul>
</template>

<script setup lang="ts">
import githubIcon from '~/assets/images/github-icon.svg'
import linkedinIcon from '~/assets/images/linkedin-icon.svg'

const config = useRuntimeConfig()

const socials = [
	{
		url: config.public.github,
		img: githubIcon,
		alt: 'GitHub',
	},
	{
		url: config.public.linkedin,
		img: linkedinIcon,
		alt: 'LinkedIn',
	},
]
</script>
