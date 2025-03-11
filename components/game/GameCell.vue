<template>
	<ClientOnly>
		<button
			v-if="icon"
			class="game-cell"
			:class="{ disabled }"
			:id="index.toString()"
			@click="handleButtonClick"
		>
			<img :src="icon.component" class="game-cell__icon" /></button
	></ClientOnly>
</template>

<script setup lang="ts">
// import { client } from 'process';

interface Props {
	// icon: any;
	icon: { component: string };
	index: number;
}

defineProps<Props>();

const disabled = ref(false);

const handleButtonClick = () => {
	if (!disabled.value) disabled.value = true;

	// client.
};
</script>

<style lang="scss">
.game-cell {
	@apply transition-all ease-in-out duration-300  w-max h-max;

	&.disabled {
		@apply pointer-events-none border  border-green-400;

		// &:hover {
		// 	@apply scale-90;
		// }
	}
	.game-cell:not(.disabled):hover {
		@apply scale-110;
	}

	.game-cell__icon {
		@apply w-32 h-32;
	}
}
</style>
