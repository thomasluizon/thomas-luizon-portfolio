<template>
	<UtilsContainer
		tag="main"
		class="w-full flex items-center justify-evenly max-md:flex-col-reverse max-md:justify-center gap-8 max-md:gap-4"
	>
		<div>
			<h2 class="font-bold text-4xl text-center">{{ name }}</h2>
			<p class="text-lg text-center">{{ $t('fullStackDev') }}</p>
		</div>
		<div class="max-w-sm">
			<img :src="icon" :alt="t('profileAlt')" class="rounded-full" />
		</div>
	</UtilsContainer>
</template>

<script setup lang="ts">
import icon from '~/assets/images/profile.png'

const { t } = useI18n()

const name = 'Thomas Luizon'
</script>
