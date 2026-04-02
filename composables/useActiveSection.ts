export function useActiveSection(sectionIds: string[]) {
	const activeSection = ref(sectionIds[0] || '')

	onMounted(() => {
		const observer = new IntersectionObserver(
			entries => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						activeSection.value = entry.target.id
						history.replaceState(null, '', `#${entry.target.id}`)
					}
				}
			},
			{ threshold: 0.5 }
		)

		for (const id of sectionIds) {
			const el = document.getElementById(id)
			if (el) observer.observe(el)
		}

		onBeforeUnmount(() => observer.disconnect())
	})

	return activeSection
}
