<script lang="ts">
	import { onMount } from 'svelte';
	import { tree } from '../stores/tree';
	import FlyInContainer from '../components/common/FlyInContainer.svelte';
	import { files } from '../stores/files';
	import { activeMdContent } from '../stores/activeMdContent';

	let currentTree = $state([]);

	function handleMenuClick(index: number) {
		const item = $tree[index];
		if (item.isParentOnly === false) {
			const newFile = $files.find((file) => file.name === item.name);
			if (newFile) {
				window.location.hash = `${newFile.route}`;
				activeMdContent.set(newFile.markdown);
			}
		}
	}

	onMount(() => {
		tree.subscribe((value) => {
			let newCurrentTree: any = [];
			for (let ix = 0; ix < value.length; ix++) {
				const branch = value[ix];
				const nextBranch = value[ix + 1];
				const canExtend = nextBranch && nextBranch.depth > branch.depth;
				if (branch.depth === 0) {
					newCurrentTree.push({
						...branch,
						canExtend
					});
				}
			}
			currentTree = newCurrentTree;
		});
	});

	function handleExpand(index: number) {
		const item = currentTree[index];
		const currentDepth = item.depth;
		const newTree: any = [...ct.splice(0, index + 1)];
		const nextItemIndex = index + 1;
		if (currentTree[nextItemIndex]?.depth > currentDepth) {
			console.log('here');
			let lastExtendedItemIndex = nextItemIndex;
			for (let ix = nextItemIndex; ix < ct.length; ix++) {
				const loopItem = ct[ix];
				if (loopItem.depth === currentDepth) {
					lastExtendedItemIndex = ix + 1;
					break;
				}
			}
			const restOfTimes = currentTree.slice(lastExtendedItemIndex + 1, currentTree.length);
			console.log('restOfTimes', restOfTimes);
			newTree.push(...restOfTimes);
		} else {
			console.log('there');
			const extendedItems: any = [];
			let lastExtendedItemIndex = 0;
			for (let ix = nextItemIndex; ix < $tree.length; ix++) {
				const nextItem = $tree[ix];
				if (nextItem.depth > currentDepth) {
					if (nextItem.depth - currentDepth === 1) {
						lastExtendedItemIndex = ix;
						extendedItems.push({
							...nextItem,
							canExtend: $tree[ix + 1] && $tree[ix + 1].depth > nextItem.depth
						});
					}
				} else {
					break;
				}
			}
			newTree.push(...extendedItems);
			const restOfItems = $tree.slice(lastExtendedItemIndex + 1);
			newTree.push(...restOfItems);
		}
        currentTree = newTree;
	}
</script>

<div class="h-auto w-full">
	<div class="flex h-full w-full flex-col gap-1 overflow-x-hidden rounded-md">
		{#each currentTree as branch, ix}
			<FlyInContainer delay={50 * ix}>
				<div class="hover:bg-color40 flex h-12 flex-row text-text">
					<div
						style="left: {20 * branch.depth}px;"
						class="relative flex flex-grow items-center gap-2 rounded-md"
					>
						<div class="h-full w-[2px] bg-color"></div>
						<div
							onclick={() => handleMenuClick(ix)}
							class="transition-transition linear hover:bg-color40 flex h-full w-auto min-w-[250px] items-center justify-between rounded-md border border-color bg-color20 p-2 transition-all duration-100"
						>
							<span>
								{branch.name}
							</span>
							{#if branch.canExtend}
								<button
									onclick={() => {
										handleExpand(ix);
									}}
									class="h-full w-12 bg-red-400"
								></button>
							{/if}
						</div>
					</div>
				</div>
			</FlyInContainer>
		{/each}
	</div>
</div>
