<template>
	<div class="sidebar-section">
		<UtilsRoute v-for="route in routes" :key="route" :route="route" />
	</div>
</template>

<script setup lang="ts">
const routes = ['home', 'projects', 'contact']
</script>
