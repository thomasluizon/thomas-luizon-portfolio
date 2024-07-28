export default defineNuxtRouteMiddleware(to => {
	const localePath = useLocalePath()
	const defaultRoute = 'home'

	if (!to.matched.length) return navigateTo(localePath(defaultRoute))
})
