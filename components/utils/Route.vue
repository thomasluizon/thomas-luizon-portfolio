<template>
	<NuxtLink
		:class="['menu-hover', isActive ? 'active' : '']"
		:to="localePath(route)"
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

const actualRoute = useRoute()
const isActive = computed(() => actualRoute.path === localePath(props.route))
</script>
