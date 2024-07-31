<template>
	<div class="fixed top-0 right-0 w-2 h-full">
		<div
			class="absolute w-full h-1/4 bg-slate-700 dark:bg-slate-100 transition-all duration-500 ease rounded-md cursor-pointer hover:contrast-50"
			:style="{ top: indicatorPosition + '%' }"
			@mousedown="handleMouseDown"
		></div>
	</div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const localePath = useLocalePath()

const routeName = ref('')
const lastMouseY = ref(0)
const isDragging = ref(false)
const isThrottled = ref(false)

const indicatorHeight = 25

const indicatorPosition = computed(() => {
	const routeIndex = routeName.value ? routes.indexOf(routeName.value) : -1
	return routeIndex >= 0
		? (routeIndex / (routes.length - 1)) * (100 - indicatorHeight)
		: 0
})

function updateRouteName() {
	if (route.name) {
		const underscoreIndex = (route.name as string).indexOf('_')
		if (underscoreIndex >= 0) {
			routeName.value = (route.name as string).substring(0, underscoreIndex)
		} else {
			routeName.value = route.name as string
		}
	} else {
		routeName.value = ''
	}
}

function navigateToRoute(index: number) {
	if (index >= 0 && index < routes.length) {
		const targetRoute = routes[index]
		const targetRoutePath = localePath(targetRoute)
		router.push(targetRoutePath)
	}
}

function handleMouseDown(event: MouseEvent) {
	isDragging.value = true
	lastMouseY.value = event.clientY
	window.addEventListener('mousemove', handleMouseMove)
	window.addEventListener('mouseup', handleMouseUp)
}

function handleMouseMove(event: MouseEvent) {
	if (isDragging.value) {
		if (event.buttons === 0) {
			handleMouseUp()
			return
		}

		if (isThrottled.value) return

		const deltaY = event.clientY - lastMouseY.value

		const currentRouteIndex = routes.indexOf(routeName.value)
		if (deltaY > 0 && currentRouteIndex < routes.length - 1) {
			isThrottled.value = true
			setTimeout(() => {
				isThrottled.value = false
			}, 500)
			navigateToRoute(currentRouteIndex + 1)
		} else if (deltaY < 0 && currentRouteIndex > 0) {
			isThrottled.value = true
			setTimeout(() => {
				isThrottled.value = false
			}, 500)
			navigateToRoute(currentRouteIndex - 1)
		}

		lastMouseY.value = event.clientY
	}
}

function handleMouseUp() {
	isDragging.value = false
	window.removeEventListener('mousemove', handleMouseMove)
	window.removeEventListener('mouseup', handleMouseUp)
}

updateRouteName()

watch(() => route.name, updateRouteName)
</script>
