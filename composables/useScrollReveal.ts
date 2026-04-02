export function useScrollReveal() {
	const observer = ref<IntersectionObserver | null>(null)

	const observe = (el: HTMLElement) => {
		if (!el || !process.client) return

		const prefersReducedMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches

		if (prefersReducedMotion) {
			el.classList.add('revealed')
			return
		}

		observer.value = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add('revealed')
						observer.value?.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.1, ...{} }
		)

		observer.value.observe(el)
	}

	onBeforeUnmount(() => {
		observer.value?.disconnect()
	})

	return { observe }
}
