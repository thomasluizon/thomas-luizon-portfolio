<template>
	<ul v-if="socials.length" class="flex flex-wrap gap-3">
		<li v-for="social in socials" :key="social.url">
			<UtilsSocial
				:img="social.img"
				:url="social.url"
				:label="social.label"
			/>
		</li>
	</ul>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const { t } = useI18n()

const socials = computed(() =>
	[
		{
			url: config.public.github,
			img: '/images/github-icon.svg',
			label: t('githubProfile'),
		},
		{
			url: config.public.linkedin,
			img: '/images/linkedin-icon.svg',
			label: t('linkedinProfile'),
		},
	].filter(social => Boolean(social.url))
)
</script>
