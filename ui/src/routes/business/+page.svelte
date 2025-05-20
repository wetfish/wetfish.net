<style lang="scss">
    .business {
        position: relative;
        overflow: hidden;
    }

    .background {
        position: absolute;
        width: 100%;
        min-height: 1200px;
        background-image:url('$lib/images/bg-business.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: -315px 0px;
        transform: rotate(180deg);
    }

    .globe {
        position: absolute;
        right: 65%;
        top: 100px;
        z-index: 0;
        transform: rotate(-30deg);
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

    @media screen and (min-width: 768px) {
        .background {
            min-height: 1500px;
            background-position: -250px 25px;
        }
    }

    @media screen and (min-width: 1024px) {
        .content {
            .text {
                width: 60%;
                padding: 4em 2em;
            }
        }

        h1, h3, p {
            width: 80%;
        }
    }

    @media screen and (min-width: 1600px) {
        .content {
            padding: 200px 8em;

            .text {
                width: 50%;
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
    import Accordion from '$lib/components/Accordion.svelte';
    import Blob from '$lib/components/Blob.svelte';
    import Globe from "$lib/components/Globe.svelte";

    const accordionOptions = [
        {id: 'techdev', title: 'Software Development'},
        {id: 'bizdev', title: 'Business Automation'},
        {id: 'design', title: 'Design & Branding'},
    ];
</script>

<section class="business">
    <div class="background"></div>
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

                <Accordion options={accordionOptions}>
                    {#snippet techdev()}
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
                    {/snippet}

                    {#snippet bizdev()}
                        <p>
                            Already run an established business? We can help streamline and improve your operations.
                            Wetfish builds custom software and hardware products that automate tedious jobs like collecting information and generating reports.
                            If your staff have more important things to be working on, Wetfish can save your organization thousands of hours of time that would otherwise be spent on data entry and spreadsheets.
                        </p>

                        <p>
                            Build new features into your existing products.
                            When you hire Wetfish you're tapping into a talented group of developers, designers, and experienced project managers who have worked together on projects ranging from charities to aerospace.
                        </p>
                    {/snippet}

                    {#snippet design()}
                        <p>
                            Wetfish creates custom designs for web, print, and physical products.
                            We've created product labels for breweries, routers for satellites, and built a food truck from scratch.
                        </p>

                        <ul>
                            <li>Custom user experience for your web or mobile application</li>
                            <li>Develop new marketing and branding material</li>
                            <li>Create a product from scratch using 3D CAD modeling</li>
                        </ul>
                    {/snippet}
                </Accordion>
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
</section>
