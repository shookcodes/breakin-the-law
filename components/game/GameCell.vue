<template>
	<button class="game-cell">
		<img :src="icon.component" class="game-cell__icon" />
	</button>
</template>

<script setup lang="ts">
interface Props {
	icon: any;
}

defineProps<Props>();
</script>

<style lang="scss">
.game-cell {
	@apply transition-all ease-in-out duration-300  w-max h-max;

	&:hover {
		@apply scale-110;
	}

	.game-cell__icon {
		@apply w-32 h-32;
	}
}
</style>
