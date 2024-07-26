<template>
	<component :is="tag" :class="combinedClasses">
		<slot />
	</component>
</template>

<script setup lang="ts">
const props = defineProps({
	tag: {
		type: String,
		default: 'div',
	},
	class: {
		type: String,
		default: '',
	},
})

const combinedClasses = computed(() => {
	return ['py-8', 'px-12', 'h-100', props.class]
})
</script>
