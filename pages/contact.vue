<template>
	<UtilsContainer
		tag="main"
		class="w-full flex flex-col justify-center items-center gap-4"
	>
		<h2 class="text-2xl">{{ $t('contactMe') }}</h2>
		<form
			:action="apiUrl"
			method="POST"
			class="flex flex-col gap-2 w-full max-w-md"
		>
			<div class="flex gap-2 max-[580px]:flex-col">
				<input
					type="email"
					name="email"
					placeholder="Email"
					class="form-input"
					required
				/>
				<input
					type="text"
					name="name"
					:placeholder="t('name')"
					class="form-input"
					required
				/>
			</div>
			<textarea
				:placeholder="t('message')"
				name="message"
				class="form-input"
				required
			/>

			<Button type="submit">{{ $t('send') }}</Button>
		</form>
	</UtilsContainer>
</template>

<script setup lang="ts">
const { t } = useI18n()

const config = useRuntimeConfig()
const apiUrl = `https://formsubmit.co/${config.public.email}`

useHead({
	title: `${t('contact')} - Thomas Luizon`,
})
</script>

<style scoped>
.form-input {
	@apply border rounded-lg outline-none p-2 dark:bg-slate-900 resize-none;
}
</style>
