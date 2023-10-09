<script>
    import laserfish from '$lib/images/laserfish.png';
    import laserfishBackground from '$lib/images/laserfish-background.png';
    import laserfishBase from '$lib/images/laserfish-base.png';
</script>

<style lang="scss">
    .dodge {
       mix-blend-mode: color-dodge;
    }

    .laserfish-wrapper {
        img {
            position: absolute;
            z-index: 0;
        }

        .laserfish {
            bottom: 98px;
            width: 500px;
        }

        .background {
            bottom: 200px;
            width: 500px;
        }

        .base {
            bottom: 0px;
            left: -118px;
            width: 800px;
        }
    }

    @media screen and (min-width: 600px) {
        .laserfish-wrapper {
            .laserfish {
                bottom: 110px;
                left: 100px;
                width: 800px;
            }

            .background {
                bottom: 250px;
                left: 100px;
                width: 800px;
            }

            .base {
                bottom: 0px;
                left: 38px;
                width: 1000px;
            }
        }
    }

    @media screen and (min-width: 1024px) {
        .laserfish-wrapper {
            .laserfish {
                bottom: 180px;
                left: 44%;
                width: auto;
            }

            .background {
                bottom: 450px;
                left: 44%;
                width: auto;
            }

            .base {
                left: calc(44% - 163px);
                width: auto;
            }
        }
    }
</style>

<div class="laserfish-wrapper">
    <img class="laserfish" src="{laserfish}">
    <img class="background dodge" src="{laserfishBackground}">
    <img class="base dodge" src="{laserfishBase}">
</div>
