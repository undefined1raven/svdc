import { writable } from 'svelte/store';

const embedConfig = writable({ showHeader: true, showFooter: false, showThemeController: true });

export { embedConfig };
