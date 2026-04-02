<template>
	<UtilsContainer tag="main" class="flex flex-1 items-center">
		<section class="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
			<div
				class="rounded-[2rem] border border-border/70 bg-card/80 p-8 shadow-xl shadow-primary/5"
			>
				<p
					class="text-sm font-semibold uppercase tracking-[0.28em] text-primary/80"
				>
					{{ $t('whoAmI') }}
				</p>
				<h1 class="mt-4 text-4xl font-semibold tracking-tight">
					{{ $t('about') }}
				</h1>
				<p class="mt-6 text-base leading-8 text-muted-foreground">
					{{ $t('aboutText') }}
				</p>
			</div>

			<aside
				class="rounded-[2rem] border border-border/70 bg-background/75 p-8 shadow-lg backdrop-blur"
			>
				<h2 class="text-2xl font-semibold">{{ $t('aboutMe') }}</h2>
				<p class="mt-4 text-base leading-7 text-muted-foreground">
					{{ $t('aboutDescription') }}
				</p>
				<ul class="mt-8 space-y-3">
					<li
						class="rounded-2xl border border-border/70 bg-card/80 px-4 py-4 text-sm font-medium"
					>
						{{ $t('aboutHighlightArchitecture') }}
					</li>
					<li
						class="rounded-2xl border border-border/70 bg-card/80 px-4 py-4 text-sm font-medium"
					>
						{{ $t('aboutHighlightExperience') }}
					</li>
					<li
						class="rounded-2xl border border-border/70 bg-card/80 px-4 py-4 text-sm font-medium"
					>
						{{ $t('aboutHighlightDelivery') }}
					</li>
				</ul>
			</aside>
		</section>
	</UtilsContainer>
</template>

<script setup lang="ts">
const { t } = useI18n()
const pageTitle = computed(() => t('about'))
const pageDescription = computed(() => t('aboutDescription'))

useSeoMeta({
	title: () => pageTitle.value,
	description: () => pageDescription.value,
})
</script>
