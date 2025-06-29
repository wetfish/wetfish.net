<svelte:head>
    <title>Cyberpunk Internet Community — Wetfish</title>
</svelte:head>

<style lang="scss">
    .community {
        min-height: 1400;
        background-image:url('$lib/images/bg-community.png');
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
        position: relative;
    }

    .content-background {
        mix-blend-mode: multiply;

        img {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }

        .mobile {
            width: 100vw;

            &.one {
                top: 150px;
                max-height: 800px;
            }

            &.two {
                top: 1100px;
                max-height: 900px;
            }

            &.three {
                top: 2200px;
                width: 105vw;
            }
        }

        .desktop {
            display: none;
        }
    }

    .content {
        display: flex;
        justify-content: flex-end;

        .text {
            padding: 1em;
        }

        &.one {
            margin-top: 7em;

            .button {
                margin-top: 0.5em;
            }
        }

        &.two {
            margin-top: 12em;
        }

        &.three {
            margin-top: 15em;

            h1 {
                margin-bottom: 0.5em;
            }
        }

        &.four {
            margin-top: 15em;
            flex-direction: column;
        }
    }

    @media screen and (min-width: 400px) {
        .content {
            &.one {
                margin-top: 7em;
            }

            &.two {
                margin-top: 17em;
            }

            &.three {
                margin-top: 20em;
            }
        }
    }

    @media screen and (min-width: 600px) {
        .content {
            &.one {
                margin-top: 16em;
            }

            &.two {
                margin-top: 28em;
            }

            &.three {
                margin-top: 30em;
            }
        }
    }

    @media screen and (min-width: 800px) {
        .content {
            &.one {
                margin-top: 18em;
            }

            &.two {
                margin-top: 34em;
            }

            &.three {
                margin-top: 48em;
            }
        }
    }


    @media screen and (min-width: 1024px) {
        .content-background {
            .mobile {
                display: none;
            }

            .desktop {
                display: block;
                height: 125%;
                width: 100vw;
                left: auto;
            }
        }

        .content {
            margin-top: 7em;

            .text {
                width: 50%;
                margin: 0 auto;
                padding: 4em 0;
            }

            &.one {
                margin-top: 25px;

                .text {
                    margin-left: 18%;
                }
            }

            &.two {
                margin-top: 100px;

                .text {
                    margin-left: 27%;
                }
            }

            &.three {
                margin-top: 100px;

                .text {
                    margin-left: 32%;
                }
            }

            &.four {
                margin-top: 50px;

                .text {
                    padding-bottom: 0;
                    width: 80%;
                }
            }
        }
    }

    @media screen and (min-width: 1200px) {
        .content-background {
            .desktop {
                height: 130%;
            }
        }

        .content {
            &.two {
                margin-top: 25px;
            }

            &.three {
                margin-top: 25px;

                .text {
                    margin-left: 34%;
                }
            }

            &.four {
                margin-top: 25px;
            }
        }
    }

    @media screen and (min-width: 1600px) {
        .content-background {
            .desktop {
                height: 150%;
            }
        }

        .content {
            .text {
                width: 40%;
            }

            &.one {
                .text {
                    margin-left: 25%;
                }
            }

            &.three {
                .text {
                    margin-left: 40%;
                }
            }

            &.four {
                .text {
                    width: 50%;
                }
            }
        }
    }
</style>

<script>
    import DisappearingContent from "$lib/components/DisappearingContent.svelte";
    import Accordion from '$lib/components/Accordion.svelte';
    import Blob from '$lib/components/Blob.svelte';
    import swoopMobile1 from '$lib/images/swoop-community-mobile-1.svg';
    import swoopMobile2 from '$lib/images/swoop-community-mobile-2.svg';
    import swoopMobile3 from '$lib/images/swoop-community-mobile-3.svg';
    import swoopDesktop from '$lib/images/swoop-community-desktop.svg';
    import Footer from "$lib/components/Footer.svelte";

    const accordionOptions = [
        {id: 'postscarcity', title: 'Post-Scarcity'},
        {id: 'curiosity', title: 'Curiosity'},
        {id: 'sovereignty', title: 'Sovereignty'},
        {id: 'sustainability', title: 'Sustainability'},
    ];
</script>

