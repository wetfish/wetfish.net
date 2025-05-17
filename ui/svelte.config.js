import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
    preprocess: [vitePreprocess()],

	kit: {
        adapter: adapter({
            pages: 'public_html',
            assets: 'public_html',
            fallback: undefined,
            precompress: false,
            strict: true
        })
    }
};