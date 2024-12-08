<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	const {
		delay = 0,
		duration = 500,
		children,
		classname = '',
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
		out:fade={{ duration: outDuration, delay: outDelay }}
		in:fade={{ duration, delay }}
	>
		{@render children()}
	</div>
{/if}
