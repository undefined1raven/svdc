import { writable } from 'svelte/store';

function getScreenSize() {
	if (typeof window === 'undefined') return { height: 1920, width: 1080 };
	return { height: window.innerHeight, width: window.innerWidth };
}

const screenSize = writable(getScreenSize());

export { screenSize };
