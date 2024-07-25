<template>
	<UiContainer tag="aside" class="flex flex-col justify-between items-center">
		<h1 class="text-2xl">{{ $t('portfolio') }}</h1>
		<div class="sidebar-section">
			<UiRoute text="home" path="index" />
			<UiRoute text="projects" path="projects" />
			<UiRoute text="contact" path="contact" />
		</div>
		<div class="sidebar-section">
			<button @click="setLocale('en')">en</button>
			<button @click="setLocale('pt')">pt</button>
		</div>
	</UiContainer>
</template>

<script setup lang="ts">
const { setLocale } = useI18n()
</script>
