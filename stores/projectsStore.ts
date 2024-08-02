export const useProjectsStore = defineStore('projects', () => {
	const projects = ref<Project[] | null>(null)
	const hasLoaded = ref(false)

	const fetchProjects = async () => {
		try {
			const response = await fetch('/api/githubProjects')
			if (response.ok) {
				projects.value = await response.json()
			}
		} catch (error) {
			console.error(error)
		} finally {
			hasLoaded.value = true
		}
	}

	return { projects, hasLoaded, fetchProjects }
})
