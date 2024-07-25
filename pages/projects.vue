<template>
	<Container>
		<h1>{{ $t('projects') }}</h1>
	</Container>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
	title: `${t('projects')} - Thomas Luizon`,
})
</script>
