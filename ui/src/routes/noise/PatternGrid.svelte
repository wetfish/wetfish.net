<!--
    PatternGrid.svelte — one pattern group: a shared SectionHead followed by a
    responsive grid of PatternCards.

    Props:
      section — { g, t, d } from SECT in patterns.js
      cards   — the already-filtered cards for this group
-->
<script>
    import SectionHead from './SectionHead.svelte';
    import PatternCard from './PatternCard.svelte';

    let { section, cards } = $props();
</script>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(470px, 1fr));
        gap: 18px;
        margin-top: 18px;
    }

    @media (max-width: 520px) {
        .grid {
            grid-template-columns: 1fr;
        }
    }
</style>

<SectionHead title={section.t} count={cards.length} desc={section.d} />

<div class="grid">
    {#each cards as card (card.c)}
        <PatternCard {card} />
    {/each}
</div>
