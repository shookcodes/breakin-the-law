<template>
	<button
		v-if="text"
		class="btn"
		:class="{ secondary: variant === 'secondary' }"
	>
		{{ text }}
	</button>
</template>

<script setup lang="ts">
interface Props {
	text: string;
	variant?: string;
}

defineProps<Props>();
</script>

<style lang="scss"></style>
