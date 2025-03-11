<template>
	<div class="home">
		<h1>BREAKIN' THE LAW</h1>
		<Button
			v-if="showStartGameButton"
			text="Start New Game"
			@click="handleStartGame"
		/>
		<Button v-else text="Join Game" @click="handleJoinGame"></Button>
	</div>
</template>
<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import Button from "~/components/global/Button.vue";
import { buildGameObject } from "~/server/src/activities";

const router = useRouter();

const player1 = ref(false);
const player2 = ref(false);

const showStartGameButton = ref(true);

const game = ref();
const handleStartGame = async () => {
	// console.log("HELLO", worker);
	// const res = await $fetch("/api/temporal");
	// console.log("RES", res);
	// return res;
	game.value = await buildGameObject();
	console.log("GAME", game);

	router.push(`${game.value.gameID.toString()}/player1`);

	player1.value = true;
};

const handleJoinGame = async () => {
	router.push(`${game.value.gameID.toString()}/player2`);
	player2.value = true;
};
watchEffect(() => {
	if (player1.value) {
		showStartGameButton.value = false;
	}
});

onMounted(async () => {
	const res = await $fetch("/api/temporal");

	console.log("RES", res);
});
</script>

<style lang="scss">
.home {
	@apply flex flex-col items-center justify-center gap-6;
}
</style>
