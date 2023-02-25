import path from 'path';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';
import seqPreprocessor from 'svelte-sequential-preprocessor';
import { preprocessThrelte } from '@threlte/preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), seqPreprocessor([preprocess(), preprocessThrelte()])],

	kit: {
		adapter: adapter(),
		alias: {
			'@data': path.resolve('./src/data'),
			'@lib': path.resolve('./src/lib'),
		}
	}
};

export default config;
