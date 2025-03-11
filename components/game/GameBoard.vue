<template>
	<div class="game-board" v-if="icons.length">
		<div v-for="icon in icons" :key="icon.path" class="game-cell">
			<GameCell v-if="icon" :icon="icon" />
		</div>
	</div>
</template>

<script setup lang="ts">
import GameCell from "~/components/game/GameCell.vue";

interface Props {}

defineProps<Props>();

const icons = await useRandomIcons();
</script>

<style lang="scss">
.game-board {
	@apply grid grid-cols-3 grid-rows-3 gap-8 w-max h-max;
}
</style>
