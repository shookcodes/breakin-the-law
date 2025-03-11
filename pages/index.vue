<template>
	<div class="home">
		<Button text="Start New Game" @click="handleStartGame" />
		<Button text="Join Game" @click="handleJoinGame"></Button>
	</div>
</template>
<script setup lang="ts">
import Button from "~/components/global/Button.vue";
import { buildGameObject } from "~/server/src/activities";
const handleStartGame = async () => {
	// console.log("HELLO", worker);
	// const res = await $fetch("/api/temporal");
	// console.log("RES", res);
	// return res;
	const game = await buildGameObject();
	console.log("GAME", game);
};

onMounted(async () => {
	const res = await $fetch("/api/temporal");

	console.log("RES", res);
});

const handleJoinGame = async () => {};
</script>

<style lang="scss">
.home {
	@apply flex items-center justify-center gap-6;
}
</style>
