export const useProjectsStore = defineStore('projects', () => {
	const projects = ref<Project[] | null>(null)
	const hasLoaded = ref(false)
	const error = ref<string | null>(null)

	const fetchProjects = async () => {
		try {
			error.value = null
			const response = await fetch('/api/githubProjects')
			if (response.ok) {
				projects.value = await response.json()
			} else {
				error.value = `GitHub API returned ${response.status}`
			}
		} catch (err) {
			error.value = err instanceof Error ? err.message : 'Unknown error'
			console.error('[projectsStore] Failed to fetch projects:', err)
		} finally {
			hasLoaded.value = true
		}
	}

	return { projects, hasLoaded, error, fetchProjects }
})
