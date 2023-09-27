<style lang="scss">
    .nature {
        background-image:url('$lib/images/bg-nature.png');
        min-height: 1400px;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
    }

    .content {
        padding: 700px 16em 8em;
        display: flex;
        justify-content: flex-start;

        .text {
            width: 80%;
        }
    }

    .paragraphs {
        display: flex;
        gap: 2em;
    }

    h1 {
        width: 60%;
    }

</style>

<script>
    import DisappearingContent from "$lib/components/DisappearingContent.svelte";
</script>

<section class="nature">
    <DisappearingContent>
        <div class="content">
            <div class="text">
                <div class="section-number">04</div>
                <h3>— Nature Conservation</h3>
                <h1>Technology Healing Mother Nature</h1>

                <div class="paragraphs">
                    <p>
                        Despite our interest in computers and technology, many members of the Wetfish community are also passionate about nature conservation, permaculture, and homesteading.
                        Our mission is to bring back an abundance of biodiversity by accelerating the restoration of entire ecosystems.
                    </p>

                    <p>
                        We believe the concept of human technological progress vs nature is a false dichotomy.
                        Instead, we're using modern technology to reconnect the public with natural areas and get more young people involved in land management.
                    </p>
                </div>

                <div class="buttons">
                    <a class="button full" href="https://wet.fish/nature">Learn More About Nature Conservation</a>
                </div>
            </div>
        </div>
    </DisappearingContent>
</section>