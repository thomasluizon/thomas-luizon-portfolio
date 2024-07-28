<template>
	<div
		@wheel="handleScroll"
		@touchstart="handleTouchStart"
		@touchend="handleTouchEnd"
		class="h-screen flex overflow-hidden"
	>
		<slot />
	</div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
const localePath = useLocalePath()
let isThrottled = false

let touchStartX = 0
let touchStartY = 0
let touchEndX = 0
let touchEndY = 0

const handleScroll = event => {
	if (isThrottled) return

	const underscoreIndex = route.name.indexOf('_')
	let routeName = route.name

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

			const nextRoute = routes[currentRouteIndex + 1]
			const nextRoutePath = localePath(nextRoute)
			router.push(nextRoutePath)
		}
	} else {
		if (currentRouteIndex > 0) {
			isThrottled = true
			setTimeout(() => {
				isThrottled = false
			}, 500)

			const prevRoute = routes[currentRouteIndex - 1]

			const prevRoutePath = localePath(prevRoute)
			router.push(prevRoutePath)
		}
	}
}

const handleTouchStart = event => {
	const touch = event.touches[0]
	touchStartX = touch.clientX
	touchStartY = touch.clientY
}

const handleTouchEnd = event => {
	const touch = event.changedTouches[0]
	touchEndX = touch.clientX
	touchEndY = touch.clientY

	handleGesture()
}

const handleGesture = () => {
	const deltaX = touchEndX - touchStartX
	const deltaY = touchEndY - touchStartY

	if (isThrottled) return

	const underscoreIndex = route.name.indexOf('_')
	let routeName = route.name

	if (underscoreIndex >= 0) {
		routeName = routeName.substring(0, underscoreIndex)
	}

	const currentRouteIndex = routes.indexOf(routeName)

	if (deltaX > 50 || deltaY > 50) {
		if (currentRouteIndex < routes.length - 1) {
			isThrottled = true
			setTimeout(() => {
				isThrottled = false
			}, 500)

			const nextRoute = routes[currentRouteIndex + 1]
			const nextRoutePath = localePath(nextRoute)
			router.push(nextRoutePath)
		}
	} else if (deltaX < -50 || deltaY < -50) {
		if (currentRouteIndex > 0) {
			isThrottled = true
			setTimeout(() => {
				isThrottled = false
			}, 500)

			const prevRoute = routes[currentRouteIndex - 1]

			const prevRoutePath = localePath(prevRoute)
			router.push(prevRoutePath)
		}
	}
}
</script>
