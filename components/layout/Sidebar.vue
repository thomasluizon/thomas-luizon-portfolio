<template>
	<transition
		name="sidebar-transition"
		@before-enter="beforeEnter"
		@enter="enter"
		@leave="leave"
	>
		<UtilsContainer tag="aside" :class="computedClass">
			<h1 class="text-2xl">{{ $t('portfolio') }}</h1>
			<LayoutRoutes />
			<div class="sidebar-section gap-6">
				<LayoutSocials />
				<LayoutLanguageSelector />
				<LayoutThemeSwitch />
			</div>
		</UtilsContainer>
	</transition>
</template>

<script setup lang="ts">
const sidebarStore = useSidebarStore()
const isResizing = ref(false)

const computedClass = computed(() =>
	[
		'h-full flex flex-col justify-between items-center max-md:fixed max-md:inset-0 max-md:bg-background z-40',
		isResizing.value ? '' : 'transition-transform',
		sidebarStore.isSidebarOpen ? '' : 'max-md:-translate-x-full',
	].join(' ')
)

const beforeEnter = () => {
	isResizing.value = false
}

const enter = (el: Element, done: () => void) => {
	// Trigger reflow
	;(el as HTMLElement).offsetHeight
	done()
}

const leave = (el: Element, done: () => void) => {
	done()
}

const updateMobileState = () => {
	const isCurrentlyMobile = window.matchMedia('(max-width: 767px)').matches
	if (!isCurrentlyMobile) {
		sidebarStore.isSidebarOpen = false
	}
	isResizing.value = !isCurrentlyMobile
}

onMounted(() => {
	window.addEventListener('resize', updateMobileState)
})

onBeforeUnmount(() => {
	window.removeEventListener('resize', updateMobileState)
})
</script>

<style scoped>
.sidebar-transition-enter-active,
.sidebar-transition-leave-active {
	@apply transition-transform duration-300 ease-in-out;
}
.sidebar-transition-enter,
.sidebar-transition-leave-to {
	@apply translate-x-full;
}
</style>
