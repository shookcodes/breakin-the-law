<template>
	<div class="game-board" v-if="icons.length">
		<div v-for="(icon, index) in icons" :key="icon.path" class="game-cell">
			<GameCell v-if="icon" :icon="icon" :index="index" />
		</div>
	</div>
</template>

<script setup lang="ts">
import GameCell from "~/components/game/GameCell.vue";

interface Props {
	steal: true;
}

defineProps<Props>();

const icons = await useRandomIcons();
</script>

<style lang="scss">
.game-board {
	@apply grid grid-cols-3 grid-rows-3 gap-8 w-max h-max;
}
</style>
