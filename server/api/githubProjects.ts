import { Project, Repository } from '~/utils/interfaces'

export default defineEventHandler(async event => {
	const config = useRuntimeConfig()
	const apiToken = config.githubToken

	const response = await fetch('https://api.github.com/user/repos', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${apiToken}`,
			'Content-Type': 'application/json',
		},
	})

	if (!response.ok) {
		throw new Error('Failed to load github projects')
	}

	const json: Repository[] = await response.json()

	const repos = json.filter(repo =>
		repo.topics.some(topic => topic.includes('show-portfolio'))
	)

	repos.sort((a, b) => {
		const getNumberFromTag = (repo: Repository) => {
			const topic = repo.topics.find(t => t.includes('show-portfolio'))
			if (!topic) return Infinity
			const match = topic.match(/show-portfolio-(\d+)$/)
			return match ? parseInt(match[1], 10) : Infinity
		}

		const numA = getNumberFromTag(a)
		const numB = getNumberFromTag(b)

		return numA - numB
	})

	const projectArray: Project[] = repos.map(repository => ({
		name: repository.name,
		repo: repository.html_url,
		demo: repository.homepage,
		desc: repository.description,
		img: `${repository.html_url}/blob/main/screenshot.jpeg?raw=true`,
		topics: repository.topics.filter(t => !t.includes('show-portfolio')),
	}))

	return projectArray
})
