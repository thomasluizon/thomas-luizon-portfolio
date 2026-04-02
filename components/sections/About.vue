<template>
	<div class="max-w-6xl mx-auto px-6">
		<div
			class="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start"
		>
			<div ref="headingEl" class="reveal">
				<p
					class="text-sm uppercase tracking-widest text-accent font-medium mb-2"
				>
					{{ $t('whoAmI') }}
				</p>
				<h2 class="font-heading text-4xl md:text-5xl font-bold tracking-tight">
					{{ $t('aboutMe') }}
				</h2>
				<div class="w-12 h-1 bg-accent rounded-full mt-4" />
			</div>

			<div ref="textEl" class="reveal" style="transition-delay: 0.15s">
				<p
					class="text-base md:text-lg leading-relaxed text-muted-foreground max-w-prose"
				>
					{{ $t('aboutText') }}
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const { observe } = useScrollReveal()

const headingEl = ref<HTMLElement>()
const textEl = ref<HTMLElement>()

onMounted(() => {
	;[headingEl, textEl].forEach(el => {
		if (el.value) observe(el.value)
	})
})
</script>
