<template>
	<UtilsContainer tag="aside" :class="computedClass">
		<h1 class="text-2xl">{{ $t('portfolio') }}</h1>
		<LayoutRoutes />
		<div class="sidebar-section gap-6">
			<LayoutSocials />
			<LayoutLanguageSelector />
			<LayoutThemeSwitch />
		</div>
	</UtilsContainer>
</template>

<script setup lang="ts">
const props = defineProps<{ isSidebarOpen: boolean }>()

const computedClass = computed(() => {
	return [
		'h-full flex flex-col justify-between items-center max-md:fixed max-md:inset-0 max-md:bg-background z-40 max-md:transition-transform',
		props.isSidebarOpen ? '' : 'max-md:-translate-x-full',
	].join(' ')
})
</script>
