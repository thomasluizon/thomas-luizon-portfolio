<template>
	<UtilsContainer tag="main" class="w-full flex justify-center items-center">
		<Carousel class="">
			<CarouselContent>
				<CarouselItem>Project 1</CarouselItem>
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	</UtilsContainer>
</template>

<script setup lang="ts">
const { t } = useI18n()

const data = ref(null)

onMounted(async () => {
	try {
		const response = await fetch('/api/githubProjects')
		data.value = await response.json()
		console.log(data.value)
	} catch (error) {
		console.error(error)
	}
})

useHead({
	title: `${t('projects')} - Thomas Luizon`,
})
</script>
