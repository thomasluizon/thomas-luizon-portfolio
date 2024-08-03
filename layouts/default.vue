<template>
	<UtilsScrollRouter>
		<div>
			<UtilsHamburger @toggle="toggleSidebar" />
			<LayoutSidebar :isSidebarOpen="isSidebarOpen" />
		</div>
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

const isSidebarOpen = ref(false)

function toggleSidebar() {
	isSidebarOpen.value = !isSidebarOpen.value
}
</script>
