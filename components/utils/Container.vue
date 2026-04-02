<template>
	<component :is="tag" :class="combinedClasses">
		<slot />
	</component>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
	tag?: string
	class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
	tag: 'div',
	class: '',
})

const combinedClasses = computed(() => {
	return cn('px-6 py-10 md:px-10 lg:px-14', props.class)
})
</script>
