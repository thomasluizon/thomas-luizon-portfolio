<template>
	<UtilsContainer tag="main" class="flex flex-1 items-center">
		<section class="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
			<div
				class="rounded-[2rem] border border-border/70 bg-card/80 p-8 shadow-xl shadow-primary/5"
			>
				<p
					class="text-sm font-semibold uppercase tracking-[0.28em] text-primary/80"
				>
					{{ $t('contactMe') }}
				</p>
				<h1 class="mt-4 text-4xl font-semibold tracking-tight">
					{{ $t('contact') }}
				</h1>
				<p class="mt-6 text-base leading-8 text-muted-foreground">
					{{ $t('contactIntro') }}
				</p>
				<div
					class="mt-8 rounded-[1.5rem] border border-border/70 bg-background/75 p-5"
				>
					<p class="text-sm font-medium text-muted-foreground">
						{{ $t('contactDirectEmail') }}
					</p>
					<a
						:href="mailtoUrl"
						class="mt-2 inline-flex text-base font-medium text-primary underline-offset-4 hover:underline"
					>
						{{ config.public.email }}
					</a>
				</div>
			</div>

			<form
				:action="apiUrl"
				method="POST"
				class="rounded-[2rem] border border-border/70 bg-background/75 p-6 shadow-lg backdrop-blur sm:p-8"
			>
				<div class="grid gap-5">
					<div class="grid gap-2">
						<label class="text-sm font-medium" for="contact-email">
							{{ t('email') }}
						</label>
						<input
							id="contact-email"
							type="email"
							name="email"
							:placeholder="t('email')"
							class="form-input"
							autocomplete="email"
							required
						/>
					</div>

					<div class="grid gap-2">
						<label class="text-sm font-medium" for="contact-name">
							{{ t('name') }}
						</label>
						<input
							id="contact-name"
							type="text"
							name="name"
							:placeholder="t('name')"
							class="form-input"
							autocomplete="name"
							required
						/>
					</div>

					<div class="grid gap-2">
						<label class="text-sm font-medium" for="contact-message">
							{{ t('message') }}
						</label>
						<textarea
							id="contact-message"
							:placeholder="t('message')"
							name="message"
							rows="6"
							class="form-input min-h-40"
							required
						></textarea>
					</div>
				</div>

				<Button class="mt-6 w-full sm:w-auto" type="submit">
					{{ $t('send') }}
				</Button>
			</form>
		</section>
	</UtilsContainer>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'

const { t } = useI18n()

const config = useRuntimeConfig()
const apiUrl = computed(() => `https://formsubmit.co/${config.public.email}`)
const mailtoUrl = computed(() => `mailto:${config.public.email}`)
const pageTitle = computed(() => t('contact'))
const pageDescription = computed(() => t('contactIntro'))

useSeoMeta({
	title: () => pageTitle.value,
	description: () => pageDescription.value,
})
</script>

<style scoped>
.form-input {
	@apply rounded-2xl border border-border/70 bg-card/80 px-4 py-3 text-base outline-none transition-colors duration-200 placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/40 dark:bg-slate-900 resize-none;
}
</style>
