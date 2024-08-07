<template>
	<div class="flex gap-3 items-center justify-center">
		<NuxtImg
			src="/images/sun.svg"
			:alt="t('sunAlt')"
			width="30px"
			class="dark:invert cursor-pointer"
			@click="() => (isDark = false)"
			preset="default"
		/>
		<Switch :aria-label="t('switchButton')" v-model:checked="isDark" />
		<NuxtImg
			src="/images/moon.svg"
			:alt="t('moonAlt')"
			width="30px"
			class="dark:invert cursor-pointer"
			@click="() => (isDark = true)"
			preset="default"
		/>
	</div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const colorMode = useColorMode()
const isDark = ref(colorMode.preference == 'dark')

watch(isDark, () => {
	if (isDark.value) {
		colorMode.preference = 'dark'
	} else {
		colorMode.preference = 'light'
	}
})
</script>
