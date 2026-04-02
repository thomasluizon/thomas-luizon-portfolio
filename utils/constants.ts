export const routes = ['home', 'about', 'projects', 'contact'] as const

export type AppRoute = (typeof routes)[number]
