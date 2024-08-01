<template>
	<UtilsContainer tag="main" class="w-full flex justify-center items-center">
		<UtilsSpinner v-if="!projectsStore.hasLoaded" />
		<div
			v-else-if="
				projectsStore.hasLoaded && projectsStore.projects.length === 0
			"
		>
			No momento não há projetos... Aguarde enquanto trabalho em novos!
		</div>
		<div class="p-12" v-else>
			<Carousel>
				<CarouselContent>
					<CarouselItem
						v-for="project in projectsStore.projects"
						:key="project.repo"
						class="flex flex-col items-center"
					>
						{{ project.desc }}
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
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
