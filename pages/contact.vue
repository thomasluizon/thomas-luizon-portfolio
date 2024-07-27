<template>
	<UtilsContainer tag="main">
		<h1>{{ $t('contact') }}</h1>
	</UtilsContainer>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
	title: `${t('contact')} - Thomas Luizon`,
})
</script>
