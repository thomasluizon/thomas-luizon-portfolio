<template>
	<UtilsContainer tag="main">
		<h1>{{ $t('projects') }}</h1>
	</UtilsContainer>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
	title: `${t('projects')} - Thomas Luizon`,
})
</script>
