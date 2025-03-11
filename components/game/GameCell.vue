<template>
	<div class="game-cell"></div>
</template>

<script setup lang="ts">
interface Props {}

defineProps<Props>();
</script>

<style lang="scss">
.game-cell {
	@apply w-32 h-32 transition-all ease-in-out duration-300;
}
</style>
