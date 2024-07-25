<template>
	<div class="flex h-screen">
		<Sidebar />
		<slot />
	</div>
</template>

<script setup lang="ts">
useHead({
	bodyAttrs: {
		class: 'dark',
	},
})
</script>
