<template>
	<div class="home">
		<Button
			v-if="showStartGameButton"
			text="Start New Game"
			@click="handleStartGame"
		/>
		<Button v-else text="Join Game" @click="handleJoinGame"></Button>
	</div>
</template>
<script setup lang="ts">
import Button from "~/components/global/Button.vue";
import { buildGameObject } from "~/server/src/activities";

const router = useRouter();

const player1 = ref(false);
const player2 = ref(false);

const showStartGameButton = ref(true);
const handleStartGame = async () => {
	// console.log("HELLO", worker);
	// const res = await $fetch("/api/temporal");
	// console.log("RES", res);
	// return res;
	const game = await buildGameObject();
	console.log("GAME", game);

	router.push(game.gameID.toString());

	player1.value = true;
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

const handleJoinGame = async () => {};
</script>

<style lang="scss">
.home {
	@apply flex items-center justify-center gap-6;
}
</style>
