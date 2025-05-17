<script lang="ts">
    import TopNav from '$lib/components/TopNav.svelte';
    import Menu from '$lib/components/Menu.svelte';
    import { menuStore } from '$lib/store.js';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	let menuIsOpen = $state();

	menuStore.subscribe((value) => {
		menuIsOpen = value;
	});
</script>

{#if menuIsOpen}
    <Menu />
{/if}

<TopNav />
{@render children?.()}