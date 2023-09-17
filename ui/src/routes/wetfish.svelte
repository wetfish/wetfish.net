<style>
    .wetfish {
        background-image:url('$lib/assets/bg-wetfish.png');
        min-height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        padding-top: 150px;
    }

    .content {
        padding-top: 200px;
    }
</style>

<script>
    let sectionContent;

    function handleScroll() {
        const boundingBox = sectionContent.getBoundingClientRect();
        sectionContent.style['mask-image'] =
            `linear-gradient(
                0deg,
                rgba(0, 0, 0, 1),
                rgba(0, 0, 0, 1) ${((boundingBox.height + boundingBox.top) - 100) / 2}px,
                transparent ${(boundingBox.height + boundingBox.top) - 100}px
            )`;
    }
</script>

<section class="wetfish">
    <div class="content" bind:this={sectionContent}>
        <div class="section-number">01</div>
        <h4>— What is Wetfish?</h4>
        <h2>A community of scientists, makers, and artists working together to inspire hope for a better world.</h2>
        <p>Wetfish operates an open-source network of projects that bring people together without sacrificing privacy or freedom. We are the internet, distilled.</p>

        <button>Join the Community</button>
        <button>Hire Us</button>
    </div>
</section>

<svelte:window on:scroll={handleScroll} />