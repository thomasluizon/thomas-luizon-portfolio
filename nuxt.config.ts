export default defineNuxtConfig({
	modules: [
		'@nuxtjs/i18n',
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'@nuxtjs/google-fonts',
		'@nuxtjs/color-mode',
		'@pinia/nuxt',
		'@nuxt/image',
	],
	app: {
		pageTransition: { name: 'rotate', mode: 'out-in', appear: true },
	},
	image: {
		domains: ['github.com'],
		screens: {
			xs: 320,
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
			xxl: 1536,
		},
		presets: {
			default: {
				modifiers: {
					format: 'webp',
					quality: 80,
					placeholder: 500,
					sizes: '100vw sm:50vw md:400px',
				},
			},
		},
		format: ['webp'],
		quality: 80,
	},
	i18n: {
		vueI18n: './i18n.config.ts',
		locales: ['en', 'pt'],
		defaultLocale: 'en',
		baseUrl: 'https://thomas-luizon-portfolio.vercel.app',
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
