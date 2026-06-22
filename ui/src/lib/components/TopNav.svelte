<script>
    import logo from '$lib/images/wetfish-logo.png';
    import MenuButton from '$lib/components/MenuButton.svelte';

    /*
     * compact: when true, render a smaller, non-fixed nav intended to sit
     * inside another page's own header bar (e.g. the Noise reference page's
     * sticky toolbar). The default (false) keeps the full-size, fixed nav
     * used across the marketing site.
     */
    let { compact = false } = $props();
</script>

<style lang="scss">
    .top-nav {
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: calc(100% - 2em);
        margin: 1em;
        z-index: 100;

        img {
            height: 100px;

            &:hover {
                animation: trippy 2s linear infinite;
            }
        }
    }

    @media screen and (min-width: 1024px) {
        .top-nav {
            width: calc(100% - 8em);
            margin: 1em 4em;
        }
    }

    /*
     * Compact variant: drops fixed positioning and the page-edge margins so
     * the host bar controls layout, and shrinks the logo to sit alongside
     * inline toolbar controls. The 1024px margin override above is also
     * neutralised here.
     */
    .top-nav.compact {
        position: static;
        width: auto;
        margin: 0;
        gap: 0.75em;

        img {
            height: 40px;
        }
    }

    @media screen and (min-width: 1024px) {
        .top-nav.compact {
            margin: 0;
        }
    }

    @keyframes trippy {
        0% { filter: hue-rotate(0deg); }
        50% { filter: hue-rotate(180deg); }
        100% { filter: hue-rotate(360deg); }
    }
</style>

<div class="top-nav" class:compact>
    <a href="/" aria-label="Wetfish Home Page">
        <img src={logo} alt="Wetfish Rainbow Logo "/>
    </a>

    <MenuButton />
</div>
