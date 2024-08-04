<template>
	<NuxtLink
		:class="['menu-hover', isActive ? 'active' : '']"
		:to="localePath(route)"
		@click="handleClick"
		>{{ translatedText }}</NuxtLink
	>
</template>

<script setup lang="ts">
const props = defineProps({
	route: {
		type: String,
		required: true,
	},
})

const { t } = useI18n()
const localePath = useLocalePath()
const actualRoute = useRoute()
const sidebarStore = useSidebarStore()

const translatedText = computed(() => t(props.route))
const isActive = computed(() => actualRoute.path === localePath(props.route))

function handleClick() {
	if (sidebarStore.isSidebarOpen) {
		sidebarStore.toggleSidebar()
	}
}
</script>
