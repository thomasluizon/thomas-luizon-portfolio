<template>
	<div class="fixed top-0 right-0 w-2 h-full">
		<div
			class="absolute w-full h-1/4 bg-slate-700 dark:bg-slate-100 transition-all duration-500 ease rounded-md cursor-pointer"
			:style="{ top: indicatorPosition + '%' }"
		></div>
	</div>
</template>

<script setup lang="ts">
const route = useRoute()
const routeName = ref('')

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

updateRouteName()

watch(() => route.name, updateRouteName)
</script>
