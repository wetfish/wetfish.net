<style lang="scss">
    .blob-1 {
        clip-path: url(#blob-1);
    }

    .blob-2 {
        clip-path: url(#blob-2);
    }

    .blob-3 {
        clip-path: url(#blob-3);
    }

    .blob-4 {
        clip-path: url(#blob-4);
    }

    .blob-5 {
        clip-path: url(#blob-5);
    }

    .blob-6 {
        clip-path: url(#blob-6);
    }

    .blob-7 {
        clip-path: url(#blob-7);
    }

    .blob-8 {
        clip-path: url(#blob-8);
    }

    .blob-9 {
        clip-path: url(#blob-9);
    }

    .blob-10 {
        clip-path: url(#blob-10);
    }
    .blob-container {
        position: relative;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .blob-image,
    .bubbles-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .blob-image {
        z-index: -1;
    }
    .bubbles-image {
        z-index: 2;
    }
</style>

<script>
    let { type, children, color = 'blue' } = $props();
</script>

{type}
<div class="blob-container">
    {#await import(`$lib/images/blobs/blob${type}-${color}.svg`) then { default: src }}
        <img class="blob-image" {src}/>
    {/await}       
    <div class={`blob-${type}`}>
        {@render children?.()}
    </div>
    {#await import(`$lib/images/blobs/bubbles${type}-${color}.svg`) then { default: src }}
        <img class="bubbles-image" {src}/>
    {/await}
</div>
