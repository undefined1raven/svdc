<script lang="ts">
	let { classNames = 'size-6', color = '#000000' } = $props();
</script>

<svg
	class={classNames}
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke={color}
>
	<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
