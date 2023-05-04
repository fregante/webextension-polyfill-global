import {Browser} from 'webextension-polyfill';

// Importable namespace for single components
export = Browser

// Global types
declare global {
	const browser: Browser;
}
