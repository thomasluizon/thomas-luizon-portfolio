<template>
	<DropdownMenu>
		<DropdownMenuTrigger class="menu-hover">{{
			$t('language')
		}}</DropdownMenuTrigger>
		<DropdownMenuContent>
			<DropdownMenuItem
				v-for="language in languages"
				:key="language.locale"
				@click="() => setLocale(language.locale)"
				>{{ language.name }}</DropdownMenuItem
			>
		</DropdownMenuContent>
	</DropdownMenu>
</template>

<script setup lang="ts">
const languages = [
	{
		name: 'English',
		locale: 'en',
	},
	{
		name: 'Português',
		locale: 'pt',
	},
]

const { setLocale } = useI18n()
</script>
