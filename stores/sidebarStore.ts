export const useSidebarStore = defineStore('sidebar', () => {
	const isSidebarOpen = ref(false)

	function toggleSidebar() {
		isSidebarOpen.value = !isSidebarOpen.value
	}

	function openSidebar() {
		isSidebarOpen.value = true
	}

	function closeSidebar() {
		isSidebarOpen.value = false
	}

	return {
		isSidebarOpen,
		toggleSidebar,
		openSidebar,
		closeSidebar,
	}
})
