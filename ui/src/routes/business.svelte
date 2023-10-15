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
</script>

<section class="business">
    <div class="globe">
        <Globe />
    </div>

    <DisappearingContent>
        <div class="content">
            <div class="text">
                <div class="section-number">03</div>
                <h3>— Custom Solutions for your Business</h3>
                <h1>Making Your Dreams a Reality</h1>

                <p>
                    In 2017 the team behind Wetfish decided to incorporate as a Research & Development startup.
                    Since then we've worked on projects ranging from charities and podcasting to aerospace.
                </p>

                <p>
                    If you have a vision for a new project, but need talent to make that happen — we're here to help.
                    When you hire Wetfish, you tap into decades of collective experience in everything from developing mobile & web applications, to CAD product design, and assembly of custom embedded Linux systems.
                </p>

                <p>
                    If you're struggling to maintain or upgrade your existing projects — we'll help with that too.
                    Our design team will work with you to create new user experiences and improve your marketing.
                </p>

                <p>
                    Wetfish helps you identify inefficiencies in your business operations and builds custom software & hardware to automate your workflows.
                </p>

                <div class="buttons">
                    <a class="button" href="https://wet.fish/business">Learn More About Our Work</a>
                    <a class="button full" href="mailto:BusinessRelations@wetfish.net">Hire Us</a>
                </div>
            </div>
        </div>
    </DisappearingContent>
</section>
