const defaultLocale = 'pt'

export default defineNuxtConfig({
	modules: [
		'@nuxtjs/i18n',
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'@nuxtjs/google-fonts',
	],
	i18n: {
		vueI18n: './i18n.config.ts',
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
})
