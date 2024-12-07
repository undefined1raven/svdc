<script>
	import { fly } from 'svelte/transition';
	import { globalStyle } from '../../../stores/globalStyle.svelte';
	import ProjectItem from './ProjectItem.svelte';
	import { onMount } from 'svelte';
	import FadeInContainer from '../common/FadeInContainer.svelte';
	import FlyInContainer from '../common/FlyInContainer.svelte';
	import BioDock from './BioDock.svelte';
	import { getProjects } from '../../../data/projects';

	let examples = [
		{ title: 'Example 1', description: 'This is the first example.' },
		{ title: 'Example 2', description: 'This is the second example.' },
		{ title: 'Example 3', description: 'This is the third example.' },
		{ title: 'Example 4', description: 'This is the fourth example.' },
		{ title: 'Example 5', description: 'This is the fifth example.' },
		{ title: 'Example 6', description: 'This is the sixth example.' },
		{ title: 'Example 7', description: 'This is the seventh example.' },
		{ title: 'Example 8', description: 'This is the eighth example.' },
		{ title: 'Example 9', description: 'This is the ninth example.' },
		{ title: 'Example 10', description: 'This is the tenth example.' }
	];

	let hasMounted = $state(false);
	onMount(() => {
		hasMounted = true;
	});
</script>

{#if hasMounted}
	<div
		class="mx-auto mt-10 flex h-screen w-[90%] flex-col items-center gap-4 overflow-hidden text-white"
	>
		<BioDock></BioDock>
		<div
			class="mb-20 grid w-full flex-1 grid-cols-[repeat(auto-fill,minmax(460px,1fr))] overflow-y-auto p-4"
		>
			{#each getProjects() as project, idx}
				<FlyInContainer
					delay={idx * 50}
					classname="relative flex max-h-[477px] min-h-[477px] items-center justify-center rounded-l p-4 w-full h-full"
				>
					<div
						class="h-[99%] w-[99%] rounded-md border-2 border-color transition-colors duration-75"
					>
						<ProjectItem {project}></ProjectItem>
					</div>
					<FadeInContainer delay={idx * 120} duration={150}>
						<div class="absolute right-0 top-0 h-9 w-1 rounded-md bg-color"></div>
						<div class="absolute bottom-0 right-0 h-9 w-1 rounded-md bg-color"></div>
						<div class="absolute right-0 top-0 h-1 w-9 rounded-md bg-color"></div>
						<div class="absolute -left-1 top-0 h-9 w-1 rounded-md bg-color"></div>
						<div class="absolute -left-1 bottom-0 h-9 w-1 rounded-md bg-color"></div>
						<div class="absolute -left-1 top-0 h-1 w-9 rounded-md bg-color"></div>
						<div class="absolute -bottom-1 -left-1 h-1 w-9 rounded-md bg-color"></div>
						<div class="absolute -bottom-1 right-0 h-1 w-9 rounded-md bg-color"></div>
					</FadeInContainer>
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
