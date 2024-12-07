<script>
	import LunaDeco from '../../deco/LunaDeco.svelte';
	import SunDeco from '../../deco/SunDeco.svelte';
	import { globalStyle } from '../../stores/globalStyle.svelte';
	import { theme } from '../../stores/theme.svelte';
	import isMobile from '../../utils/isMobile';
	import FadeInContainer from './FadeInContainer.svelte';
	import FlyInContainer from './FlyInContainer.svelte';
	const buttonStyle = `flex hover:bg-color20 transition-all linear duration-75 h-full ${isMobile() ? 'w-full' : 'w-1/2'}  items-center justify-center`;
</script>

<FadeInContainer duration={200} >
	<div
		class="absolute left-2 top-1 flex {isMobile() ? 'h-8' : 'h-12'} {isMobile()
			? 'w-20'
			: 'w-32'} flex-row rounded-xl border border-color"
	>
		{#if isMobile() === false || $theme === 'dark'}
			<button
				onclick={() => {
					sessionStorage.setItem('theme', 'light');
					theme.set('light');
				}}
				class={buttonStyle}
			>
				<SunDeco color={$globalStyle.color}></SunDeco>
			</button>
		{/if}
		{#if isMobile() === false || $theme === 'light'}
			<button
				onclick={() => {
					sessionStorage.setItem('theme', 'dark');
					theme.set('dark');
				}}
				class={buttonStyle + ' border-l border-color'}
			>
				<LunaDeco color={$globalStyle.color}></LunaDeco>
			</button>
		{/if}
	</div>
</FadeInContainer>
