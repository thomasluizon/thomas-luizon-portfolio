<template>
	<NuxtLink :to="localePath(path)">{{ translatedText }}</NuxtLink>
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
