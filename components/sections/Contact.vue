<template>
	<div class="max-w-6xl mx-auto px-6">
		<div class="max-w-lg mx-auto">
			<div ref="headingEl" class="reveal text-center mb-10">
				<p
					class="text-sm uppercase tracking-widest text-accent font-medium mb-2"
				>
					{{ $t('letsConnect') }}
				</p>
				<h2
					class="font-heading text-4xl md:text-5xl font-bold tracking-tight"
				>
					{{ $t('contactMe') }}
				</h2>
				<div class="w-12 h-1 bg-accent rounded-full mt-4 mx-auto" />
			</div>

			<form
				ref="formEl"
				:action="apiUrl"
				method="POST"
				class="reveal flex flex-col gap-5"
				style="transition-delay: 0.15s"
			>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div class="flex flex-col gap-1.5">
						<label for="email" class="text-sm font-medium text-foreground">
							{{ $t('emailLabel') }}
						</label>
						<input
							id="email"
							type="email"
							name="email"
							:placeholder="$t('emailLabel')"
							class="form-input"
							required
							autocomplete="email"
						/>
					</div>
					<div class="flex flex-col gap-1.5">
						<label for="name" class="text-sm font-medium text-foreground">
							{{ $t('nameLabel') }}
						</label>
						<input
							id="name"
							type="text"
							name="name"
							:placeholder="$t('nameLabel')"
							class="form-input"
							required
							autocomplete="name"
						/>
					</div>
				</div>

				<div class="flex flex-col gap-1.5">
					<label for="message" class="text-sm font-medium text-foreground">
						{{ $t('messageLabel') }}
					</label>
					<textarea
						id="message"
						name="message"
						:placeholder="$t('messageLabel')"
						class="form-input min-h-[140px]"
						required
					/>
				</div>

				<Button type="submit" class="w-full cursor-pointer">
					{{ $t('send') }}
				</Button>
			</form>
		</div>
	</div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const config = useRuntimeConfig()
const apiUrl = `https://formsubmit.co/${config.public.email}`

const { observe } = useScrollReveal()
const headingEl = ref<HTMLElement>()
const formEl = ref<HTMLElement>()

onMounted(() => {
	;[headingEl, formEl].forEach(el => {
		if (el.value) observe(el.value)
	})
})
</script>

<style scoped>
.form-input {
	@apply w-full rounded-lg border border-input bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent resize-none;
}
</style>
