<template>
	<div class="flex w-full flex-col gap-2">
		<span class="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
			{{ $t('language') }}
		</span>
		<div
			class="inline-flex w-full items-center rounded-full border border-border/70 bg-background/80 p-1 shadow-sm"
		>
			<button
				v-for="language in languages"
				:key="language.locale"
				type="button"
				class="flex-1 rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
				:class="
					locale === language.locale
						? 'bg-primary text-primary-foreground shadow-sm'
						: 'text-muted-foreground hover:text-foreground'
				"
				:aria-pressed="locale === language.locale"
				@click="setLocale(language.locale)"
			>
				{{ language.name }}
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
const { locale, setLocale, t } = useI18n()

const languages = computed(() => [
	{
		name: t('languageEnglish'),
		locale: 'en',
	},
	{
		name: t('languagePortuguese'),
		locale: 'pt',
	},
])
</script>