<section class="community">
    <div class="content-background">
        <img class="mobile one" src="{swoopMobile1}" alt="Dark transparent background">
        <img class="mobile two" src="{swoopMobile2}" alt="Dark transparent background">
        <img class="mobile three" src="{swoopMobile3}" alt="Dark transparent background">
        <img class="desktop" src="{swoopDesktop}" alt="Dark transparent background">
    </div>

    <DisappearingContent>
        <div class="content one">
            <div class="text">
                <div class="section-number">01</div>
                <h3>— Welcome to the community</h3>
                <h1>The Best Internet on the Internet</h1>

                <p>
                    Wetfish started in 2005 as an IRC channel and Imageboard and has evolved into a self-hosted network of open-source projects including a wiki, forum, file hosting, video streaming, and chat rooms.
                    Our mission is to use technology to help people connect with each other and empower small groups of dedicated people to change the world.
                </p>

                <a class="button full" href="https://wiki.wetfish.net/community">Join the Community</a>
            </div>
        </div>

        <div class="content two">
            <div class="text">
                <div class="section-number">02</div>
                <h3>— Who We Are</h3>
                <h1>Digitally United</h1>

                <p>
                    The Wetfish Communtiy is a mix of everything from cypherpunk hackers, to farmers, researchers, and artists.
                    Some of us work at senior positions at big tech companies, others are just trying to make ends meet.
                    We're spread across the globe physically, but digitally united.
                </p>

                <p>
                    Despite living in different countries across the world, Wetfish members are encouraged to meet up and hang out IRL!
                    We make an effort to spend time together and foster lasting relationships.
                    Occasionally we throw parties and volunteer our time to help organize festivals & events.
                </p>
            </div>
        </div>

        <div class="content three">
            <div class="text">
                <div class="section-number">03</div>
                <h3>— Our Values</h3>
                <h1>We're better together!</h1>

                <Accordion options={accordionOptions}>
                    {#snippet postscarcity()}
                        <p>
                            We already have the technology to provide abundant food, water, and shelter to the entire planet.
                            For a brief moment, file sharing in the early 2000s gave us a glimpse of what true abundance looks like.
                            Then it was systematically dismantled and replaced with inefficient, centralized, rent-seeking "solutions" that spy on us.
                        </p>

                        <p>
                            Our incentives have been corrupted by greed.
                            We're told that everything is a limited resource to be exploited.
                            People are encouraged to destroy the planet for profit.
                            Governments are bought and paid for by 10 corporations that control everything.
                        </p>

                        <p>
                            If you had abundant food, water, and shelter would you still work a meaningless job?
                        </p>
                    {/snippet}

                    {#snippet curiosity()}
                        <p>
                            Imagine if we lived in a world where our primary incentive was curiosity instead of greed.
                            What would you do with your life if you didn't need to sell your time in exchange for food and rent?
                            What amazing art, music, and scientific research are we missing out on by not letting people explore their curiosity?
                        </p>
                    {/snippet}

                    {#snippet sovereignty()}
                        <p>
                            It's important to have control over the technology that we use, otherwise it will be used to control us.
                            We need to be able to audit the data we are sharing with 3rd parties and design systems that prevent data collection entirely.
                        </p>

                        <p>
                            That's why all Wetfish projects are open-source and completely Ad-free.
                            Advertisements spy on us, corrupt our media, and disconnect us from reality.
                            Unlike most other websites, Wetfish's servers are entirely subsidized by the software & hardware development work we do.
                        </p>
                    {/snippet}

                    {#snippet sustainability()}
                        <p>
                            Economic growth at all costs is a failed model that is destroying our home, planet Earth.
                            Without a sustainable society there won't be anything left for our children and grandchildren.
                        </p>

                        <p>
                            Wetfish is involved in the management of several properties across the US and is building a decentralized network of perennial food forests.
                        </p>
                    {/snippet}
                </Accordion>
            </div>
        </div>

        <div class="content four">
            <div class="text">
                <div class="section-number">04</div>
                <h3>— Projects</h3>
                <h1>We've made some cool stuff</h1>

                <p>
                    People from the Wetfish community are encouraged to collaborate on projects and contribute to our suite of open-source software.
                    We hold monthly Show &amp; Tell meetups on Jitsi where we get together to share what we've been working on.
                </p>

                <p>
                    Check out some of our featured projects!
                </p>
            </div>

            <div class="projects">
                <a href="https://wiki.wetfish.net/wiki">
                    <div class="project">
                        <Blob type="4">
                            <img src="/content/community-wiki.png" alt="A screenshot of the Wetfish Community Wiki" />
                        </Blob>
                        <div class="button wide dark">Wiki</div>
                    </div>
                </a>

                <a href="https://wetfishonline.com/">
                    <div class="project">
                        <Blob type="7">
                            <img src="/content/community-forums.png" alt="Pixel art avatars from the Wetfish Forums" />
                        </Blob>
                        <div class="button wide dark">Forums</div>
                    </div>
                </a>

                <a href="https://wiki.wetfish.net/community">
                    <div class="project">
                        <img src="/content/community-chat.png" alt="Logos of open source chat programs" />
                        <div class="button wide dark">Chat Network</div>
                    </div>
                </a>

                <a href="https://wiki.wetfish.net/ai">
                    <div class="project">
                        <Blob type="3">
                            <img src="/content/community-ai.jpg" alt="A desktop computer with a graphics card on fire, representing AI" />
                        </Blob>
                        <div class="button wide dark">AI / Machine Learning</div>
                    </div>
                </a>

                <a href="https://wiki.wetfish.net/hamster-wheel">
                    <div class="project">
                        <Blob type="7">
                            <img src="/content/community-hamster-wheel.jpg" alt="A woman standing inside of a human sized hamster wheel" />
                        </Blob>
                        <div class="button wide dark">Human Hamster Wheel</div>
                    </div>
                </a>
            </div>
        </div>
    </DisappearingContent>

    <Footer color="pink"></Footer>
</section>
