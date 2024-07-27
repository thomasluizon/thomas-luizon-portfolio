<template>
	<UtilsContainer tag="main">
		<h1>{{ $t('portfolio') }}</h1>
	</UtilsContainer>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
	title: `${t('portfolio')} - Thomas Luizon`,
})
</script>
