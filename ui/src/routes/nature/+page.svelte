<svelte:head>
    <title>Nature Conservation & Habitat Restoration — Wetfish</title>
</svelte:head>

<style lang="scss">
    .content-background {
        .header {
            position: absolute;
            width: 100%;
            min-height: 1600px;
            background-image:url('$lib/images/bg-nature.png');
            background-position: left;
            background-repeat: no-repeat;
            background-size: cover;
        }

        .gradient {
            position: absolute;
            width: 100%;
            height: 800px;
            top: 800px;
            background-image: linear-gradient(0deg,#010902ff 0%, #01090200 100%);
            z-index: 1;
        }

        .fireflies {
            position: absolute;
            z-index: 0;
            width: 100%;
            min-height: 1600px;
            background-image:url('$lib/images/bg-fireflies.png');
            background-position: left;
            background-repeat: no-repeat;
            background-size: cover;
            opacity: 0.75;
            top: 1600px;
        }
    }

    .content {
        display: flex;
        justify-content: flex-start;

        .text {
            padding: 1em;
        }

        &.one {
            padding-top: 450px;

            h1 {
                width: 33%;
            }

            .text {
                width: 44%;
            }
        }

        &.two {
            padding-top: 0;
        }

        &.three {
            flex-direction: column;
        }
    }

    @media screen and (min-width: 768px) {
        .content {
            padding: 500px 2em 0;

            .text {
                width: 50%;
            }

            &.two {
                justify-content: flex-end;
            }
        }
    }

    @media screen and (min-width: 1024px) {
        .content {
            padding: 500px 8em 0;

            &.two {
                justify-content: flex-end;
           }
        }
    }

    @media screen and (min-width: 1600px) {
        .nature {
            min-height: 1400px;
        }

        .content {
            padding: 700px 16em 4em;
            display: flex;
            justify-content: flex-start;

            .text {
                width: 80%;
            }

            &.two {
                justify-content: flex-end;
                height: 800px;

                .text {
                    width: 50%;
                }
            }

            &.three {
                padding-top: 600px;
                padding-bottom: 0;
            }
        }
    }
</style>

<script>
    import DisappearingContent from "$lib/components/DisappearingContent.svelte";
    import Accordion from '$lib/components/Accordion.svelte';
    import Blob from '$lib/components/Blob.svelte';
    import Footer from "$lib/components/Footer.svelte";

    const accordionOptions = [
        {id: 'leaves', title: 'Collecting Leaves'},
        {id: 'water', title: 'Watershed Management'},
        {id: 'erosion', title: 'Erosion Control'},
        {id: 'permaculture', title: 'Permaculture'},
    ];
</script>

<section class="nature">
    <div class="content-background">
        <div class="header"></div>
        <div class="gradient"></div>
        <div class="fireflies" alt="A forest background with grases in the foreground and fireflies on the left"></div>


        <!--
        <img class="trees" src="" alt="Blue nebula cloud background">
        <img class="fireflies" src="" alt="Blue nebula cloud background">
        <img class="hillside" src="" alt="Purple nebula cloud background">
        -->
    </div>

    <DisappearingContent>
        <div class="content one">
            <div class="text">
                <div class="section-number">01</div>
                <h3>— Nature Conservation</h3>
                <h1>Building Abundance</h1>

                <div class="paragraphs">
                    <p>
                        Wetfish is committed to restoring land which has been degraded by human activity.
                        Our mission is to develop technologies that accelerate the regeneration of natural ecosystems.
                    </p>

                    <p>
                        Wetfish helps manage over 1000 acres across North America and works with volunteers to ensure that it stays wild.
                    </p>

                    <p>
                        Since 2020 we've planted hundreds of trees, created dozens of wetlands, sequestered hundreds of tons of CO2, and built off-grid weather monitoring systems for habitat restoration.
                    </p>

                    <p>
                        By putting regenerative agriculture into practice, Wetfish is simultaneously growing food for people and restoring wildfire burn scars for the environment.
                    </p>
                </div>
            </div>
        </div>

        <div class="content two">
            <div class="text">
                <div class="section-number">02</div>
                <h3>— What We Do</h3>
                <h1>Working With Nature</h1>

                <Accordion options={accordionOptions}>
                    {#snippet leaves()}
                        <p>
                            Every year our volunteers go out into their neighborhoods to collect leaves from people who would otherwise be throwing them away in the dump.
                            These leaves are the perfect mulch and compost material for protecting young trees and creating water catchment structures.
                        </p>

                        <p>
                            Since 2023 we've collected an average of 1,000 bags of leaves every autumn, equating to approximately 10 tons of carbon sequestered every year from leaves alone.
                            We've used these leaves along with logs from the wildfire to create hugelkultur terraces along 2 acres of burn scar so far, with plans to continue expanding our restoration efforts every year.
                        </p>
                    {/snippet}

                    {#snippet water()}
                        <p>
                            By building water catchment structures out of dead trees in wildfire burn scars, we slow down the water and give it time to absorb into the ground.
                            This captured ground water replenishes perched aquifers and brings new life to old springs.
                        </p>
                    {/snippet}

                    {#snippet erosion()}
                        <p>
                            Wildfires create unstable landscapes prone to flash flooding and erosion.
                        </p>

                        <p>
                            Water catchment structures reduce flooding while catching sediment and debris.
                            This is a benefit for downstream water users by providing naturally filtered ground water.
                        </p>
                    {/snippet}

                    {#snippet permaculture()}
                        <p>
                            It comes in many names: permaculture, regenerative agriculture, agroforestry; but the principles are the same.
                            First, observe the natural landscape, existing conditions, and study what was there historically.
                            Then use locally available materials to create diverse microclimates that foster life.
                            Now we are growing a food forest that provides abundance for humans as well as all other life in the surrounding ecosystem.
                        </p>
                    {/snippet}
                </Accordion>
            </div>
        </div>

        <div class="content three">
            <div class="text">
                <div class="section-number">03</div>
                <h3>— Wetfish In The Wild</h3>
                <h1>Our Projects</h1>
            </div>

            <div class="projects">
                <a href="https://wiki.wetfish.net/nature">
                    <div class="project">
                        <Blob type="5">
                            <img src="/content/nature-burn-scar.jpg" alt="A screenshot of the Chive Charities Website" />
                        </Blob>
                        <div class="button wide dark">High Park Burn Scar</div>
                    </div>
                </a>

                <a href="https://wiki.wetfish.net/nature">
                    <div class="project">
                        <Blob type="4">
                            <img src="/content/nature-pond.jpg" alt="A screenshot of the ChurnKey.co Website" />
                        </Blob>
                        <div class="button wide dark">GE Moreau Superfund</div>
                    </div>
                </a>
            </div>
        </div>
        <Footer color="green"></Footer>
    </DisappearingContent>
</section>
