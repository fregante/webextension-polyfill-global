declare global {
	type Browser = import('webextension-polyfill').Browser;
	const browser: Browser;
}
