<script lang="ts">
	import CodeBracketDeco from '../../deco/CodeBracketDeco.svelte';
	import RedirectDeco from '../../deco/RedirectDeco.svelte';
	import { globalStyle } from '../../../stores/globalStyle.svelte';
	import type { IProject } from '../../../data/projects';
	import BookDeco from '../../deco/BookDeco.svelte';
	import FlyInContainer from '../common/FlyInContainer.svelte';
	const iconClass = 'w-full h-full transition-colors text-color rounded-md p-1';
	const buttonClass = 'w-10 w-8 transition-colors hover:bg-accent20  text-color rounded-md';
	const { project } = $props();
	const typedProject = project as IProject;
</script>

<div class="flex h-full w-full bg-color20 flex-col gap-1 overflow-y-auto p-5">
	{#if typedProject.sourceCode || typedProject.liveDeployment || typedProject.documentationLink || project.status.label}
		<div class="flex h-10 flex-row justify-start gap-3">
			{#if typedProject.sourceCode}
				<a
					target="_blank"
					href={typedProject.sourceCode}
					title="View source code"
					class={buttonClass}
					><CodeBracketDeco color={$globalStyle.color} classNames={iconClass}></CodeBracketDeco></a
				>
			{/if}
			{#if typedProject.liveDeployment}
				<a
					target="_blank"
					href={typedProject.liveDeployment}
					title="View live deployment"
					class={buttonClass}
				>
					<RedirectDeco color={$globalStyle.color} classNames={iconClass}></RedirectDeco>
				</a>
			{/if}
			{#if typedProject.documentationLink}
				<a
					target="_blank"
					href={typedProject.documentationLink}
					title="Visit documentation"
					class={buttonClass}
				>
					<BookDeco color={$globalStyle.color} classNames={iconClass}></BookDeco>
				</a>
			{/if}
		</div>
	{/if}
	<div class="flex h-16 w-full flex-row items-center gap-2">
		{#if typedProject.logo && typedProject.logoProps}
			<svelte:component this={typedProject.logo} {...typedProject.logoProps}></svelte:component>
		{/if}
		<span class="text-3xl text-text">{typedProject.name}</span>
	</div>
	<div class="flex">
		<span class="overflow-y-hidden text-[18px] text-text">{typedProject.description}</span>
	</div>
</div>
