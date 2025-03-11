<template>
	<div>
		<Button text="Start New Game" @click="handleStartGame" />
		<Button text="Join Game" @click="handleJoinGame"></Button>
	</div>
</template>
<script setup lang="ts">
import Button from "~/components/global/Button.vue";

const handleStartGame = async () => {
	console.log("HELLO");
};

const handleJoinGame = async () => {};
</script>
