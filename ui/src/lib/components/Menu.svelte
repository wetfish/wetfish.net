<script>
    import MenuButton from "$lib/components/MenuButton.svelte";
</script>

<style lang="scss">
    .menu {
        backdrop-filter: blur(10px);
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        padding: 1em;
    }

    .wrapper {
        display: flex;
        justify-content: space-between;
        min-height: 100vh;
    }

    .links {
        font-family: satoshi;
        list-style: none;
        align-self: center;
        margin: 0 auto;
        padding: 0;

        .button {
            padding: 0.5em 0.75em;

            &:hover {
                animation: trippy 2s linear infinite;
            }
        }
    }

    .button-wrap {
        position: fixed;
        top: 44px;
        right: 16px;
    }

    @keyframes trippy {
        0% { backdrop-filter: hue-rotate(0deg); }
        50% { backdrop-filter: hue-rotate(180deg); }
        100% { backdrop-filter: hue-rotate(360deg); }
    }

    @media screen and (min-width: 1024px) {
        .menu {
            padding: 1em 4em;
        }

        .links {
            .button {
                font-size: 32px;
                padding: 0.7em 1.5em;
            }
        }

        .button-wrap {
            position: unset;
            height: 105px;
            display: flex;
            align-items: center;
        }
    }
</style>

<section class="menu">
    <div class="wrapper">
        <ul class="links">
            <li>
                <a class="button full" href="mailto:BusinessRelations@wetfish.net">Hire Us</a>
            </li>

            <li>
                <a class="button" href="https://wet.fish/community">Join the Community</a>
            </li>

            <li>
                <a class="button" href="https://wet.fish/business">Learn About Our Business</a>
            </li>

            <li>
                <a class="button" href="https://wet.fish/nature">Learn About Nature Conservation</a>
            </li>
        </ul>

        <div class="button-wrap">
            <MenuButton />
        </div>
    </div>
</section>
