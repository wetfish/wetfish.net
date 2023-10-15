<style lang="scss">
    .nature {
        background-image:url('$lib/images/bg-nature.png');
        background-position: left;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
    }

    .content {
        padding: 400px 1em 0;
    }

    @media screen and (min-width: 768px) {
        .content {
            padding: 500px 2em 0;
        }
    }

    @media screen and (min-width: 1024px) {
        .content {
            padding: 500px 8em 0;
        }

        .paragraphs {
            display: flex;
            gap: 2em;
        }
    }

    @media screen and (min-width: 1600px) {
        .nature {
            min-height: 1400px;
        }

        .content {
            padding: 700px 16em 8em;
            display: flex;
            justify-content: flex-start;

            .text {
                width: 80%;
            }
        }
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
                <h1>Technology Healing<br>Mother Nature</h1>

                <div class="paragraphs">
                    <p>
                        In addition to our interest in computers and technology, many members of the Wetfish community are also passionate about nature conservation, permaculture, and homesteading.
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
