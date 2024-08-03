export const useSidebarStore = defineStore('sidebar', () => {
	const isSidebarOpen = ref(false)

	function toggleSidebar() {
		isSidebarOpen.value = !isSidebarOpen.value
	}

	return {
		isSidebarOpen,
		toggleSidebar,
	}
})
