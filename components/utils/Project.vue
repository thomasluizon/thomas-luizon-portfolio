<template>
	<div class="h-full flex flex-col items-center gap-6 max-[500px]:gap-4 p-4">
		<div
			class="image-container w-full max-w-md max-[500px]:w-full max-[500px]:max-w-full"
		>
			<NuxtImg
				:src="project.img"
				alt="Imagem de um projeto"
				class="project-img"
				preset="default"
			/>
		</div>
		<p class="text-center max-[500px]:text-sm">{{ project.desc }}</p>
		<div
			class="flex items-center gap-4 max-[500px]:gap-2 max-[500px]:flex-col"
		>
			<a
				:href="project.repo"
				class="project-btn w-full text-center max-[500px]:w-auto"
				target="_blank"
				>Repo</a
			>
			<a
				:href="project.demo"
				class="project-btn w-full text-center max-[500px]:w-auto"
				target="_blank"
				>Demo</a
			>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	project: Project
}>()

const project = props.project
</script>

<style scoped>
.image-container {
	@apply w-1/2 max-h-[500px] overflow-hidden rounded-2xl;
}

.project-img {
	@apply w-full h-full object-cover;
}

.project-btn {
	@apply inline-block px-4 py-2 border rounded-md border-slate-900 dark:border-slate-50 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors duration-500;
}
</style>
