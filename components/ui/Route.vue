<template>
	<NuxtLink
		class="hover:bg-slate-200 dark:hover:bg-slate-800 p-3 rounded-lg transition-colors"
		:to="localePath(path)"
		>{{ translatedText }}</NuxtLink
	>
</template>

<script setup lang="ts">
const props = defineProps({
	text: {
		type: String,
		required: true,
	},
	path: {
		type: String,
		required: true,
	},
})

const { t } = useI18n()
const translatedText = computed(() => t(props.text))
const localePath = useLocalePath()
</script>
