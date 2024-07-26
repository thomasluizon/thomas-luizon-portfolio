<template>
	<div class="flex h-screen">
		<LayoutSidebar />
		<slot />
	</div>
</template>

<script setup lang="ts">
useHead({
	bodyAttrs: {
		class: 'transition-colors duration-100',
	},
})
</script>
