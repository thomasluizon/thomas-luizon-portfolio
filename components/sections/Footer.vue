<template>
	<footer class="border-t border-border">
		<div
			class="max-w-6xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6"
		>
			<p class="text-sm text-muted-foreground">
				{{ $t('copyright', { year: new Date().getFullYear() }) }}
			</p>
			<LayoutSocials />
		</div>
	</footer>
</template>
