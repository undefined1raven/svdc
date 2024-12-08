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
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
	/>
</svg>
