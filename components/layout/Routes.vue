<template>
	<div class="sidebar-section gap-2">
		<UtilsRoute v-for="route in routes" :key="route" :route="route" />
	</div>
</template>
