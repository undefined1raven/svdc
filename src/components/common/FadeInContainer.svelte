<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	const { delay = 0, duration = 500, children, classname = '' } = $props();
	let isMounted = $state(false);

	onMount(() => {
		isMounted = true;
	});
</script>

{#if isMounted}
	<div class={classname} in:fade={{ duration, delay }}>
		{@render children()}
	</div>
{/if}
