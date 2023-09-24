<style lang="scss">
    .business {
        background-image:url('$lib/images/bg-business.jpg');
        min-height: 1400px;
        background-repeat: no-repeat;
        background-size: cover;

    }

    .content {
        padding: 200px 8em;
        display: flex;
        justify-content: flex-start;

        .text {
            width: 44%;
            padding: 4em 0;
        }
    }

    h1, h3, p {
        width: 80%;
    }
</style>

<script>
    import DisappearingContent from "$lib/components/DisappearingContent.svelte";
</script>

<section class="business">
    <DisappearingContent>
        <div class="content">
            <div class="text">
                <div class="section-number">03</div>
                <h3>— Software Development</h3>
                <h1>Making Your Dreams a Reality</h1>

                <p>
                    After years of working together on passion projects, the team behind Wetfish decided to incorporate as a software development agency. Since 2017 we've worked on projects for other companies including charities, podcasting, e-commerce platforms, and custom hardware for satellites.
                </p>

                <p>
                    If you have a vision for a new project, but need talent to make that happen — we're here to help. When you hire Wetfish, you tap into decades of collective experience in everything from software application development, DevOps, and InfoSec to design, marketing, and branding.
                </p>

                <p>
                    If you need help maintaining or adding new features to your existing projects, we do that too. We will work with you to identify inefficiencies in your business operations and offer software solutions that help automate your workflow.
                </p>

                <div class="buttons">
                    <a class="button" href="https://wet.fish/business">Learn More About Our Work</a>
                    <a class="button full" href="mailto:BusinessRelations@wetfish.net">Hire Us</a>
                </div>
            </div>
        </div>
    </DisappearingContent>
</section>