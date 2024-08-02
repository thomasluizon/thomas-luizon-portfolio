<template>
	<UtilsContainer tag="main" class="w-full flex justify-center items-center">
		<UtilsSpinner v-if="!projectsStore.hasLoaded" />
		<div
			v-else-if="projectsStore.hasLoaded && projectsStore.projects == null"
		>
			Erro ao buscar projetos no GitHub...
		</div>
		<div
			v-else-if="
				projectsStore.hasLoaded && projectsStore.projects?.length === 0
			"
		>
			No momento não há projetos... Aguarde enquanto trabalho em novos!
		</div>
		<div v-else>
			<Carousel class="max-w-2xl">
				<CarouselContent>
					<CarouselItem
						v-for="project in projectsStore.projects"
						:key="project.repo"
						class="flex flex-col items-center justify-center"
					>
						<UtilsProject :project="project" />
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious class="scale-150" />
				<CarouselNext class="scale-150" />
			</Carousel>
		</div>
	</UtilsContainer>
</template>

<script setup lang="ts">
import { useProjectsStore } from '~/stores/projectsStore'
const projectsStore = useProjectsStore()

const { t } = useI18n()

useHead({
	title: `${t('projects')} - Thomas Luizon`,
})
</script>
