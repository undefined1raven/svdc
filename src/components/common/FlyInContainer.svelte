<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	const {
		x = 0,
		y = -30,
		delay = 0,
		duration = 500,
		children,
		classname = '',
		outY = 0,
		outX = 0,
		outDuration = 0,
		outDelay = 0
	} = $props();
	let isMounted = $state(false);

	onMount(() => {
		isMounted = true;
	});
</script>

{#if isMounted}
	<div
		class={classname}
		out:fly={{ x: outX, y: outY, duration: outDuration, delay: outDelay }}
		in:fly={{ x, y, duration, delay }}
	>
		{@render children()}
	</div>
{/if}
