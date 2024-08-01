export const useProjectsStore = defineStore('projects', () => {
	const projects = ref<Project[]>([])
	const hasLoaded = ref(false)

	const fetchProjects = async () => {
		try {
			const response = await fetch('/api/githubProjects')
			projects.value = await response.json()
		} catch (error) {
			console.error(error)
		} finally {
			hasLoaded.value = true
		}
	}

	return { projects, hasLoaded, fetchProjects }
})
