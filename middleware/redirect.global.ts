export default defineNuxtRouteMiddleware(to => {
	const localePath = useLocalePath()

	if (!to.matched.length) return navigateTo(localePath('index'))
})
