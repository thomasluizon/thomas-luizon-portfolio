<template>
	<UtilsContainer tag="main" class="flex flex-1 items-center">
		<section class="mx-auto flex w-full max-w-5xl flex-col gap-8">
			<div class="space-y-3">
				<p
					class="text-sm font-semibold uppercase tracking-[0.28em] text-primary/80"
				>
					{{ t('projectsHeading') }}
				</p>
				<h1 class="text-4xl font-semibold tracking-tight">
					{{ t('projects') }}
				</h1>
				<p class="max-w-3xl text-base leading-7 text-muted-foreground">
					{{ t('projectsIntro') }}
				</p>
			</div>

			<div
				class="rounded-[2rem] border border-border/70 bg-card/80 p-4 shadow-xl shadow-primary/5 sm:p-6"
			>
				<div
					v-if="projectsStore.status === 'pending'"
					class="flex min-h-[26rem] items-center justify-center"
				>
					<UtilsSpinner />
				</div>
				<div
					v-else-if="projectsStore.status === 'error'"
					class="flex min-h-[26rem] flex-col items-center justify-center gap-4 text-center"
				>
					<p class="max-w-md text-muted-foreground">
						{{ t('projectsLoadError') }}
					</p>
					<Button
						type="button"
						variant="outline"
						@click="projectsStore.fetchProjects(true)"
					>
						{{ t('retry') }}
					</Button>
				</div>
				<div
					v-else-if="projectsStore.projects.length === 0"
					class="flex min-h-[26rem] items-center justify-center text-center"
				>
					<p class="max-w-md text-muted-foreground">
						{{ t('projectsEmpty') }}
					</p>
				</div>
				<div v-else>
					<Carousel class="mx-auto max-w-full md:max-w-3xl">
						<CarouselContent>
							<CarouselItem
								v-for="project in projectsStore.projects"
								:key="project.repo"
								class="flex flex-col items-center justify-center"
							>
								<UtilsProject :project="project" />
							</CarouselItem>
						</CarouselContent>
						<CarouselPrevious
							v-if="projectsStore.projects.length > 1"
							class="left-3 md:-left-12"
						/>
						<CarouselNext
							v-if="projectsStore.projects.length > 1"
							class="right-3 md:-right-12"
						/>
					</Carousel>
				</div>
			</div>
		</section>
	</UtilsContainer>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'

const projectsStore = useProjectsStore()
const { t } = useI18n()
const pageTitle = computed(() => t('projects'))
const pageDescription = computed(() => t('projectsIntro'))

await useAsyncData('portfolio-projects', () => projectsStore.fetchProjects())

useSeoMeta({
	title: () => pageTitle.value,
	description: () => pageDescription.value,
})
</script>
