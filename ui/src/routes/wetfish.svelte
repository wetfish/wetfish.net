<style lang="scss">
    .wetfish {
        background-image:url('$lib/images/bg-wetfish.png');
        min-height: 1080px;
        background-repeat: no-repeat;
        background-size: cover;
        padding-top: 250px;
        overflow: hidden;
    }

    .content {
        max-width: 33%;
        padding-left: 8em;
    }

    h3 {
        color: #0EE5A3;
    }

    h2 {
        color: transparent;
        background: linear-gradient(95.37deg, #7AA8F3 -2.07%, #88FF82 124.81%);
        background-clip: text;
        -webkit-background-clip: text;
    }

    p {
        margin: 1em 0 2em;
        padding-right: 7em;
    }
</style>

<script>
    import DisappearingContent from "$lib/components/DisappearingContent.svelte";
	import Laserfish from "$lib/components/Laserfish.svelte";
</script>

<section class="wetfish">
    <Laserfish />

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
</section>
