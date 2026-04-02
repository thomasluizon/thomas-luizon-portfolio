<template>
	<div
		class="group rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5"
	>
		<div class="aspect-video overflow-hidden bg-muted">
			<NuxtImg
				:src="props.project.img"
				:alt="t('projectImageAlt', { name: props.project.name })"
				width="640"
				height="360"
				class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
				preset="default"
				loading="lazy"
			/>
		</div>

		<div class="p-5 flex flex-col gap-3">
			<h3 class="font-heading font-semibold text-lg text-card-foreground">
				{{ props.project.name }}
			</h3>

			<p class="text-sm text-muted-foreground leading-relaxed line-clamp-3">
				{{ props.project.desc }}
			</p>

			<div
				v-if="props.project.topics?.length"
				class="flex flex-wrap gap-1.5 mt-1"
			>
				<span
					v-for="topic in props.project.topics"
					:key="topic"
					class="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium"
				>
					{{ topic }}
				</span>
			</div>

			<div class="flex items-center gap-3 mt-2 pt-3 border-t border-border">
				<a
					:href="props.project.repo"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
				>
					<Github :size="16" />
					{{ $t('viewRepo') }}
				</a>
				<a
					v-if="props.project.demo"
					:href="props.project.demo"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors cursor-pointer"
				>
					<ExternalLink :size="16" />
					{{ $t('viewDemo') }}
				</a>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Github, ExternalLink } from 'lucide-vue-next'

const { t } = useI18n()

const props = defineProps<{
	project: Project
}>()
</script>
