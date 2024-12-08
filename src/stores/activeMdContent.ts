import { writable } from 'svelte/store';

const activeMdContent = writable('');
const activeMdContentTitle = writable('');

export { activeMdContent, activeMdContentTitle };
