<template>
	<div class="max-w-6xl mx-auto px-6 w-full">
		<div
			class="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16"
		>
			<div class="flex flex-col gap-4 text-center md:text-left">
				<div ref="nameEl" class="reveal">
					<h1
						class="font-heading font-bold tracking-tight text-[clamp(2.5rem,8vw,6rem)] leading-[1.05]"
					>
						Thomas<br />Luizon
					</h1>
				</div>
				<div ref="roleEl" class="reveal" style="transition-delay: 0.15s">
					<p class="text-lg md:text-xl text-muted-foreground">
						{{ $t('fullStackDev') }}
					</p>
				</div>
			</div>

			<div ref="imgEl" class="reveal" style="transition-delay: 0.3s">
				<NuxtImg
					src="/images/profile.png"
					:alt="t('profileAlt')"
					width="320"
					height="320"
					class="rounded-full ring-2 ring-border w-48 h-48 md:w-72 md:h-72 object-cover"
					preset="default"
				/>
			</div>
		</div>

		<div
			ref="scrollEl"
			class="reveal flex flex-col items-center mt-16 md:mt-24 text-muted-foreground"
			style="transition-delay: 0.6s"
		>
			<span class="text-xs uppercase tracking-widest mb-2">{{
				$t('scrollDown')
			}}</span>
			<ChevronDown :size="20" class="animate-bounce-slow" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

const { t } = useI18n()
const { observe } = useScrollReveal()

const nameEl = ref<HTMLElement>()
const roleEl = ref<HTMLElement>()
const imgEl = ref<HTMLElement>()
const scrollEl = ref<HTMLElement>()

onMounted(() => {
	;[nameEl, roleEl, imgEl, scrollEl].forEach(el => {
		if (el.value) observe(el.value)
	})
})
</script>
