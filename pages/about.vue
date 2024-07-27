<template>
	<UtilsContainer tag="main" class="w-full">
		<h1>{{ $t('about') }}</h1>
	</UtilsContainer>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
	title: `${t('about')} - Thomas Luizon`,
})
</script>
