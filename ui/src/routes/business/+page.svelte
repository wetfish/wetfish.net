<style lang="scss">
    .business {
        min-height: 1400px;
        background-image:url('$lib/images/bg-business.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        overflow: hidden;
    }

    .globe {
        position: absolute;
        right: 60%;
        bottom: 30vh;
        z-index: 0;
    }

    .content {
        padding: 150px 0em;
        display: flex;
        justify-content: flex-start;

        .text {
            padding: 1em;
        }

        &.three {
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

    @media screen and (min-width: 768px) {
        .globe {
            bottom: 60vh;
        }
    }

    @media screen and (min-width: 1024px) {
        .globe {
            right: 50%;
            bottom: 120vh;
        }

        .content {
            .text {
                width: 60%;
                padding: 4em 2em;
            }
        }

        h1, h3, p {
            width: 80%;
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
        .projects {
            grid-template-columns: 350px 350px 350px;
        }
    }

    @media screen and (min-width: 1600px) {
        .globe {
            right: 50%;
            bottom: 120vh;
        }

        .content {
            padding: 200px 8em;

            .text {
                width: 44%;
                padding: 4em 0;
            }
        }

        h1, h3, p {
            width: 80%;
        }

    }
</style>

<script>
    import DisappearingContent from "$lib/components/DisappearingContent.svelte";
    import Globe from "$lib/components/Globe.svelte";

    let activeValue = $state('tech-dev');

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

<section class="business">
    <div class="globe">
        <Globe />
    </div>

    <DisappearingContent>
        <div class="content one">
            <div class="text">
                <div class="section-number">01</div>
                <h3>— Let's Talk Business</h3>
                <h1>Making Your Dreams a Reality</h1>

                <p>
                    If you have a vision for a new project but need talent to make that happen, we're here to help.
                </p>

                <p>
                    When you hire Wetfish, you tap into decades of collective experience in everything from developing mobile & web applications, to CAD product design, and assembly of custom embedded Linux systems.
                </p>

                <p>
                    If you need help maintaining or adding new features to your existing projects, we do that too.
                    We will work with you to identify inefficiencies in your business operations and offer software solutions that help automate your workflow.
                </p>

                <div class="buttons">
                    <a class="button full" href="mailto:business@wetfish.net">Hire Us</a>
                </div>
            </div>
        </div>

        <div class="content two">
            <div class="text">
                <div class="section-number">02</div>
                <h3>— Our Services</h3>
                <h1>What We Can Do For You</h1>

                <div
                    id="tech-dev"
                    class="button wide"
                    class:dark={activeValue !== 'tech-dev'}
                    class:full={activeValue === 'tech-dev'}
                    onclick={() => setActiveValue('tech-dev')}
                >
                    Software & Hardware Development
                </div>

                {#if activeValue === 'tech-dev'}
                    <p>
                        Wetfish builds custom software and hardware products for startups & small businesses.
                    </p>

                    <p>
                        New businesses are always solving new problems, that's the perfect opprotunity to develop custom web and mobile applications for helping startups manage their unique supply chains and production processes.
                    </p>

                    <p>
                        Augment your team with our knowledgable staff.
                    </p>

                    <p>
                        When you hire Wetfish you're tapping into a talented group of developers, designers, and experienced project managers who will work with you every step of the product development process.
                    </p>
                {/if}

                <div
                    id="biz-dev"
                    class="button wide"
                    class:dark={activeValue !== 'biz-dev'}
                    class:full={activeValue === 'biz-dev'}
                    onclick={() => setActiveValue('biz-dev')}
                >
                    Business Development
                </div>

                {#if activeValue === 'biz-dev'}
                    <p>
                        Already run an established business? We can help streamline and improve your operations.
                        Wetfish builds custom software and hardware products that automate tedious jobs like collecting information and generating reports.
                        If your staff have more important things to be working on, Wetfish can save your organization thousands of hours of time that would otherwise be spent on data entry and spreadsheets.
                    </p>

                    <p>
                        Build new features into your existing products.
                        When you hire Wetfish you're tapping into a talented group of developers, designers, and experienced project managers who have worked together on projects ranging from charities to aerospace.
                    </p>
                {/if}

                <div
                    id="design"
                    class="button wide"
                    class:dark={activeValue !== 'design'}
                    class:full={activeValue === 'design'}
                    onclick={() => setActiveValue('design')}
                >
                    Design
                </div>

                {#if activeValue === 'design'}
                    <p>
                        Wetfish creates custom designs for web, print, and physical products.
                        We've created product labels for breweries, routers for satellites, and built a food truck from scratch.
                    </p>

                    <ul>
                        <li>Custom user experience for your web or mobile application</li>
                        <li>Develop new marketing and branding material</li>
                        <li>Create a product from scratch using 3D CAD modeling</li>
                    </ul>
                {/if}
            </div>
        </div>

        <div class="content three">
            <div class="text">
                <div class="section-number">03</div>
                <h3>— Our Portfolio</h3>
                <h1>Businesses We've Helped</h1>
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
