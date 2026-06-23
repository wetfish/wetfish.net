<script>
    /*
     * Per-page <head> metadata: the document title, meta description, and the
     * Open Graph / Twitter card tags used when a link is shared.
     *
     * Props default to the site-wide Wetfish values, so a page only needs to
     * pass what differs from the home page (usually title, description, and
     * path). The og:image stays the shared Wetfish hologram unless overridden.
     */
    let {
        title = 'Wetfish — The Best Internet on the Internet',
        description = 'A community of scientists, makers, and artists working together to inspire hope for a better world.',
        path = '/',
        image = 'https://wetfish.net/open-graph-image.jpg',
        imageAlt = 'A fish rendered in the style of a hologram'
    } = $props();

    const url = 'https://wetfish.net' + path;
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />

    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="675" />
    <meta property="og:image:alt" content={imageAlt} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
</svelte:head>
