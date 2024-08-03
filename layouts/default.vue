<template>
	<UtilsScrollRouter>
		<div>
			<UtilsHamburger />
			<LayoutSidebar />
		</div>
		<slot />
	</UtilsScrollRouter>
</template>

<script setup lang="ts">
const projectsStore = useProjectsStore()

onMounted(async () => {
	if (!projectsStore.hasLoaded) {
		await projectsStore.fetchProjects()
	}
})
</script>
