<template>
	<Container tag="aside" class="flex flex-col justify-between">
		<h1 class="text-2xl">{{ $t('home') }}</h1>
		<div>a</div>
		<div class="flex gap-4">
			<button @click="setLocale('en')">en</button>
			<button @click="setLocale('pt')">pt</button>
		</div>
	</Container>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()
</script>
