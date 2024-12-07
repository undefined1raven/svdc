<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	const { x = 0, y = -30, delay = 0, duration = 500, children, classname = '' } = $props();
	let isMounted = $state(false);

	onMount(() => {
		isMounted = true;
	});
</script>

{#if isMounted}
	<div class={classname} in:fly={{ x, y, duration, delay }}>
		{@render children()}
	</div>
{/if}
