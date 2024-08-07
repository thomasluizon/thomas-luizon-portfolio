<template>
	<div
		@wheel="handleScroll"
		@touchstart="handleTouchStart"
		@touchend="handleTouchEnd"
		class="h-dvh flex overflow-hidden"
	>
		<UtilsScrollIndicator />
		<slot />
	</div>
</template>

<script setup lang="ts">
const route = useRoute()
const sidebarStore = useSidebarStore()
const { navigateToRoute } = useNavigation()

let isThrottled = false
let touchStartY = 0
let touchEndY = 0

const isMobile = ref(false)

const handleScroll = (event: WheelEvent) => {
	if (isThrottled || (sidebarStore.isSidebarOpen && isMobile.value)) return

	let routeName = route.name as string
	const underscoreIndex = routeName.indexOf('_')

	if (underscoreIndex >= 0) {
		routeName = routeName.substring(0, underscoreIndex)
	}

	const currentRouteIndex = routes.indexOf(routeName)

	if (event.deltaY > 0) {
		if (currentRouteIndex < routes.length - 1) {
			isThrottled = true
			setTimeout(() => {
				isThrottled = false
			}, 500)

			navigateToRoute(currentRouteIndex + 1, routes)
		}
	} else {
		if (currentRouteIndex > 0) {
			isThrottled = true
			setTimeout(() => {
				isThrottled = false
			}, 500)

			navigateToRoute(currentRouteIndex - 1, routes)
		}
	}
}

const handleTouchStart = (event: TouchEvent) => {
	const touch = event.touches[0]
	touchStartY = touch.clientY
}

const handleTouchEnd = (event: TouchEvent) => {
	const touch = event.changedTouches[0]
	touchEndY = touch.clientY

	handleGesture()
}

const handleGesture = () => {
	if (isThrottled || (sidebarStore.isSidebarOpen && isMobile.value)) return

	const deltaY = touchEndY - touchStartY

	let routeName = route.name as string
	const underscoreIndex = routeName.indexOf('_')

	if (underscoreIndex >= 0) {
		routeName = routeName.substring(0, underscoreIndex)
	}

	const currentRouteIndex = routes.indexOf(routeName)

	if (deltaY < -50) {
		// Swipe up
		if (currentRouteIndex < routes.length - 1) {
			isThrottled = true
			setTimeout(() => {
				isThrottled = false
			}, 500)

			navigateToRoute(currentRouteIndex + 1, routes)
		}
	} else if (deltaY > 50) {
		// Swipe down
		if (currentRouteIndex > 0) {
			isThrottled = true
			setTimeout(() => {
				isThrottled = false
			}, 500)

			navigateToRoute(currentRouteIndex - 1, routes)
		}
	}
}

const updateMobileState = () => {
	if (typeof window !== 'undefined') {
		const isCurrentlyMobile = window.matchMedia('(max-width: 767px)').matches
		if (!isCurrentlyMobile) {
			sidebarStore.isSidebarOpen = false
		}
		isMobile.value = isCurrentlyMobile
	}
}

onMounted(() => {
	updateMobileState()
	window.addEventListener('resize', updateMobileState, { passive: true })
})

onBeforeUnmount(() => {
	window.removeEventListener('resize', updateMobileState)
})
</script>
