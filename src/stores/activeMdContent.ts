import { writable } from 'svelte/store';

const activeMdContent = writable('');

export { activeMdContent };
