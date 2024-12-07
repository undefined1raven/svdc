<script lang="ts">
	let { classNames, color = '#000000' } = $props();
</script>

<svg
	width="205"
	height="200"
	class={classNames}
	viewBox="0 0 205 200"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<rect x="20.5" y="15.5" width="168" height="168" rx="1.5" stroke={color} stroke-width="3" />
	<rect
		x="6.5"
		y="1.5"
		width="197"
		height="197"
		rx="1.5"
		stroke={color}
		stroke-width="3"
		stroke-dasharray="10 10"
	/>
	<rect x="81.5" y="76.5" width="47" height="47" rx="1.5" stroke={color} stroke-width="3" />
	<rect x="5" y="2" width="3" height="45" fill={color} />
	<rect x="5" y="3" width="3" height="45" transform="rotate(-90 5 3)" fill={color} />
	<path d="M0 0H5V10.7755V24L0 0Z" fill={color} />
</svg>
