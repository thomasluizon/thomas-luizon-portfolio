<template>
	<NuxtLink
		:class="[
			'menu-hover inline-flex w-full items-center justify-between text-sm font-medium md:text-base',
			isActive ? 'active' : '',
		]"
		:to="localePath(route)"
		@click="handleClick"
	>
		<span>{{ translatedText }}</span>
	</NuxtLink>
</template>

<script setup lang="ts">
import type { AppRoute } from '~/utils/constants'

const props = defineProps<{
	route: AppRoute
}>()

const { t } = useI18n()
const localePath = useLocalePath()
const actualRoute = useRoute()
const sidebarStore = useSidebarStore()

const translatedText = computed(() => t(props.route))
const isActive = computed(() => getRouteKey(actualRoute.name) === props.route)

function handleClick() {
	if (sidebarStore.isSidebarOpen) {
		sidebarStore.closeSidebar()
	}
}
</script>
