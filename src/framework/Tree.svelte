<script lang="ts">
	import { onMount } from 'svelte';
	import { tree } from '../stores/tree';
	import FlyInContainer from '../components/common/FlyInContainer.svelte';
	import { files } from '../stores/files';
	import { activeMdContent } from '../stores/activeMdContent';
	import DropdownDeco from '../deco/DropdownDeco.svelte';
	import FadeInContainer from '../components/common/FadeInContainer.svelte';
	import { globalStyle } from '../stores/globalStyle.svelte';

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
		const treeIndex = $tree.findIndex((treeItem) => treeItem.name === item.name);
		const nextTreeIndex = treeIndex + 1;
		if (!$tree[nextTreeIndex]) {
			return;
		}
		const nextCurrentTreeIndex = index + 1;
		const currentDepth = item.depth;
		const nextDepth = $tree[nextTreeIndex].depth;
		if (
			nextDepth > currentDepth &&
			(currentTree[nextCurrentTreeIndex].depth === currentDepth ||
				currentDepth > currentTree[nextCurrentTreeIndex].depth)
		) {
			const newCurrentTree = currentTree.slice(0, index + 1);
			let lastExtendedItemIndex = 0;
			for (let ix = nextTreeIndex; ix < $tree.length; ix++) {
				const nextItem = $tree[ix];
				if (nextItem.depth <= currentDepth) {
					lastExtendedItemIndex = ix;
					break;
				}
				if (nextItem.depth === currentDepth + 1) {
					newCurrentTree.push({
						...nextItem,
						canExtend: $tree[ix + 1] && $tree[ix + 1].depth > nextItem.depth
					});
				}
			}
			const restOfItems = currentTree.slice(index + 1, currentTree.length);
			newCurrentTree.push(...restOfItems);
			currentTree = newCurrentTree;
		} else {
			console.log('here');
			const newCurrentTree = currentTree.slice(0, index + 1);
			let endIndex = 0;
			for (let ix = index + 1; ix < currentTree.length; ix++) {
				const nextItem = currentTree[ix];
				if (nextItem.depth <= currentDepth) {
					endIndex = ix;
					break;
				}
			}
			const restOfItems = currentTree.slice(endIndex, currentTree.length);
			newCurrentTree.push(...restOfItems);
			currentTree = newCurrentTree;
		}
	}

	function getDropdownRotation(index: number) {
		const item = currentTree[index];
		const nextItem = currentTree[index + 1];
		if (nextItem) {
			if (nextItem.depth > item.depth) {
				return '180deg';
			} else {
				return '0deg';
			}
		}
	}
</script>

<div class="h-auto w-full">
	<div class="flex h-full w-full flex-col gap-1 overflow-x-hidden rounded-md">
		{#each currentTree as branch, ix}
			<FadeInContainer duration={80}>
				<div class="hover:bg-color40 flex h-12 flex-row text-text">
					<div
						style="left: {20 * branch.depth}px;"
						class="relative flex flex-grow items-center gap-2 rounded-md"
					>
						<div class="h-full w-1 bg-color"></div>
						<div
							onclick={() => handleMenuClick(ix)}
							class=" transition-transition linear hover:bg-color40 flex h-full w-auto min-w-[250px] cursor-pointer items-center justify-between rounded-md border border-color bg-color20 p-2 transition-all duration-100"
						>
							<span>
								{branch.name}
							</span>
							{#if branch.canExtend}
								<button
									onclick={() => {
										handleExpand(ix);
									}}
									class="flex h-full w-16 items-center justify-center pl-8"
								>
									<div
										style="transform: rotate({getDropdownRotation(ix)});"
										class="linear h-full w-full transition-all duration-100"
									>
										<DropdownDeco color={$globalStyle.color} classNames="w-full h-full"
										></DropdownDeco>
									</div>
								</button>
							{/if}
						</div>
					</div>
				</div>
			</FadeInContainer>
		{/each}
	</div>
</div>
