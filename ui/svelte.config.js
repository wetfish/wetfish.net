import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

export default {
    preprocess: preprocess(),

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