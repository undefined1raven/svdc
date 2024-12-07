<script lang="ts">
	import { onMount } from 'svelte';
	import { tree } from '../stores/tree';
	//@ts-ignore
	import markdownit from 'markdown-it';
	import { activeMdContent } from '../stores/activeMdContent';
	const modules = import.meta.glob('/src/docs/*.json');
	import treeConfig from '../config/tree.json';
	import windowHash from '../stores/windowHash';
	import { embedConfig } from '../stores/embedConfig';
	import header from '../config/header.json';
	import FlyInContainer from '../components/common/FlyInContainer.svelte';
	import Tree from './Tree.svelte';
	import { screenSize } from '../stores/screenSize.svelte';
	import { files } from '../stores/files';
	const md = markdownit();

	let localFiles: IDoc[] = $state([]);
	let padding = $state('');
	async function loadTree() {
		tree.set(treeConfig);
	}

	$effect(() => {
		let newPadding = '';
		if ($embedConfig.showThemeController === true) {
			newPadding += ' pt-16';
		} else {
			newPadding += ' pt-2';
		}
		if ($embedConfig.showFooter === true) {
			newPadding += ' pb-14';
		} else {
			newPadding += ' pb-2';
		}
		padding = newPadding;
	});

	async function processPath(path: string) {
		const module = await modules[path]();
		//@ts-ignore
		const content = module.default;
		return new Promise((resolve, reject) => {
			resolve(content);
		});
	}
	async function loadFiles() {
		const keys = Object.keys(modules);
		const promises = [];
		for (let ix = 0; ix < keys.length; ix++) {
			const path = keys[ix];
			promises.push(processPath(path));
		}
		const results: IDoc[] = (await Promise.all(promises)) as IDoc[];
		for (let ix = 0; ix < results.length; ix++) {
			const result = results[ix];
		}
		localFiles = results;
		files.set(results);
		return results;
	}

	function processHash(hash: string) {
		const relDoc: IDoc | undefined = localFiles.find((doc) => {
			return '#' + doc.route === hash;
		});
		if (relDoc) {
			activeMdContent.set(relDoc.markdown);
		} else {
			window.location.hash = '/';
		}
	}

	$effect(() => {
		if (typeof window !== 'undefined' && localFiles.length > 0) {
			processHash(window.location.hash);
		}
	});

	onMount(() => {
		windowHash.subscribe((hash) => {
			if (typeof hash === 'string' && localFiles.length > 0) {
				processHash(hash);
			}
		});
		loadTree();
		loadFiles();
	});

	let result = $state('');

	$effect(() => {
		const newContent = $activeMdContent;
		result = md.render(newContent);
	});
</script>

<div class="absolute flex h-full w-full flex-row gap-4 p-14 {padding} pl-2 pr-2">
	<FlyInContainer x={-15} duration={150}>
		<div class="flex h-full w-96 flex-col gap-4" id="side-bar">
			{#if $embedConfig.showHeader === true}
				<div class="flex h-auto w-full flex-row rounded-xl bg-color20 p-5">
					{#if header.logo !== null}{/if}
					<div class="flex flex-col items-start">
						{#if header.title !== null}
							<h1 class="text-center">{header.title}</h1>
						{/if}
						{#if header.subtitle !== null}
							<h2 class="text-center">{header.subtitle}</h2>
						{/if}
						<span class="text-sm text-inactive-text">Technical Documentation</span>
					</div>
				</div>
			{/if}
			<div class="h-[90vh] flex-grow overflow-y-auto rounded-md">
				<Tree></Tree>
			</div>
		</div>
	</FlyInContainer>

	<FlyInContainer x={15} duration={150}>
		<div class="flex-grow">{@html result}</div>
	</FlyInContainer>
</div>

<style>
	:global(h1) {
		color: var(--textColor);
		font-size: 20px !important;
		font-weight: bold !important;
	}
	:global(h2) {
		color: var(--textColor);
		font-size: 18px !important;
		font-weight: 600 !important;
	}
	:global(h3) {
		color: var(--textColor);
		font-size: 16px !important;
		font-weight: 400 !important;
	}
</style>
