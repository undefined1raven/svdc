<script>
	import { onMount } from 'svelte';
	import Main from '../framework/Main.svelte';

	onMount(() => {
		if (typeof window === undefined) {
			window.location.href = '/#/';
		}
	});
</script>

<Main></Main>
