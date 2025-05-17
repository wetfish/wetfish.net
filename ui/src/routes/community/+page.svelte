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
            margin-top: 8em;
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

    .projects {
        margin-top: 1em;
    }

    .project {
        margin-bottom: 1em;
        text-align: center;

        img {
            max-width: 100%;
        }
    }

    .blob-1 {
        clip-path: url(#blob-1);
    }

    .blob-2 {
        clip-path: url(#blob-2);
    }

    .blob-3 {
        clip-path: url(#blob-3);
    }

    .blob-4 {
        clip-path: url(#blob-4);
    }

    .blob-5 {
        clip-path: url(#blob-5);
    }

    .blob-6 {
        clip-path: url(#blob-6);
    }

    .blob-7 {
        clip-path: url(#blob-7);
    }

    .blob-8 {
        clip-path: url(#blob-8);
    }

    .blob-9 {
        clip-path: url(#blob-9);
    }

    .blob-10 {
        clip-path: url(#blob-10);
    }

    @media screen and (min-width: 400px) {
        .content {
            &.one {
                margin-top: 9em;
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
                    width: 80%;
                }
            }
        }

        .projects {
            display: grid;
            grid-gap: 20px;
            grid-template-rows: 400px;
            grid-template-columns: 350px 350px;
            padding: 10px;
            margin: 0 auto;
            margin-bottom: 10em;
        }

        .project {
            height: 350px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
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

        .projects {
            grid-template-columns: 350px 350px 350px;
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
    import swoopMobile1 from '$lib/images/swoop-community-mobile-1.svg';
    import swoopMobile2 from '$lib/images/swoop-community-mobile-2.svg';
    import swoopMobile3 from '$lib/images/swoop-community-mobile-3.svg';
    import swoopDesktop from '$lib/images/swoop-community-desktop.svg';

    let activeValue = $state('post-scarcity');

    function setActiveValue(value) {
        activeValue = value;

        // Wait 10ms to allow the content to be re-rendered before scrolling
        setTimeout(() => {
            const buttonPosition = document.getElementById(value).offsetTop;
            const windowHeight = window.innerHeight;

            // Adjust the scroll position to center the content on the screen
            window.scrollTo({top: buttonPosition - (windowHeight * 0.33)});
        }, 10);
    }
</script>

<section class="community">
    <div class="content-background">
        <img class="mobile one" src="{swoopMobile1}">
        <img class="mobile two" src="{swoopMobile2}">
        <img class="mobile three" src="{swoopMobile3}">
        <img class="desktop" src="{swoopDesktop}">
    </div>

    <div class="blobs">
        <svg width="0" height="0">
            <clipPath id="blob-1" clipPathUnits="objectBoundingBox">
                <path d="M 0.11938289,0.3021458 C 0.03857029,0.4019678 0.00544645,0.548318 0.02914569,0.6757959 0.05743589,0.8279038 0.24176002,0.878041 0.37354345,0.7625969 0.50532687,0.6471526 0.57201173,0.6552872 0.7165016,0.666674 0.84634646,0.6768952 0.94196889,0.6341499 0.97848646,0.5577303 1.0150059,0.4813129 0.97329754,0.3794063 0.85622344,0.3897237 0.75778926,0.3983929 0.67521588,0.3479974 0.64188062,0.2504406 0.61021133,0.1577849 0.49755286,0.1375037 0.4134094,0.1472723 0.32926585,0.1570223 0.207115,0.1938023 0.11939891,0.3021458 Z"></path>
            </clipPath>

            <clipPath id="blob-2" clipPathUnits="objectBoundingBox">
                <path d="m 0.11038364,0.41027597 c 0,0 0.20374576,-0.35879502 0.62898404,-0.26103613 0.35961842,0.0826742 0.29835282,0.5913282 -0.01296,0.57019092 C 0.5131188,0.70496112 0.43575442,0.77648351 0.33152124,0.86640763 0.1661818,1.0090495 -0.14157164,0.84376543 0.11038391,0.41025992 Z"></path>
            </clipPath>

            <clipPath id="blob-3" clipPathUnits="objectBoundingBox">
                <path d="M 0.8930098,0.69252199 C 0.97508094,0.59112754 1.0087152,0.44247523 0.98464978,0.31301313 0.95592441,0.15852743 0.76874127,0.10759346 0.63490384,0.22485045 0.50106858,0.34210765 0.43334866,0.33384824 0.28661718,0.3222805 0.1547513,0.3118852 0.05764852,0.355318 0.02056514,0.43292102 c -0.0370835,0.0776241 0.005275,0.18113566 0.12416603,0.17065797 0.0999775,-0.008815 0.18381559,0.0423849 0.21767346,0.14148093 0.0321562,0.0941008 0.14656914,0.11470831 0.23202878,0.10478501 0.0854596,-0.0099 0.20950259,-0.0472559 0.29857639,-0.15732294 z"></path>
            </clipPath>

            <clipPath id="blob-4" clipPathUnits="objectBoundingBox">
                <path d="M 0.81270747,0.2817177 C 0.67557545,0.18096144 0.51385578,0.14344595 0.38606145,0.14135309 c -0.12779669,-0.002113 -0.22580991,0.0173011 -0.26151957,0.0843456 -0.03570707,0.0670418 0.0171895,0.10630147 0.0378775,0.12517331 0.0206696,0.0188537 0.0659441,0.0807523 -0.0488587,0.15504925 -0.13673102,0.088479 -0.13033076,0.25844091 0,0.3436056 0.11651524,0.0761297 0.25184672,0.0419109 0.32515215,0 0.073305,-0.0419109 0.16163412,-0.07123 0.26312822,-0.0125757 0.10149392,0.0586726 0.22477667,0.0189065 0.26244409,-0.0758501 C 1.0050285,0.65861777 1.0279385,0.43985508 0.81272585,0.28173641 Z"></path>
            </clipPath>

            <clipPath id="blob-5" clipPathUnits="objectBoundingBox">
                <path d="m 0.89188107,0.63102681 c 0,0 -0.20969819,0.35915631 -0.63710602,0.25547681 -0.36145584,-0.087683 -0.29354579,-0.59960778 0.019966,-0.57453284 0.21479881,0.0171685 0.29363766,-0.0539818 0.39978358,-0.143354 0.16837184,-0.1417634 0.47654977,0.0285519 0.2173562,0.46242618 z"></path>
            </clipPath>

            <clipPath id="blob-6" clipPathUnits="objectBoundingBox">
                <path d="M 0.82016953,0.17406522 C 0.65965517,0.12790293 0.55767265,0.25993921 0.24756645,0.23792141 -0.10838524,0.21265392 -0.02232127,0.57353918 0.28159974,0.73162932 0.60849563,0.90166588 0.92981047,0.90771516 0.98336663,0.53325813 0.98305545,0.53315783 1.033419,0.23537463 0.82016953,0.17406522 Z"></path>
            </clipPath>

            <clipPath id="blob-7" clipPathUnits="objectBoundingBox">
                <path d="M 0.95348859,0.3453432 C 0.87352755,0.22793755 0.73345739,0.20913806 0.64860704,0.22134301 0.56375863,0.233548 0.46963859,0.22797132 0.39704435,0.13303811 0.32446655,0.03812273 0.1935492,0.02921513 0.12177523,0.10564299 c -0.0776315,0.0826778 -0.18330005,0.28356567 -0.04234325,0.51718074 0.08980511,0.14883624 0.22700513,0.24649112 0.34602613,0.29723062 0.11903936,0.0507537 0.21839236,0.069538 0.27768095,0.0188964 0.0592908,-0.0506224 0.0247888,-0.10843215 0.012648,-0.13438483 C 0.70366322,0.77861526 0.68502677,0.70204009 0.82125919,0.67462863 0.98350934,0.64198242 1.0429146,0.47665917 0.9534712,0.34534289 Z"></path>
            </clipPath>

            <clipPath id="blob-8" clipPathUnits="objectBoundingBox">
                <path d="M 0.17893108,0.39329993 C 0.35351813,0.19317574 0.54022229,0.02444365 0.66725784,0.1846209 c 0.0500194,0.0630641 0.10253387,0.0913997 0.2154468,0.13489923 0.0907691,0.0349756 0.12408956,0.11724893 0.10349014,0.18347946 -0.0282315,0.090796 -0.0959661,0.13051194 -0.19193239,0.14942916 -0.0959662,0.0189153 -0.2930804,0.0921568 -0.4986573,0.18537828 C 0.16409818,0.89742733 0.041565,0.86995613 0.01522979,0.76970853 -0.01110538,0.66946066 0.0716778,0.51624723 0.17894659,0.39328437 Z"></path>
            </clipPath>

            <clipPath id="blob-9" clipPathUnits="objectBoundingBox">
                <path d="m 0.19878484,0.54952149 c 0.0948644,0.037658 0.18659047,0.12900157 0.23147543,0.2323824 0.0476057,0.10964837 0.12174965,0.13816746 0.20265469,0.13951665 C 0.68028626,0.9222062 0.79713232,0.89784974 0.83235568,0.79545792 0.87324471,0.67659658 0.79817814,0.57693058 0.90393918,0.44454479 1.0044564,0.3187227 1.0279533,0.22026449 0.9460937,0.15076487 0.87569649,0.09099695 0.76503184,0.09837773 0.62970088,0.16298884 0.55608482,0.19813815 0.46765419,0.1900365 0.38350067,0.1537582 0.26765358,0.10381555 0.14815252,0.09898887 0.07111861,0.18223163 -0.00591534,0.26549029 -0.06212164,0.44592347 0.1988004,0.54952149 Z"></path>
            </clipPath>

            <clipPath id="blob-10" clipPathUnits="objectBoundingBox">
                <path d="M 0.82434878,0.39964878 C 0.64871929,0.20307359 0.46087807,0.03734895 0.33307684,0.19468564 0.28275377,0.25663123 0.22992382,0.28446433 0.11634183,0.32719241 0.02502071,0.36154751 -0.0084975,0.4423629 0.01222098,0.50741664 0.0406161,0.59660532 0.10877064,0.63561659 0.20532094,0.65419583 0.3018702,0.67277757 0.50016865,0.74471917 0.70697592,0.83628818 0.83926324,0.89485042 0.96253315,0.86786725 0.98903876,0.76939605 1.0155444,0.67092734 0.93224802,0.52043077 0.82433439,0.39964878 Z"></path>
            </clipPath>
        </svg>
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

                <div class="values">
                    <div
                        id="post-scarcity"
                        class="button wide"
                        class:dark={activeValue !== 'post-scarcity'}
                        class:full={activeValue === 'post-scarcity'}
                        onclick={() => setActiveValue('post-scarcity')}
                    >
                        Post-Scarcity
                    </div>

                    {#if activeValue === 'post-scarcity'}
                        <div class="value post-scarcity">
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
                        </div>
                    {/if}

                    <div
                        id="curiosity"
                        class="button wide"
                        class:dark={activeValue !== 'curiosity'}
                        class:full={activeValue === 'curiosity'}
                        onclick={() => setActiveValue('curiosity')}
                    >
                        Curiosity
                    </div>

                    {#if activeValue === 'curiosity'}
                        <div class="value curiosity">
                            <p>
                                Imagine if we lived in a world where our primary incentive was curiosity instead of greed.
                                What would you do with your life if you didn't need to sell your time in exchange for food and rent?
                                What amazing art, music, and scientific research are we missing out on by not letting people explore their curiosity?
                            </p>
                        </div>
                    {/if}

                    <div
                        id="sovereignty"
                        class="button wide"
                        class:dark={activeValue !== 'sovereignty'}
                        class:full={activeValue === 'sovereignty'}
                        onclick={() => setActiveValue('sovereignty')}
                    >
                        Sovereignty
                    </div>

                    {#if activeValue === 'sovereignty'}
                        <div class="value sovereignty">
                            <p>
                                It's important to have control over the technology that we use, otherwise it will be used to control us.
                                We need to be able to audit the data we are sharing with 3rd parties and design systems that prevent data collection entirely.
                            </p>

                            <p>
                                That's why all Wetfish projects are open-source and completely Ad-free.
                                Advertisements spy on us, corrupt our media, and disconnect us from reality.
                                Unlike most other websites, Wetfish's servers are entirely subsidized by the software & hardware development work we do.
                            </p>
                        </div>
                    {/if}

                    <div
                        id="sustainability"
                        class="button wide"
                        class:dark={!activeValue !== 'sustainability'}
                        class:full={activeValue === 'sustainability'}
                        onclick={() => setActiveValue('sustainability')}
                    >
                        Sustainability
                    </div>

                    {#if activeValue === 'sustainability'}
                        <div class="value sustainability">
                            <p>
                                Economic growth at all costs is a failed model that is destroying our home, planet Earth.
                                Without a sustainable society there won't be anything left for our children and grandchildren.
                            </p>

                            <p>
                                Wetfish is involved in the management of several properties across the US and is building a decentralized network of perennial food forests.
                            </p>
                        </div>
                    {/if}
                </div>
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
                        <div class="blob-4">
                            <img src="/content/community-wiki.png" />
                        </div>
                        <div class="button wide dark">Wiki</div>
                    </div>
                </a>


                <a href="https://wetfishonline.com/">
                    <div class="project">
                        <div class="blob-7">
                            <img src="/content/community-forums.png" />
                        </div>
                        <div class="button wide dark">Forums</div>
                    </div>
                </a>


                <a href="https://wiki.wetfish.net/community">
                    <div class="project">
                        <img src="/content/community-chat.png" />
                        <div class="button wide dark">Chat Network</div>
                    </div>
                </a>

                <a href="https://wiki.wetfish.net/ai">
                    <div class="project">
                        <div class="blob-3">
                            <img src="/content/community-ai.jpg" />
                        </div>
                        <div class="button wide dark">AI / Machine Learning</div>
                    </div>
                </a>

                <a href="https://wiki.wetfish.net/hamster-wheel">
                    <div class="project">
                        <div class="blob-7">
                            <img src="/content/community-hamster-wheel.jpg" />
                        </div>
                        <div class="button wide dark">Human Hamster Wheel</div>
                    </div>
                </a>
            </div>
        </div>
    </DisappearingContent>
</section>
