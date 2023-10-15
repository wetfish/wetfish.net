<style lang="scss">
    .wetfish {
        min-height: 1080px;
        background-image:url('$lib/images/bg-wetfish.png');
        background-position: right;
        background-repeat: no-repeat;
        background-size: cover;
        padding-top: 125px;
        overflow: hidden;
        position: relative;
    }

    h3 {
        color: #0EE5A3;
    }

    .content {
        padding: 0 1em 25em;
    }

    @media screen and (min-width: 1024px) {
        .wetfish {
            padding-top: 250px;
        }

        .content {
            max-width: 50%;
            padding-left: 4em;
            padding-bottom: 0;
        }

        p {
            padding-right: 4em;
        }
    }

    @media screen and (min-width: 1600px) {
        .content {
            max-width: 33%;
            padding-left: 8em;
        }

        p {
            padding-right: 7em;
        }
    }
</style>

<script>
    import DisappearingContent from "$lib/components/DisappearingContent.svelte";
	import Laserfish from "$lib/components/Laserfish.svelte";
</script>

<section class="wetfish">
    <DisappearingContent>
        <div class="content">

            <div class="section-number">01</div>
            <h3>— What is Wetfish?</h3>
            <h2>A community of scientists, makers, and artists working together to inspire hope for a better world.</h2>
            <p>Wetfish operates an open-source network of projects that bring people together without sacrificing privacy or freedom. We are the internet, distilled.</p>

            <div class="buttons">
                <a class="button" href="https://wet.fish/community">Join the Community</a>
                <a class="button full" href="mailto:BusinessRelations@wetfish.net">Hire Us</a>
            </div>
        </div>
    </DisappearingContent>

    <Laserfish />
</section>
