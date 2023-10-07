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
            animation: trippy 2s linear infinite;
        }
    }

    @keyframes trippy {
        0% { backdrop-filter: hue-rotate(0deg); }
        50% { backdrop-filter: hue-rotate(180deg); }
        100% { backdrop-filter: hue-rotate(360deg); }
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

    function handleKeyUp(event) {
        // Only process keyboard events when the menu is open
        if(menuIsOpen) {
            if(event.key === "Escape") {
                menuStore.set(false);
            }
        }
    }
</script>

<div class="menu-button" on:click={toggleMenu}>≡</div>

<svelte:window on:keyup={handleKeyUp} />
