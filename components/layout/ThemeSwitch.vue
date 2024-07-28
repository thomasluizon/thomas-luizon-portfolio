<template>
	<div class="flex gap-3 items-center justify-center">
		<img
			:src="sun"
			:alt="t('sunAlt')"
			width="30px"
			class="dark:invert cursor-pointer"
			@click="() => (isDark = false)"
		/>
		<Switch v-model:checked="isDark" />
		<img
			:src="moon"
			:alt="t('moonAlt')"
			width="30px"
			class="dark:invert cursor-pointer"
			@click="() => (isDark = true)"
		/>
	</div>
</template>

<script setup lang="ts">
import moon from '~/assets/images/moon.svg'
import sun from '~/assets/images/sun.svg'

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
