import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter()
	},
	env: {
		dir: process.cwd(),
		publicPrefix: 'PUBLIC_'
	}
};

export default config;
