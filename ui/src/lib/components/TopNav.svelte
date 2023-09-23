<script>
    import logo from '$lib/images/wetfish-logo.png';
</script>

<style lang="scss">
    .top-nav {
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: calc(100% - 8em);
        margin: 1em 4em;
        z-index: 100;

        img {
            height: 100px;

            &:hover {
                animation: trippy 2s linear infinite;
            }
        }

        .menu {
            font-size: 24pt;
            border: 2px solid #0EE5A3;
            color: #0EE5A3;
            height: 1em;
            padding: 0.1em 0.25em 0.3em 0.25em;
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

    <div class="menu">≡</div>
</div>
