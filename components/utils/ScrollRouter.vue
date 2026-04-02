<template>
	<div class="relative isolate min-h-dvh overflow-hidden">
		<div
			class="pointer-events-none absolute left-[-12rem] top-[-8rem] h-72 w-72 rounded-full bg-primary/15 blur-3xl"
		/>
		<div
			class="pointer-events-none absolute bottom-[-10rem] right-[-10rem] h-80 w-80 rounded-full bg-accent/50 blur-3xl"
		/>
		<div class="relative flex min-h-dvh flex-col md:flex-row">
			<UtilsScrollIndicator />
			<slot />
		</div>
	</div>
</template>
