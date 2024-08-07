<template>
	<UtilsContainer tag="main" class="w-full flex justify-center items-center">
		<div class="flex flex-col gap-4">
			<h2 class="font-bold">{{ $t('whoAmI') }}</h2>
			<h3 class="text-3xl">{{ $t('aboutMe') }}</h3>
			<p class="max-w-lg text-justify max-[375px]:text-sm">
				{{ $t('aboutText') }}
			</p>
		</div>
	</UtilsContainer>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
	title: `${t('about')} - Thomas Luizon`,
})
</script>
