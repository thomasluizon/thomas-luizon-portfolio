<template>
	<UtilsContainer
		tag="aside"
		class="flex flex-col justify-between items-center"
	>
		<h1 class="text-2xl">{{ $t('portfolio') }}</h1>
		<LayoutRoutes />
		<div class="sidebar-section gap-6">
			<LayoutSocials />
			<LayoutLanguageSelector />
		</div>
	</UtilsContainer>
</template>
