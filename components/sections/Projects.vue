<template>
	<div class="max-w-6xl mx-auto px-6">
		<div ref="headingEl" class="reveal mb-12">
			<p
				class="text-sm uppercase tracking-widest text-accent font-medium mb-2"
			>
				{{ $t('portfolio') }}
			</p>
			<h2 class="font-heading text-4xl md:text-5xl font-bold tracking-tight">
				{{ $t('projects') }}
			</h2>
			<div class="w-12 h-1 bg-accent rounded-full mt-4" />
		</div>

		<div ref="gridEl" class="flex flex-col gap-5">
			<div
				v-for="(project, index) in projectsStore.projects"
				:key="project.repo"
				class="reveal"
				:style="{ transitionDelay: `${index * 0.1}s` }"
			>
				<SectionsProjectCard :project="project" :index="index" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const projectsStore = useProjectsStore()
const { observe } = useScrollReveal()

const headingEl = ref<HTMLElement>()
const gridEl = ref<HTMLElement>()

onMounted(() => {
	if (headingEl.value) observe(headingEl.value)
	if (gridEl.value) {
		gridEl.value
			.querySelectorAll('.reveal')
			.forEach(card => observe(card as HTMLElement))
	}
})
</script>
