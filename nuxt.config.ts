export default defineNuxtConfig({
	modules: [
		'@nuxtjs/i18n',
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'@nuxtjs/google-fonts',
		'@nuxtjs/color-mode',
	],
	app: {
		pageTransition: { name: 'rotate', mode: 'out-in' },
	},
	i18n: {
		vueI18n: './i18n.config.ts',
		locales: ['en', 'pt'],
		defaultLocale: 'en',
	},
	googleFonts: {
		families: {
			Poppins: true,
		},
	},
	shadcn: {
		prefix: '',
		componentDir: './components/ui',
	},
	compatibilityDate: '2024-07-17',
	runtimeConfig: {
		github: process.env.GITHUB_LINK,
		linkedin: process.env.LINKEDIN_LINK,
	},
	devtools: { enabled: true },
	colorMode: {
		preference: 'dark',
		fallback: 'system',
		hid: 'nuxt-color-mode-script',
		globalName: '__NUXT_COLOR_MODE__',
		componentName: 'ColorScheme',
		classPrefix: '',
		classSuffix: '',
		storageKey: 'nuxt-color-mode',
	},
})
