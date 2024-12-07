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
	class="flex w-full flex-col items-center justify-center gap-4 rounded-2xl border-l border-r border-color bg-color20 p-4 text-center text-2xl sm:w-full sm:flex-row md:w-[80%] md:flex-row lg:w-[60%] lg:flex-row"
>
	<div class="flex h-full w-full flex-row gap-4">
		<FlyInContainer x={-7}>
			<div
				class="h-16 w-16 select-none overflow-hidden rounded-full sm:h-16 sm:w-16 md:h-16 md:w-16 lg:h-16 lg:w-16"
			>
				<img alt="Profile pic" class=" h-full w-full select-none" src="/profilePic.jpg" />
			</div>
		</FlyInContainer>
		<h1 class="flex h-full w-full items-center text-center text-3xl text-text">Dominic Zlat</h1>
	</div>
	<FlyInContainer x={7} classname="text-left">
		<span class="text-left text-[18px] text-text sm:text-[14px] md:text-[16px] lg:text-[18px]"
			>I’m a passionate learner and developer, focused on building useful and beautiful web and
			native Android applications. Over the past 5 years, I’ve worked with a wide range of
			technologies, always eager to explore new tools and frameworks to create innovative,
			user-centered solutions.
		</span>
	</FlyInContainer>
</div>
