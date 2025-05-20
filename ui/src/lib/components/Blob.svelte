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
</style>

<script>
    let { type, children } = $props();
</script>

<div class={`blob-${type}`}>
    {@render children?.()}
</div>