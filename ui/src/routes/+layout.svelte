<script>
    import TopNav from '$lib/components/topnav.svelte';
</script>

<style>
    .page-content {
        padding-top: 100px;
    }
</style>

<TopNav />

<div class="page-content">
    <slot />
</div>
