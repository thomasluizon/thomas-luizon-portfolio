<template>
	<div class="flex gap-3 items-center">
		<img :src="sun" :alt="t('sunAlt')" width="30px" class="dark:invert" />
		<Switch v-model:checked="isDark" />
		<img :src="moon" :alt="t('moonAlt')" width="30px" class="dark:invert" />
	</div>
</template>

<script setup lang="ts">
import moon from '~/assets/images/moon.svg'
import sun from '~/assets/images/sun.svg'

const isDark = ref(true)

watch(isDark, () => {
	if (isDark.value) {
		colorMode.value = 'dark'
	} else {
		colorMode.value = 'light'
	}
})

const { t } = useI18n()
const colorMode = useColorMode()
</script>
