<template>
	<div class="flex w-full flex-col gap-2">
		<span class="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
			{{ t('theme') }}
		</span>
		<div
			class="inline-flex w-full items-center rounded-full border border-border/70 bg-background/80 p-1 shadow-sm"
		>
			<button
				type="button"
				class="inline-flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
				:class="
					!isDark
						? 'bg-primary text-primary-foreground shadow-sm'
						: 'text-muted-foreground hover:text-foreground'
				"
				:aria-pressed="!isDark"
				:aria-label="t('activateLightTheme')"
				@click="setTheme('light')"
			>
				<SunMedium class="h-4 w-4" />
				{{ t('lightTheme') }}
			</button>
			<button
				type="button"
				class="inline-flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
				:class="
					isDark
						? 'bg-primary text-primary-foreground shadow-sm'
						: 'text-muted-foreground hover:text-foreground'
				"
				:aria-pressed="isDark"
				:aria-label="t('activateDarkTheme')"
				@click="setTheme('dark')"
			>
				<MoonStar class="h-4 w-4" />
				{{ t('darkTheme') }}
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { MoonStar, SunMedium } from 'lucide-vue-next'

const { t } = useI18n()
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')

const setTheme = (theme: 'light' | 'dark') => {
	colorMode.preference = theme
}
</script>
