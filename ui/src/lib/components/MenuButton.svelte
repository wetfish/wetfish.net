<style lang="scss">
    // A square button with a centered three-bar icon. The icon is an inline
    // SVG so it sits in the same place in every browser and font.
    .menu-button {
        box-sizing: border-box;
        width: 44px;
        height: 44px;
        padding: 0;
        border: 2px solid #0EE5A3;
        border-radius: 2px;
        cursor: pointer;
        background-color: RGBA(46, 207, 158, 0.25);
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 26px;
            height: 26px;
        }

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

<div class="menu-button" onclick={toggleMenu}>
    <!-- Drawn as an icon rather than the ≡ character, whose position varies between fonts -->
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Menu"><path d="M4 6h16M4 12h16M4 18h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
</div>

<svelte:window onkeyup={handleKeyUp} />
