<template>
	<header
		:class="[
			'fixed top-0 w-full z-50 transition-all duration-300',
			scrolled
				? 'bg-background/90 backdrop-blur-md border-b border-border'
				: 'bg-transparent',
		]"
	>
		<nav
			class="max-w-6xl mx-auto flex items-center justify-between px-6 py-4"
		>
			<a
				href="#hero"
				class="font-heading font-semibold text-lg tracking-tight hover:text-accent transition-colors"
			>
				Thomas Luizon
			</a>

			<div class="hidden md:flex items-center gap-8">
				<a
					v-for="section in navSections"
					:key="section.id"
					:href="`#${section.id}`"
					:class="[
						'text-sm font-medium transition-colors relative',
						activeSection === section.id
							? 'text-foreground'
							: 'text-muted-foreground hover:text-foreground',
					]"
				>
					{{ $t(section.label) }}
					<span
						v-if="activeSection === section.id"
						class="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full"
					/>
				</a>
				<div class="flex items-center gap-2 ml-4 pl-4 border-l border-border">
					<LayoutThemeSwitch />
					<LayoutLanguageSelector />
				</div>
			</div>

			<button
				class="md:hidden p-2 -mr-2 text-foreground"
				:aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
				@click="mobileMenuOpen = !mobileMenuOpen"
			>
				<Menu :size="24" />
			</button>
		</nav>
	</header>

	<Teleport to="body">
		<Transition name="overlay">
			<div
				v-if="mobileMenuOpen"
				class="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center gap-8 md:hidden"
			>
				<button
					class="absolute top-4 right-4 p-2 text-foreground"
					aria-label="Close menu"
					@click="mobileMenuOpen = false"
				>
					<X :size="24" />
				</button>

				<a
					v-for="section in navSections"
					:key="section.id"
					:href="`#${section.id}`"
					class="font-heading text-3xl font-semibold text-foreground hover:text-accent transition-colors"
					@click="mobileMenuOpen = false"
				>
					{{ $t(section.label) }}
				</a>
				<div class="flex items-center gap-4 mt-8">
					<LayoutThemeSwitch />
					<LayoutLanguageSelector />
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'

const { t } = useI18n()
const activeSection = useActiveSection(['hero', 'about', 'projects', 'contact'])
const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const navSections = [
	{ id: 'hero', label: 'home' },
	{ id: 'about', label: 'about' },
	{ id: 'projects', label: 'projects' },
	{ id: 'contact', label: 'contact' },
]

watch(mobileMenuOpen, open => {
	document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
	const onScroll = () => {
		scrolled.value = window.scrollY > 50
	}
	window.addEventListener('scroll', onScroll, { passive: true })
	onBeforeUnmount(() => {
		window.removeEventListener('scroll', onScroll)
		document.body.style.overflow = ''
	})
})
</script>

<style scoped>
.overlay-enter-active,
.overlay-leave-active {
	transition: opacity 0.3s ease;
}

.overlay-enter-from,
.overlay-leave-to {
	opacity: 0;
}
</style>
