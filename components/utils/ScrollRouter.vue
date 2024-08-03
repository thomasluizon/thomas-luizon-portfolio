<template>
	<div
		@wheel="handleScroll"
		@touchstart="handleTouchStart"
		@touchend="handleTouchEnd"
		class="h-screen flex overflow-hidden"
	>
		<UtilsScrollIndicator />
		<slot />
	</div>
</template>

<script setup lang="ts">
const route = useRoute()
const { navigateToRoute } = useNavigation()
let isThrottled = false

let touchStartY = 0
let touchEndY = 0

const handleScroll = (event: WheelEvent) => {
	if (isThrottled) return

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
	if (isThrottled) return

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
</script>
