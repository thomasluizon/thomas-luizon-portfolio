export interface Repository {
	name: string
	topics: string[]
	html_url: string
	homepage: string
	description: string
}

export interface Project {
	name: string
	repo: string
	demo: string
	desc: string
	img: string
	topics: string[]
}
