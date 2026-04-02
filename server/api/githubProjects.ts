import type { Project, Repository } from '~/utils/interfaces'

const GITHUB_USERNAME = 'thomasluizon'
const PORTFOLIO_TOPIC = 'show-portfolio'

function getProjectOrder(repository: Repository) {
	const topic = repository.topics.find(tag => tag.includes(PORTFOLIO_TOPIC))

	if (!topic) {
		return Number.POSITIVE_INFINITY
	}

	const match = topic.match(/show-portfolio-(\d+)$/)

	return match ? Number.parseInt(match[1], 10) : Number.POSITIVE_INFINITY
}

function formatProjectTitle(name: string) {
	return name
		.split(/[-_]/g)
		.filter(Boolean)
		.map(part => part.charAt(0).toUpperCase() + part.slice(1))
		.join(' ')
}

export default defineEventHandler(async () => {
	const config = useRuntimeConfig()

	const headers: Record<string, string> = {
		Accept: 'application/vnd.github+json',
		'X-GitHub-Api-Version': '2022-11-28',
	}

	if (config.githubToken) {
		headers.Authorization = `Bearer ${config.githubToken}`
	}

	try {
		const repositories = await $fetch<Repository[]>(
			`https://api.github.com/users/${GITHUB_USERNAME}/repos`,
			{
				headers,
				query: {
					type: 'owner',
					sort: 'updated',
					per_page: 100,
				},
			}
		)

		return repositories
			.filter(repository =>
				repository.topics.some(topic => topic.includes(PORTFOLIO_TOPIC))
			)
			.sort((repositoryA, repositoryB) => {
				return getProjectOrder(repositoryA) - getProjectOrder(repositoryB)
			})
			.map<Project>(repository => {
				const title = formatProjectTitle(repository.name)
				const branch = repository.default_branch || 'main'

				return {
					title,
					repo: repository.html_url,
					demo: repository.homepage,
					desc:
						repository.description ||
						'Project case study and implementation details.',
					img: `${repository.html_url}/blob/${branch}/screenshot.jpeg?raw=true`,
					alt: `${title} project preview`,
				}
			})
	} catch (error) {
		console.error('Failed to fetch GitHub projects.', error)

		throw createError({
			statusCode: 502,
			statusMessage: 'Failed to load GitHub projects.',
		})
	}
})
