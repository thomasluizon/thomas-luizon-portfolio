<template>
	<UtilsScrollRouter>
		<div>
			<UtilsHamburger />
			<LayoutSidebar />
		</div>
		<slot />
	</UtilsScrollRouter>
</template>

<script setup lang="ts">
const projectsStore = useProjectsStore()
const { t, locale } = useI18n()

const i18nHead = useLocaleHead({
	addDirAttribute: true,
	identifierAttribute: 'id',
	addSeoAttributes: true,
})

const title = `${t('portfolio')} - Thomas Luizon`
useHead({
	title,
	htmlAttrs: {
		lang: i18nHead.value.htmlAttrs.lang || locale,
		dir: i18nHead.value.htmlAttrs.dir,
	},
	link: [...(i18nHead.value.link || [])],
	meta: [
		...(i18nHead.value.meta || []),
		{ name: 'description', content: title },
	],
})

onMounted(async () => {
	if (!projectsStore.hasLoaded) {
		await projectsStore.fetchProjects()
	}
})
</script>
