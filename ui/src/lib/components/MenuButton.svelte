<style lang="scss">
    .menu-button {
        font-size: 24pt;
        border: 2px solid #0EE5A3;
        border-radius: 2px;
        cursor: pointer;
        background-color: RGBA(46, 207, 158, 0.25);
        color: #fff;
        height: 32px !important;
        padding: 0.1em 0.25em 0.3em 0.25em;

        &:hover {
            background-color: transparent;
        }
    }
</style>

<script>
    import { menuStore } from '$lib/store.js';

	let menuIsOpen;

	menuStore.subscribe((value) => {
		menuIsOpen = value;
	});

    function toggleMenu() {
        menuStore.set(!menuIsOpen);
    }
</script>

<div class="menu-button" on:click={toggleMenu}>≡</div>