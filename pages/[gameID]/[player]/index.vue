<template>
	<!-- <div class="game"><GameBoard :icons="icons" /></div> -->
	<div class="game">
		<GameBoard
			:isStealBoard="true"
			:icons="icons"
			v-if="currentTurn === 'steal'"
		/>
		<GameBoard v-else :icons="icons" />
	</div>
</template>

<script setup lang="ts">
import { currentTurn } from "@/state";
interface Props {
	icons: any;
}

const { icons } = defineProps<Props>();

// const icons = await useRandomIcons();

console.log("IC", icons);
</script>

<style lang="scss">
.game {
	@apply w-screen h-screen flex items-center justify-center bg-indigo-950;
}
</style>
