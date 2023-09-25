<script>
    import TopNav from '$lib/components/TopNav.svelte';
    import Menu from '$lib/components/Menu.svelte';
    import { menuStore } from '$lib/store.js';

	let menuIsOpen;

	menuStore.subscribe((value) => {
		menuIsOpen = value;
	});
</script>

{#if menuIsOpen}
    <Menu />
{/if}

<TopNav />
<slot />