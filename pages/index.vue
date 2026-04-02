<script setup lang="ts">
const localePath = useLocalePath()

await navigateTo(localePath('home'), {
	redirectCode: 301,
})
</script>
