import { routes } from '~/utils/constants'

export default defineEventHandler(event => {
	const {
		public: { siteUrl },
	} = useRuntimeConfig()

	const staticRoutes = routes.flatMap(routeName => {
		const defaultLocalePath = `/${routeName}`
		const portuguesePath = `/pt/${routeName}`

		return [
			`${siteUrl}${defaultLocalePath}`,
			`${siteUrl}${portuguesePath}`,
		]
	})

	const urlEntries = staticRoutes
		.map(
			url => `<url><loc>${url}</loc><changefreq>weekly</changefreq></url>`
		)
		.join('')

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries}</urlset>`

	setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')

	return sitemap
})
