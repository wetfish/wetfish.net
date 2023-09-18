<script>
    let content;

    function handleScroll() {
        // TODO: For best performance only change styles on the content when it is visible on the page?

        const boundingBox = content.getBoundingClientRect();
        content.style['mask-image'] =
            `linear-gradient(
                0deg,
                rgba(0, 0, 0, 1),
                rgba(0, 0, 0, 1) ${((boundingBox.height + boundingBox.top) - 100) / 2}px,
                transparent ${(boundingBox.height + boundingBox.top) - 100}px
            )`;
    }
</script>

<div bind:this={content}>
    <slot />
</div>

<svelte:window on:scroll={handleScroll} />