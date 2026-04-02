export const useProjectsStore = defineStore('projects', () => {
	const projects = ref<Project[]>([])
	const status = ref<'idle' | 'pending' | 'success' | 'error'>('idle')
	const errorMessage = ref<string | null>(null)

	const hasLoaded = computed(
		() => status.value === 'success' || status.value === 'error'
	)

	const fetchProjects = async (force = false) => {
		if (status.value === 'pending') {
			return projects.value
		}

		if (status.value === 'success' && !force) {
			return projects.value
		}

		status.value = 'pending'
		errorMessage.value = null

		try {
			projects.value = await $fetch<Project[]>('/api/githubProjects')
			status.value = 'success'
		} catch (error) {
			console.error(error)
			projects.value = []
			errorMessage.value =
				error instanceof Error
					? error.message
					: 'Failed to load projects.'
			status.value = 'error'
		}

		return projects.value
	}

	return { projects, status, errorMessage, hasLoaded, fetchProjects }
})
