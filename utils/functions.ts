export function useScrollToSection() {
	const scrollTo = (sectionId: string) => {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
	}
	return { scrollTo }
}
