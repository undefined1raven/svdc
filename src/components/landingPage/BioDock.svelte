<script>
	import { fly } from 'svelte/transition';
	import FlyInContainer from '../common/FlyInContainer.svelte';
	import FadeInContainer from '../common/FadeInContainer.svelte';
	import { onMount } from 'svelte';
	import { screenSize } from '../../../stores/screenSize.svelte';

	const knowledgeTags = [
		'React',
		'React Native',
		'JS and TS',
		'Svelte',
		'Node JS',
		'Express JS',
		'Next JS',
		'Tailwind CSS',
		'MySQL DBs',
		'NoSQL DBs',
		'HTML / CSS',
		'& more'
	];

	let showKnowledgeTags = $state(false);

	onMount(() => {
		screenSize.subscribe((value) => {
			if (value.width > 0.93 * window.screen.width) {
				showKnowledgeTags = true;
			} else {
				showKnowledgeTags = false;
			}
		});
	});
</script>

<div
	style="backdrop-filter: blur(10px);"
	in:fly={{ y: -7, duration: 300 }}
	class="flex flex-col md:flex-row sm:flex-row lg:flex-row w-full items-center justify-center gap-16 rounded-2xl border-l border-r border-color bg-color20 p-4 text-center text-2xl sm:w-full md:w-[80%] lg:w-[60%]"
>
	{#if showKnowledgeTags}
		<div class="grid flex-1 grid-cols-2 gap-2 border-r border-color pr-10 md:w-[20%]">
			{#each knowledgeTags as tag, ix}
				<FlyInContainer delay={15 * ix} classname="min-w-[50px]">
					<div class="w-full h-full text-center flex items-center justify-center select-none rounded-md bg-color20 p-1 text-[15px] text-text">{tag}</div>
				</FlyInContainer>
			{/each}
		</div>
	{/if}
	<FlyInContainer x={-7}>
		<div class="h-32 w-32 sm:w-52 sm:h-52 lg:w-58 lg:h-58 md:w-58 md:h-58 select-none overflow-hidden rounded-full">
			<img alt="Profile pic" class=" h-full w-full select-none" src="/profilePic.jpg" />
		</div>
	</FlyInContainer>
	<FlyInContainer x={7} classname="max-w-[400px] text-left">
		<h1 class="text-3xl text-text">Dominic Zlat</h1>
		<span class="text-left text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-text"
			>I’m a passionate learner and developer, focused on building useful and beautiful web and native Android applications. Over the past 5 years, I’ve worked with a wide range of technologies, always eager to explore new tools and frameworks to create innovative, user-centered solutions.
		</span>
	</FlyInContainer>
</div>
