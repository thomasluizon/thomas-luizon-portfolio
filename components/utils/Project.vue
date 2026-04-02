<template>
	<div class="flex h-full flex-col gap-6 p-2 sm:p-4">
		<div class="image-container w-full">
			<NuxtImg
				:src="project.img"
				:alt="project.alt"
				class="project-img"
				width="960"
				height="600"
				sizes="(max-width: 768px) 92vw, 760px"
				preset="default"
			/>
		</div>
		<div class="space-y-3">
			<h2 class="text-2xl font-semibold tracking-tight">
				{{ project.title }}
			</h2>
			<p class="text-sm leading-7 text-muted-foreground sm:text-base">
				{{ project.desc }}
			</p>
		</div>
		<div class="mt-auto flex flex-wrap gap-3">
			<a
				:href="project.repo"
				class="project-btn"
				target="_blank"
				rel="noopener noreferrer"
			>
				{{ t('projectRepo') }}
			</a>
			<a
				v-if="project.demo"
				:href="project.demo"
				class="project-btn"
				target="_blank"
				rel="noopener noreferrer"
			>
				{{ t('projectDemo') }}
			</a>
		</div>
	</div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const props = defineProps<{
	project: Project
}>()

const project = props.project
</script>

<style scoped>
.image-container {
	@apply overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/80 shadow-lg;
}

.project-img {
	@apply aspect-[16/10] w-full object-cover;
}

.project-btn {
	@apply inline-flex items-center justify-center rounded-full border border-border/70 bg-background/80 px-4 py-2 text-sm font-medium transition-colors duration-200 hover:border-primary/60 hover:bg-accent hover:text-accent-foreground;
}
</style>
