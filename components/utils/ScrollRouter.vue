<template>
	<div @wheel="handleScroll" class="h-screen flex overflow-hidden">
		<slot />
	</div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
const localePath = useLocalePath()
let isThrottled = false

const handleScroll = event => {
	if (isThrottled) return

	isThrottled = true
	setTimeout(() => {
		isThrottled = false
	}, 500)

	const underscoreIndex = route.name.indexOf('_')
	let routeName = route.name

	if (underscoreIndex >= 0) {
		routeName = routeName.substring(0, underscoreIndex)
	}

	if (routeName === 'index') routeName = 'home'

	const currentRouteIndex = routes.indexOf(routeName)

	if (event.deltaY > 0) {
		if (currentRouteIndex < routes.length - 1) {
			const nextRoute = routes[currentRouteIndex + 1]
			const nextRoutePath = localePath(nextRoute)
			router.push(nextRoutePath)
		}
	} else {
		if (currentRouteIndex > 0) {
			let prevRoute = routes[currentRouteIndex - 1]

			if (prevRoute === 'home') prevRoute = 'index'

			const prevRoutePath = localePath(prevRoute)
			router.push(prevRoutePath)
		}
	}
}
</script>
