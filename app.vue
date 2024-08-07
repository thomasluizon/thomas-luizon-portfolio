<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<style>
.rotate-enter-active,
.rotate-leave-active {
	transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
	opacity: 0;
	transform: translateX(20%);
	filter: grayscale(1);
}
</style>
