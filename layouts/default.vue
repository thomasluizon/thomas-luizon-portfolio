<template>
	<div class="min-h-screen">
		<LayoutNavbar />
		<main>
			<slot />
		</main>
	</div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()

const i18nHead = useLocaleHead({
	addDirAttribute: true,
	identifierAttribute: 'id',
	addSeoAttributes: true,
})

useHead({
	title: `Thomas Luizon - ${t('fullStackDev')}`,
	htmlAttrs: {
		lang: i18nHead.value.htmlAttrs.lang || locale,
		dir: i18nHead.value.htmlAttrs.dir,
	},
	link: [...(i18nHead.value.link || [])],
	meta: [
		...(i18nHead.value.meta || []),
		{
			name: 'description',
			content: `Thomas Luizon - ${t('fullStackDev')}`,
		},
	],
})
</script>
