<template>
	<UtilsContainer tag="main" class="w-full flex items-center justify-evenly">
		<div>
			<h2 class="font-bold text-4xl text-center">{{ name }}</h2>
			<p class="text-lg text-center">{{ $t('fullStackDev') }}</p>
		</div>
		<div class="max-w-lg">
			<img :src="icon" :alt="t('profileAlt')" class="rounded-full" />
		</div>
	</UtilsContainer>
</template>

<script setup lang="ts">
import icon from '~/assets/images/profile.png'

const { t } = useI18n()

const name = 'Thomas Luizon'

useHead({
	title: `${t('portfolio')} - ${name}`,
})
</script>
