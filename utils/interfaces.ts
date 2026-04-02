export interface Repository {
	name: string
	topics: string[]
	html_url: string
	homepage: string | null
	description: string | null
	default_branch: string
}

export interface Project {
	title: string
	repo: string
	demo: string | null
	desc: string
	img: string
	alt: string
}
