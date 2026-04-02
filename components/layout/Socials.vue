<template>
	<div class="flex items-center gap-4">
		<a
			v-for="social in socials"
			:key="social.url"
			:href="social.url"
			target="_blank"
			rel="noopener noreferrer"
			class="text-muted-foreground hover:text-foreground transition-colors"
			:aria-label="social.label"
		>
			<component :is="social.icon" :size="20" />
		</a>
	</div>
</template>

<script setup lang="ts">
import { Github, Linkedin } from 'lucide-vue-next'

const config = useRuntimeConfig()

const socials = [
	{ url: config.public.github, icon: Github, label: 'GitHub' },
	{ url: config.public.linkedin, icon: Linkedin, label: 'LinkedIn' },
]
</script>
