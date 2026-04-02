import type { RouteRecordName } from 'vue-router'
import { routes, type AppRoute } from './constants'

export function getRouteKey(routeName: RouteRecordName | null | undefined) {
	if (typeof routeName !== 'string') {
		return null
	}

	const [baseRoute] = routeName.split('___')

	return routes.includes(baseRoute as AppRoute)
		? (baseRoute as AppRoute)
		: null
}

export function useNavigation() {
	const router = useRouter()
	const localePath = useLocalePath()

	const navigateToRoute = (targetRoute: AppRoute) => {
		router.push(localePath(targetRoute))
	}

	return { navigateToRoute }
}
