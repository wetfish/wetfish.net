<!--
    Root layout — intentionally bare.

    The global site chrome (TopNav, Menu, Blobs) lives in the (app) route
    group instead, so the marketing site keeps its full-size navigation while
    routes outside that group — like /noise — can render their own chrome.

    Route groups (folders wrapped in parentheses) don't affect the URL, so
    every existing path (/, /community, /business, /nature) is unchanged.

    Global styles and prerendering are configured in +layout.ts, which stays
    at the root so they apply to every page, including those outside (app).
-->
<script lang="ts">
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

{@render children?.()}
