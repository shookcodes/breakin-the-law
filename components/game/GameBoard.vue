<template>
	<div class="board">
		<h1>
			{{ currentTurn === "steal" ? "Guess what was stolen" : "Steal an item" }}
		</h1>
		<div class="game-board" v-if="icons.length">
			<div v-for="(icon, index) in icons" :key="icon.path" class="game-cell">
				<GameCell
					v-if="icon"
					:icon="icon"
					:index="index"
					:isStealCell="isStealBoard"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import GameCell from "~/components/game/GameCell.vue";
import { currentTurn } from "~/state";

interface Props {
	isStealBoard?: boolean;
}

defineProps<Props>();

const icons = await useRandomIcons();
</script>

<style lang="scss">
.game-board {
	@apply grid grid-cols-3 grid-rows-3 gap-8 w-max h-max;
}
</style>
