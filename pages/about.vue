<template>
	<UtilsContainer tag="main" class="w-full flex justify-center items-center">
		<div class="flex flex-col gap-4">
			<h3 class="font-bold">Quem sou eu?</h3>
			<h2 class="text-3xl">Sobre mim</h2>
			<p class="flex flex-col">
				<span
					>Meu nome é Thomas Luizon, tenho 20 anos e sou um desenvolvedor
					full-stack em busca de colocar minhas habilidades técnicas em
					prática. Sou apaixonado por programação, adoro estudar e aprender
					novas tecnologias.
				</span>
				<span>
					Desenvolvo aplicações Web utilizando Next.js e React no
					front-end, e .NET Core no Back-End. Além disso tenho experiência
					com ASP.NET MVC, C#, ASP.NET Core, Typescript, Node, SQL, Docker,
					etc. </span
				><span
					>Sempre procuro atingir a melhor experiência para o usuário,
					deixando a aplicação flúida e seguindo os padrões de clean code
					para facilitar a manutenção.</span
				>
			</p>
		</div>
	</UtilsContainer>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
	title: `${t('about')} - Thomas Luizon`,
})
</script>
