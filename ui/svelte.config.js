import adapter from '@sveltejs/adapter-static';

export default {
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