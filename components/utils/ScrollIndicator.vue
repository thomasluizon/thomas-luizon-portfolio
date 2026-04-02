<template>
	<nav
		:aria-label="t('sectionNavigation')"
		class="pointer-events-none fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 md:block"
	>
		<ul
			class="pointer-events-auto flex flex-col gap-3 rounded-full border border-border/70 bg-background/75 p-2 shadow-lg backdrop-blur"
		>
			<li v-for="routeName in routes" :key="routeName">
				<button
					type="button"
					class="group flex h-4 w-4 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
					:aria-current="currentRoute === routeName ? 'page' : undefined"
					:aria-label="t(routeName)"
					@click="navigateToRoute(routeName)"
				>
					<span
						class="h-2.5 w-2.5 rounded-full bg-muted-foreground/40 transition-all duration-200"
						:class="
							currentRoute === routeName
								? 'scale-125 bg-primary'
								: 'group-hover:bg-primary/60'
						"
					/>
				</button>
			</li>
		</ul>
	</nav>
</template>

<script setup lang="ts">
const route = useRoute()
const { t } = useI18n()
const { navigateToRoute } = useNavigation()

const currentRoute = computed(() => getRouteKey(route.name))
</script>
