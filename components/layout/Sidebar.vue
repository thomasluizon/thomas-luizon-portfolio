<template>
	<button
		v-if="overlayVisible"
		type="button"
		class="fixed inset-0 z-40 bg-slate-950/45 backdrop-blur-sm md:hidden"
		:aria-label="t('closeSidebar')"
		@click="sidebarStore.closeSidebar"
	></button>
	<UtilsContainer tag="aside" :class="computedClass" id="primary-sidebar">
		<div class="flex w-full items-start justify-between gap-4">
			<NuxtLink
				:to="localePath('home')"
				class="space-y-2"
				@click="sidebarStore.closeSidebar"
			>
				<p class="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
					{{ $t('portfolio') }}
				</p>
				<div>
					<span class="block text-xl font-semibold tracking-tight">
						Thomas Luizon
					</span>
					<span class="text-sm text-muted-foreground">
						{{ $t('fullStackDev') }}
					</span>
				</div>
			</NuxtLink>
			<Button
				v-if="isMobile"
				type="button"
				variant="ghost"
				size="icon"
				:aria-label="t('closeSidebar')"
				@click="sidebarStore.closeSidebar"
			>
				<X class="h-5 w-5" />
			</Button>
		</div>

		<div class="flex w-full flex-1 flex-col justify-between gap-10">
			<LayoutRoutes />
			<div
				class="sidebar-section w-full items-start gap-6 rounded-[1.5rem] border border-border/70 bg-card/80 p-4 shadow-sm"
			>
				<LayoutSocials />
				<LayoutLanguageSelector />
				<ClientOnly fallback-tag="div" fallback="">
					<LayoutThemeSwitch />
				</ClientOnly>
			</div>
		</div>
	</UtilsContainer>
</template>

<script setup lang="ts">
import { X } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const sidebarStore = useSidebarStore()
const localePath = useLocalePath()
const { t } = useI18n()
const isMobile = ref(false)

const overlayVisible = computed(
	() => isMobile.value && sidebarStore.isSidebarOpen
)

const computedClass = computed(() =>
	cn(
		'fixed inset-y-0 left-0 z-50 flex w-[min(22rem,100vw)] flex-col justify-between gap-10 overflow-y-auto border-r border-border/70 bg-background/95 px-6 py-6 shadow-2xl backdrop-blur transition-transform duration-200 md:sticky md:top-0 md:z-20 md:min-h-dvh md:w-[19rem] md:translate-x-0 md:bg-background/80 md:px-8 md:py-8 md:shadow-none',
		overlayVisible.value ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
	)
)

const updateMobileState = () => {
	const mobileQuery = window.matchMedia('(max-width: 767px)')
	isMobile.value = mobileQuery.matches

	if (!mobileQuery.matches) {
		sidebarStore.closeSidebar()
	}
}

const handleKeydown = (event: KeyboardEvent) => {
	if (event.key === 'Escape' && sidebarStore.isSidebarOpen) {
		sidebarStore.closeSidebar()
	}
}

watch(overlayVisible, isVisible => {
	if (typeof document !== 'undefined') {
		document.body.classList.toggle('overflow-hidden', isVisible)
	}
})

onMounted(() => {
	updateMobileState()
	window.addEventListener('resize', updateMobileState, { passive: true })
	window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
	document.body.classList.remove('overflow-hidden')
	window.removeEventListener('resize', updateMobileState)
	window.removeEventListener('keydown', handleKeydown)
})
</script>
