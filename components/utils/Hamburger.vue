<template>
	<div
		class="max-md:block hidden fixed top-4 left-4 z-50 cursor-pointer"
		@click="handleClick"
	>
		<div class="w-7 h-1 bg-white my-1 rounded"></div>
		<div class="w-7 h-1 bg-white my-1 rounded"></div>
		<div class="w-7 h-1 bg-white my-1 rounded"></div>
	</div>
</template>

<script setup lang="ts">
const sidebarStore = useSidebarStore()

function handleClick() {
	sidebarStore.toggleSidebar()
}
</script>
