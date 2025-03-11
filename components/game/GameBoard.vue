<template>
	<div class="game-board"></div>
</template>

<script setup lang="ts">
interface Props {}

defineProps<Props>();
</script>

<style lang="scss">
.game-board {
	@apply border-pink-400;
}
</style>
