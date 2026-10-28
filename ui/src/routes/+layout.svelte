<!--
    Root layout — intentionally bare.

    The global site chrome (TopNav, Menu, Blobs) lives in the (app) route
    group instead, so the marketing site keeps its full-size navigation while
    routes outside that group — like /noise — can render their own chrome.

    Route groups (folders wrapped in parentheses) don't affect the URL, so
    every existing path (/, /community, /business, /nature) is unchanged.

    Global styles are imported here, and prerendering is configured in
    +layout.ts, both at the root so they apply to every page, including those
    outside (app).

    Import global styles from this component, not from +layout.ts: SvelteKit
    only links a stylesheet in the prerendered HTML when it can match it to a
    layout or page component. Otherwise JavaScript loads it after the page
    appears, which briefly shows the page unstyled and without its fonts.
-->
<script lang="ts">
    import '$lib/css/global.scss';

    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

{@render children?.()}
