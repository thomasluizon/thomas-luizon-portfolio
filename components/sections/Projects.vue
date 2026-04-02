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

		<div v-if="!projectsStore.hasLoaded" class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div
				v-for="i in 4"
				:key="i"
				class="rounded-xl border border-border bg-card overflow-hidden animate-pulse"
			>
				<div class="aspect-video bg-muted" />
				<div class="p-5 space-y-3">
					<div class="h-5 bg-muted rounded w-2/3" />
					<div class="h-4 bg-muted rounded w-full" />
					<div class="h-4 bg-muted rounded w-4/5" />
				</div>
			</div>
		</div>

		<div
			v-else-if="projectsStore.error"
			ref="errorEl"
			class="reveal text-center py-16 text-muted-foreground"
		>
			<p>{{ $t('projectsError') }}</p>
		</div>

		<div
			v-else-if="projectsStore.projects?.length === 0"
			ref="emptyEl"
			class="reveal text-center py-16 text-muted-foreground"
		>
			<p>{{ $t('projectsEmpty') }}</p>
		</div>

		<div
			v-else
			ref="gridEl"
			class="grid grid-cols-1 md:grid-cols-2 gap-8"
		>
			<div
				v-for="(project, index) in projectsStore.projects"
				:key="project.repo"
				class="reveal"
				:style="{ transitionDelay: `${index * 0.1}s` }"
			>
				<SectionsProjectCard :project="project" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const projectsStore = useProjectsStore()
const { observe } = useScrollReveal()

const headingEl = ref<HTMLElement>()
const gridEl = ref<HTMLElement>()
const errorEl = ref<HTMLElement>()
const emptyEl = ref<HTMLElement>()

onMounted(() => {
	;[headingEl, errorEl, emptyEl].forEach(el => {
		if (el.value) observe(el.value)
	})
})

watch(
	() => projectsStore.hasLoaded,
	() => {
		nextTick(() => {
			if (gridEl.value) {
				const cards = gridEl.value.querySelectorAll('.reveal')
				cards.forEach(card => observe(card as HTMLElement))
			}
		})
	}
)
</script>
