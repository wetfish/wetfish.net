<script>
    import laserfish from '$lib/images/laserfish.png';
    import laserfishBackground from '$lib/images/laserfish-background.png';
    import laserfishBase from '$lib/images/laserfish-base.png';
</script>

<style lang="scss">
    .laserfish-wrapper {
        position: relative;

        img {
            position: absolute;
            left: 36%;
        }

        .laserfish {
            top: -95px;
        }

        .background {
            top: 125px;
        }

        .base {
            top: 680px;
            left: calc(36% - 163px);
        }
    }

    .dodge {
        mix-blend-mode: color-dodge;
    }
</style>

<div class="laserfish-wrapper">
    <img class="laserfish" src="{laserfish}">
    <img class="background dodge" src="{laserfishBackground}">
    <img class="base dodge" src="{laserfishBase}">
</div>
