<template>
	<div class="game"><GameBoard :icons="icons" /></div>
</template>

<script setup lang="ts">
interface Props {}

defineProps<Props>();

const icons = await useRandomIcons();

console.log("IC", icons);
</script>

<style lang="scss">
.game {
	@apply w-screen h-screen flex items-center justify-center bg-indigo-950;
}
</style>
