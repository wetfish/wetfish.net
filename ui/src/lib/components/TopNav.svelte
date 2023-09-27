<script>
    import logo from '$lib/images/wetfish-logo.png';
    import MenuButton from '$lib/components/MenuButton.svelte';
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

    @keyframes trippy {
        0% { filter: hue-rotate(0deg); }
        50% { filter: hue-rotate(180deg); }
        100% { filter: hue-rotate(360deg); }
    }
</style>

<div class="top-nav">
    <a href="/" aria-label="Wetfish Home Page">
        <img src={logo} alt="Wetfish Rainbow Logo "/>
    </a>

    <MenuButton />
</div>
