import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */

const dev = process.argv.includes('dev');

const config = {
	preprocess: vitePreprocess(),

	kit: {
		paths: {
			// base: dev ? '' : '/BookClub-app'
		},

		adapter: adapter(),
		prerender: {
			entries: ['*', '/blog/*', '/bookCrossing/books/*', '/events', '/login', '/logout', '/signup'],
		  },
	}
};

export default config;
