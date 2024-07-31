export function useNavigation() {
	const router = useRouter()
	const localePath = useLocalePath()

	const navigateToRoute = (index: number, routes: string[]) => {
		if (index >= 0 && index < routes.length) {
			const targetRoute = routes[index]
			const targetRoutePath = localePath(targetRoute)
			router.push(targetRoutePath)
		}
	}

	return { navigateToRoute }
}
