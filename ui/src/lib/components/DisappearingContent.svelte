<script>
    let content;

    // TODO: For best performance only change styles on the content when it is visible on the page?
    function handleScroll() {
        const boundingBox = content.getBoundingClientRect();

        content.style['mask-image'] =
            `linear-gradient(
                0deg,
                rgba(0, 0, 0, 1),
                rgba(0, 0, 0, 1) ${((boundingBox.height + boundingBox.top) - 244)}px,
                transparent ${(boundingBox.height + boundingBox.top) - 122}px
            )`;

        // It's 2023 and mask image has been around for over 10 years... why is this still prefixed in chrome? 🙄
        content.style['-webkit-mask-image'] =
            `linear-gradient(
                0deg,
                rgba(0, 0, 0, 1),
                rgba(0, 0, 0, 1) ${((boundingBox.height + boundingBox.top) - 244)}px,
                transparent ${(boundingBox.height + boundingBox.top) - 122}px
            )`;
    }
</script>

<style>
    .disappearing-content {
        position: relative;
        z-index: 1;
    }
</style>

<div bind:this={content} class="disappearing-content">
    <slot />
</div>

<svelte:window on:scroll={handleScroll} on:resize={handleScroll} />
