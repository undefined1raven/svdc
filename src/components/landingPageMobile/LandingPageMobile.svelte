<script>
	import { fly } from 'svelte/transition';
	import { globalStyle } from '../../../stores/globalStyle.svelte';
	import ProjectItem from './ProjectItem.svelte';
	import { onMount } from 'svelte';
	import FadeInContainer from '../common/FadeInContainer.svelte';
	import FlyInContainer from '../common/FlyInContainer.svelte';
	import BioDock from './BioDock.svelte';
	import { getProjects } from '../../../data/projects';
	let hasMounted = $state(false);
	onMount(() => {
		hasMounted = true;
	});
</script>

{#if hasMounted}
	<div
		class="mx-auto mt-10 flex h-[90%] w-[98%] flex-col items-center gap-4 overflow-hidden text-white"
	>
		<BioDock></BioDock>
		<div class="grid w-full flex-1 grid-cols-1 gap-4 overflow-y-auto">
			{#each getProjects() as project, idx}
				<FlyInContainer
					delay={idx * 50}
					classname="relative flex max-h-[477px] items-center justify-center rounded-l  w-full h-full"
				>
					<div
						class="h-[99%] w-[99%] rounded-md border-2 border-color transition-colors duration-75"
					>
						<ProjectItem {project}></ProjectItem>
					</div>
				</FlyInContainer>
			{/each}
		</div>
	</div>
{/if}

<style global>
	:global(::-webkit-scrollbar) {
		width: 8px;
	}

	:globlal(div::-webkit-scrollbar-track) {
		background: #f1f1f100;
	}

	:global(div::-webkit-scrollbar-thumb) {
		background: var(--color);
		border-radius: 6px;
	}

	:global(div::-webkit-scrollbar-thumb:hover) {
		background: var(--accentColor);
	}
</style>
