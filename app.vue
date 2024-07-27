<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
	title: `${t('portfolio')} - Thomas Luizon`,
})
</script>

<style>
.rotate-enter-active,
.rotate-leave-active {
	transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
	opacity: 0;
	transform: rotate3d(1, 1, 1, 15deg);
}
</style>
