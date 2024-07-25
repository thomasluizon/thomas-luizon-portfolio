<template>
	<Container tag="aside" class="flex flex-col justify-between items-center">
		<h1 class="text-2xl">{{ $t('portfolio') }}</h1>
		<div class="sidebar-section">
			<NuxtLink :to="localePath('index')">Home</NuxtLink>
			<NuxtLink :to="localePath('projects')">Projects</NuxtLink>
			<NuxtLink :to="localePath('contact')">Contact</NuxtLink>
		</div>
		<div class="sidebar-section">
			<button @click="setLocale('en')">en</button>
			<button @click="setLocale('pt')">pt</button>
		</div>
	</Container>
</template>

<script setup lang="ts">
const { setLocale } = useI18n()
const localePath = useLocalePath()
</script>
