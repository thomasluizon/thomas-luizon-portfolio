<template>
	<UtilsScrollRouter>
		<UtilsHamburger />
		<LayoutSidebar />
		<div class="flex flex-1">
			<slot />
		</div>
	</UtilsScrollRouter>
</template>

<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()
const { t, locale } = useI18n()

const i18nHead = useLocaleHead({
	addDirAttribute: true,
	identifierAttribute: 'id',
	addSeoAttributes: true,
})

const canonicalUrl = computed(() => {
	return new URL(route.fullPath || '/home', config.public.siteUrl).toString()
})

const siteDescription = computed(() => t('siteDescription'))

useHead(() => ({
	titleTemplate: titleChunk =>
		titleChunk
			? `${titleChunk} | Thomas Luizon`
			: `Thomas Luizon | ${t('portfolio')}`,
	htmlAttrs: {
		lang: i18nHead.value.htmlAttrs.lang || locale.value,
		dir: i18nHead.value.htmlAttrs.dir,
	},
	link: [
		...(i18nHead.value.link || []).filter(
			(link: { rel?: string }) => link.rel !== 'canonical'
		),
		{ rel: 'canonical', href: canonicalUrl.value },
	],
	meta: [...(i18nHead.value.meta || [])],
}))

useSeoMeta({
	description: () => siteDescription.value,
	ogType: 'website',
	ogSiteName: 'Thomas Luizon',
	ogDescription: () => siteDescription.value,
	ogUrl: () => canonicalUrl.value,
	ogImage: () => `${config.public.siteUrl}/images/profile.png`,
	twitterCard: 'summary_large_image',
	twitterDescription: () => siteDescription.value,
})
</script>
