<script>
    import globe from '$lib/images/globe.png';
    import satellite from '$lib/images/satellite.png';
</script>

<style lang="scss">
    .wrapper {
        position: relative;

        img {
            position: absolute;
        }
    }

    .globe {
        max-width: 100vw;
    }

    .satellite {
        width: 14vw;
        top: 19vw;
        left: 2vw;
    }
</style>

<div class="wrapper">
    <img class="globe" src="{globe}" />
    <img class="satellite" src="{satellite}" />
</div>
