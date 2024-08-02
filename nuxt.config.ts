export default defineNuxtConfig({
	modules: [
		'@nuxtjs/i18n',
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'@nuxtjs/google-fonts',
		'@nuxtjs/color-mode',
		'@pinia/nuxt',
	],
	app: {
		pageTransition: { name: 'rotate', mode: 'out-in', appear: true },
	},
	i18n: {
		vueI18n: './i18n.config.ts',
		locales: ['en', 'pt'],
		defaultLocale: 'en',
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'i18n_redirected',
			redirectOn: 'root',
		},
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
		githubToken: process.env.GITHUB_TOKEN,
		public: {
			github: process.env.NUXT_PUBLIC_GITHUB_LINK,
			linkedin: process.env.NUXT_PUBLIC_LINKEDIN_LINK,
			email: process.env.NUXT_PUBLIC_EMAIL,
		},
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
