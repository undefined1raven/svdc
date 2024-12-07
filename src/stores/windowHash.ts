import { writable } from 'svelte/store';

function getHash() {
	if (typeof window === 'undefined') return '';
	return window.location.hash;
}

let windowHash = writable(getHash());

setInterval(() => {
	if (typeof window === 'undefined') return;
	windowHash.set(window.location.hash);
}, 100);

export default windowHash;
