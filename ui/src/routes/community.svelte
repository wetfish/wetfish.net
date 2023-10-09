<style lang="scss">
    .community {
        background-image:url('$lib/images/bg-community.png');
        min-height: 1400;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
    }

    .content {
        margin: 150px 0;
        display: flex;
        justify-content: flex-end;

        .text {
            padding: 1em;
        }
    }

    @media screen and (min-width: 1024px) {
        .content {
            margin: 200px 0;

            .text {
                width: 30%;
                margin-right: 24em;
                padding: 4em 0;
            }
        }
    }
</style>

<script>
    import DisappearingContent from "$lib/components/DisappearingContent.svelte";
</script>

<section class="community">
    <DisappearingContent>
        <div class="content">
            <div class="text">
                <div class="section-number">02</div>
                <h3>— Wetfish: Our Community Is...</h3>
                <h1>The Best Internet on the Internet</h1>

                <p>
                    Wetfish started in 2005 on IRC and has evolved into a network of open-source projects including a wiki, forum, file hosting, video streaming, and chat rooms.
                    It's a home grown, certified organic, mini-internet on the internet.
                </p>

                <p>
                    Whether you're looking for someone to help give you advice on your next 3D printing project or just looking to blow off steam and laugh at funny memes, we've got you covered.
                </p>

                <div class="buttons">
                    <a class="button full" href="https://wet.fish/community">Learn More About the Community</a>
                </div>
            </div>
        </div>
    </DisappearingContent>
</section>
