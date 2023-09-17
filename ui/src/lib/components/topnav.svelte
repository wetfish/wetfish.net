<script>
    import logo from '$lib/assets/wetfish-logo.png';
</script>

<style lang="scss">
    .top-nav {
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1em 4em;
        z-index: 100;

        img {
            max-width: 10%;
        }

        .menu {
            font-size: 24pt;
            border: 2px solid #0EE5A3;
            color: #0EE5A3;
            height: 1em;
            padding: 0.1em 0.25em 0.3em 0.25em;
        }
    }
</style>

<div class="top-nav">
    <img src={logo} />
    <div class="menu">≡</div>
</div>
