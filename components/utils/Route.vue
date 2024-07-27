<template>
	<NuxtLink
		:class="['menu-hover', isActive ? 'active' : '']"
		:to="localePath(route === 'home' ? 'index' : route)"
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
const translatedText = computed(() => t(props.route))
const localePath = useLocalePath()

const actualRroute = useRoute()
const isActive = computed(
	() =>
		actualRroute.path ===
		localePath(props.route === 'home' ? 'index' : props.route)
)
</script>
