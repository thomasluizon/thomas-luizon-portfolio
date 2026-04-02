<template>
	<button
		class="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
		:aria-label="t('switchButton')"
		@click="toggle"
	>
		<Sun v-if="isDark" :size="18" />
		<Moon v-else :size="18" />
	</button>
</template>

<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'

const { t } = useI18n()
const colorMode = useColorMode()
const isDark = ref(colorMode.preference === 'dark')

const toggle = () => {
	isDark.value = !isDark.value
	colorMode.preference = isDark.value ? 'dark' : 'light'
}
</script>
