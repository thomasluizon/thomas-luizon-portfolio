<template>
	<UtilsContainer tag="main" class="w-full flex justify-center items-center">
		<div class="flex flex-col gap-4">
			<h3 class="font-bold">Quem sou eu?</h3>
			<h2 class="text-3xl">Sobre mim</h2>
			<p class="flex flex-col max-w-lg">
				<span>
					{{ $t('about1') }}
				</span>
				<span>
					{{ $t('about2') }}
				</span>
				<span>
					{{ $t('about3') }}
				</span>
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
