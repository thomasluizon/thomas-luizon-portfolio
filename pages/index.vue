<template>
	<div>
		<section id="hero" class="min-h-screen flex items-center justify-center pt-20">
			<SectionsHero />
		</section>

		<section id="about" class="py-24 md:py-32">
			<SectionsAbout />
		</section>

		<section id="projects" class="py-24 md:py-32">
			<SectionsProjects />
		</section>

		<section id="contact" class="py-24 md:py-32">
			<SectionsContact />
		</section>

		<SectionsFooter />
	</div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
	title: `Thomas Luizon - ${t('fullStackDev')}`,
})
</script>
