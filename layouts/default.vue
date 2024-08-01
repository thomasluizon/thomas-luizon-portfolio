<template>
	<UtilsScrollRouter>
		<LayoutSidebar />
		<slot />
	</UtilsScrollRouter>
</template>

<script setup lang="ts">
import { useProjectsStore } from '~/stores/projectsStore'
const projectsStore = useProjectsStore()

onMounted(async () => {
	if (!projectsStore.hasLoaded) {
		await projectsStore.fetchProjects()
	}
})
</script>
