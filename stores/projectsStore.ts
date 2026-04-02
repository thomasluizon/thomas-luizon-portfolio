export const useProjectsStore = defineStore('projects', () => {
	const projects: Project[] = [
		{
			name: 'Orbit Landing Page',
			repo: 'https://github.com/thomasluizon/orbit-landing-page',
			demo: 'https://useorbit.org',
			desc: 'Orbit - AI-Powered Habit Tracker: Full-stack productivity app with an AI assistant that learns user patterns and proactively suggests habits, routines, and optimizations.',
			topics: ['nuxt', 'tailwindcss', 'typescript'],
		},
		{
			name: 'Personal Page',
			repo: 'https://github.com/thomasluizon/personal-page',
			demo: 'https://thomas-personal-page.vercel.app/',
			desc: 'A personal page showcasing a background image with links to social media profiles, built with Next.js and Tailwind CSS.',
			topics: ['nextjs', 'react', 'tailwindcss', 'typescript'],
		},
	]

	return { projects }
})
