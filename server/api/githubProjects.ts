import { Project, Repository } from '~/utils/interfaces'

export default defineEventHandler(async event => {
	const config = useRuntimeConfig()
	const apiToken = config.githubToken

	try {
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

		const repos = json.filter((repo) =>
			repo.topics.includes('show-portfolio')
		)

		const projectArray: Project[] = []

		repos.forEach((repository) => {
			const repoUrl = repository.html_url

			const obj: Project = {
				repo: repoUrl,
				demo: repository.homepage,
				desc: repository.description,
				img: `${repoUrl}/blob/main/screenshot.jpeg?raw=true`,
			}

			projectArray.push(obj)
		})

		return projectArray
	} catch (error: any) {
		return { error: error.message || 'Failed to load github projects' }
	}
})
