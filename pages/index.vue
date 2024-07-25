<template>
	<UiContainer tag="main">
		<h1>{{ $t('portfolio') }}</h1>
	</UiContainer>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
	title: `${t('portfolio')} - Thomas Luizon`,
})
</script>
