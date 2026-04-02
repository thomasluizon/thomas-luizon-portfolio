<template>
	<nav :aria-label="$t('primaryNavigation')" class="w-full">
		<ul class="sidebar-section w-full items-start gap-2">
			<li v-for="route in routes" :key="route" class="w-full">
				<UtilsRoute :route="route" />
			</li>
		</ul>
	</nav>
</template>
