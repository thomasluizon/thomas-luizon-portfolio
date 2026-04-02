<template>
	<Button
		type="button"
		variant="outline"
		size="icon"
		class="fixed left-4 top-4 z-40 border-border/70 bg-background/85 shadow-lg backdrop-blur md:hidden"
		aria-controls="primary-sidebar"
		:aria-expanded="sidebarStore.isSidebarOpen"
		:aria-label="t(sidebarStore.isSidebarOpen ? 'menuClose' : 'menuOpen')"
		@click="sidebarStore.toggleSidebar"
	>
		<Menu class="h-5 w-5" />
	</Button>
</template>

<script setup lang="ts">
import { Menu } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const sidebarStore = useSidebarStore()
const { t } = useI18n()
</script>
