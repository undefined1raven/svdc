import { writable } from 'svelte/store';

const files: IDoc[] = writable([]);

export { files };
