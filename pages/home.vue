<template>
	<UtilsContainer tag="main" class="flex flex-1 items-center">
		<section
			class="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
		>
			<div class="space-y-6">
				<div class="space-y-4">
					<p
						class="text-sm font-semibold uppercase tracking-[0.28em] text-primary/80"
					>
						{{ t('homeEyebrow') }}
					</p>
					<p
						class="inline-flex rounded-full border border-border/70 bg-background/80 px-4 py-2 text-sm text-muted-foreground shadow-sm"
					>
						{{ t('fullStackDev') }}
					</p>
					<h1
						class="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
					>
						{{ name }}
					</h1>
					<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
						{{ t('homeIntro') }}
					</p>
				</div>
				<div class="flex flex-wrap gap-3">
					<Button as-child>
						<NuxtLink :to="localePath('projects')">
							{{ t('viewProjects') }}
						</NuxtLink>
					</Button>
					<Button as-child variant="outline">
						<NuxtLink :to="localePath('contact')">
							{{ t('contactCallToAction') }}
						</NuxtLink>
					</Button>
				</div>
			</div>

			<div class="mx-auto w-full max-w-md">
				<div
					class="overflow-hidden rounded-[2rem] border border-border/70 bg-card/80 p-3 shadow-2xl shadow-primary/10"
				>
					<div
						class="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-primary/10 via-background to-accent/60"
					>
						<NuxtImg
							src="/images/profile.png"
							:alt="t('profileAlt')"
							class="h-auto w-full rounded-[1.5rem] object-cover"
							width="432"
							height="432"
							sizes="(max-width: 1024px) 70vw, 28rem"
							loading="eager"
							fetchpriority="high"
							preload
							preset="default"
						/>
					</div>
				</div>
			</div>
		</section>
	</UtilsContainer>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'

const { t } = useI18n()
const localePath = useLocalePath()

const name = 'Thomas Luizon'
const pageTitle = computed(() => t('home'))
const pageDescription = computed(() => t('homeIntro'))

useSeoMeta({
	title: () => pageTitle.value,
	description: () => pageDescription.value,
})
</script>
