<template>
	<a
		:href="props.project.demo || props.project.repo"
		target="_blank"
		rel="noopener noreferrer"
		class="group block relative overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-500 hover:border-accent/30 hover:shadow-[0_0_40px_-12px] hover:shadow-accent/20 cursor-pointer"
	>
		<div class="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

		<div class="relative p-7 md:p-8 flex flex-col gap-5">
			<div class="flex items-start justify-between gap-4">
				<div class="flex items-center gap-3">
					<span
						class="font-heading text-5xl md:text-6xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors duration-500 leading-none select-none"
					>
						{{ String(props.index + 1).padStart(2, '0') }}
					</span>
					<div>
						<h3
							class="font-heading font-semibold text-xl text-card-foreground group-hover:text-accent transition-colors duration-300"
						>
							{{ props.project.name }}
						</h3>
						<div class="flex flex-wrap gap-1.5 mt-1.5">
							<span
								v-for="topic in props.project.topics"
								:key="topic"
								class="text-[11px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium"
							>
								{{ topic }}
							</span>
						</div>
					</div>
				</div>

				<ArrowUpRight
					:size="20"
					class="text-muted-foreground/40 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 mt-1"
				/>
			</div>

			<p
				class="text-sm leading-relaxed text-muted-foreground pl-[calc(3rem+0.75rem)] md:pl-[calc(3.75rem+0.75rem)]"
			>
				{{ props.project.desc }}
			</p>

			<div
				class="flex items-center gap-4 pt-4 border-t border-border/50 pl-[calc(3rem+0.75rem)] md:pl-[calc(3.75rem+0.75rem)]"
			>
				<a
					:href="props.project.repo"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
					@click.stop
				>
					<Github :size="14" />
					{{ $t('viewRepo') }}
				</a>
				<a
					v-if="props.project.demo"
					:href="props.project.demo"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent/80 transition-colors cursor-pointer"
					@click.stop
				>
					<ExternalLink :size="14" />
					{{ $t('viewDemo') }}
				</a>
			</div>
		</div>
	</a>
</template>

<script setup lang="ts">
import { Github, ExternalLink, ArrowUpRight } from 'lucide-vue-next'

const { t } = useI18n()

const props = defineProps<{
	project: Project
	index: number
}>()
</script>
