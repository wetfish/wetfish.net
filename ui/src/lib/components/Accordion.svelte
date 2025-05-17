<style lang="scss">

</style>

<script>
	let { options, ...sections } = $props();
    let activeValue = $state(options[0].id);

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

{#each options as option}
    <div
        id={option.id}
        class="button wide"
        class:dark={activeValue !== option.id}
        class:full={activeValue === option.id}
        onclick={() => setActiveValue(option.id)}
    >
        {option.title}
    </div>

    {#if activeValue === option.id}
        {@render sections[option.id]()}
    {/if}
{/each}