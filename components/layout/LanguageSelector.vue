<template>
	<DropdownMenu>
		<DropdownMenuTrigger
			class="p-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
		>
			{{ locale.toUpperCase() }}
		</DropdownMenuTrigger>
		<DropdownMenuContent align="end">
			<DropdownMenuItem
				v-for="language in languages"
				:key="language.locale"
				class="cursor-pointer"
				@click="() => setLocale(language.locale)"
			>
				{{ language.name }}
			</DropdownMenuItem>
		</DropdownMenuContent>
	</DropdownMenu>
</template>

<script setup lang="ts">
const languages = [
	{ name: 'English', locale: 'en' },
	{ name: 'Português', locale: 'pt' },
]

const { locale, setLocale } = useI18n()
</script>
