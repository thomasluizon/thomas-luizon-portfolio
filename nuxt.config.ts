export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/google-fonts'],
	...{
		googleFonts: {
			families: {
				Poppins: true,
			},
		},
	},
	shadcn: {
		prefix: '',
		componentDir: './components/ui',
	},
	compatibilityDate: '2024-07-17',
})
