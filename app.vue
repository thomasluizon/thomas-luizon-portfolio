<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
	transition:
		opacity 0.24s ease,
		transform 0.24s ease,
		filter 0.24s ease;
}

.page-enter-from,
.page-leave-to {
	opacity: 0;
	transform: translateY(1rem);
	filter: blur(6px);
}

@media (prefers-reduced-motion: reduce) {
	.page-enter-active,
	.page-leave-active {
		transition: none;
	}

	.page-enter-from,
	.page-leave-to {
		transform: none;
		filter: none;
	}
}
</style>
