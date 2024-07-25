import en from './locales/en.js'
import pt from './locales/pt.js'

export default defineI18nConfig(() => ({
	legacy: false,
	locale: 'en',
	messages: {
		en,
		pt,
	},
}))
