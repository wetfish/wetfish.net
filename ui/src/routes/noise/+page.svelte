<!--
    /noise — a visual reference for all 38 Noise Protocol handshake patterns.

    This page lives outside the (app) route group, so it does not get the
    site's full-size chrome. Instead it renders its own compact sticky bar
    (<TopNav compact /> plus filters and search) and wires up the shared Menu
    overlay itself by subscribing to menuStore.

    The page owns the .noise-ref theme tokens and the cross-component "theme
    insulation" resets that stop the site's global gradient headings and large
    body type from bleeding into this light-themed reference. Per-section
    markup and styling live in the colocated components.
-->
<script>
    import TopNav from '$lib/components/TopNav.svelte';
    import Menu from '$lib/components/Menu.svelte';
    import { menuStore } from '$lib/store.js';

    import { CARDS, SECT, FILTERS } from './patterns.js';
    import NoiseHero from './NoiseHero.svelte';
    import NotationPrimer from './NotationPrimer.svelte';
    import GradeGuide from './GradeGuide.svelte';
    import PatternGrid from './PatternGrid.svelte';
    import PskSection from './PskSection.svelte';
    import SectionHead from './SectionHead.svelte';
    import Tooltip from './Tooltip.svelte';

    /* The shared menu overlay is normally rendered by the (app) layout; this
       page is outside that group, so it subscribes and renders Menu itself. */
    let menuIsOpen = $state(false);
    menuStore.subscribe((value) => {
        menuIsOpen = value;
    });

    /* Filter + search state. */
    let curFilter = $state('all');
    let curQuery = $state('');

    const query = $derived(curQuery.trim().toLowerCase());

    /* A card is visible when its group matches the active chip and its search
       blob contains the query (empty query matches everything). */
    function matches(card) {
        return (
            (curFilter === 'all' || card.g === curFilter) &&
            (!query || card.blob.includes(query))
        );
    }

    const totalVisible = $derived(CARDS.filter(matches).length);
</script>

<svelte:head>
    <title>Noise handshake patterns — wetfish</title>
    <meta
        name="description"
        content="A visual reference for all 38 Noise Protocol handshake patterns: sequence diagrams, plain-English names, security grades, and when to use each."
    />
</svelte:head>

<style>
    .noise-ref {
        /* Light reference theme — scoped entirely to this page. */
        --bg: #f5f6f9;
        --surface: #ffffff;
        --surface-2: #fbfbfd;
        --ink: #1b2030;
        --ink-2: #565d72;
        --ink-3: #888ea0;
        --line: #e4e6ec;
        --line-2: #edeef3;
        --accent: #4b43c9;
        --accent-soft: #ecebfb;
        --send-bg: #fbede7;
        --send-bd: #d8895f;
        --send-tx: #8f3d1f;
        --fs-bg: #e2f3ec;
        --fs-bd: #4fb18c;
        --fs-tx: #136349;
        --auth-bg: #eae7fb;
        --auth-bd: #8a7fe0;
        --auth-tx: #3e319a;
        --ss-bg: #faf0db;
        --ss-bd: #d6a94b;
        --ss-tx: #855811;
        --pre-bg: #efeff2;
        --pre-bd: #bcbcc4;
        --pre-tx: #55555f;

        /* Self-hosted IBM Plex Mono for code; existing Satoshi for body. */
        --mono: 'plex-mono', ui-monospace, 'SF Mono', Menlo, monospace;
        --sans: 'satoshi', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;

        min-height: 100vh;
        background: var(--bg);
        color: var(--ink);
        font-family: var(--sans);
        font-size: 15px;
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
    }

    /* ---- Theme insulation -------------------------------------------------
       The site's global stylesheet paints h2/h3 with a transparent gradient
       fill and sets large body type and decorative heading fonts. Those rules
       would otherwise bleed into this page (invisible headings, oversized
       text). These :global resets neutralize the bleed across every child
       component; component-level heading rules use a class and therefore win
       over these element-only baselines. */
    :global(.noise-ref h1),
    :global(.noise-ref h2),
    :global(.noise-ref h3),
    :global(.noise-ref h4) {
        margin: 0;
        color: var(--ink);
        background: none;
        background-clip: border-box;
        -webkit-background-clip: border-box;
        -webkit-text-fill-color: currentColor;
        font-family: var(--sans);
        font-weight: 500;
        display: block;
        text-transform: none;
        letter-spacing: normal;
    }

    :global(.noise-ref p),
    :global(.noise-ref ul),
    :global(.noise-ref li) {
        margin: 0;
        font-family: var(--sans);
        font-size: inherit;
    }

    :global(.noise-ref *) {
        box-sizing: border-box;
    }

    :global(.noise-ref a) {
        color: var(--accent);
        text-decoration: none;
    }

    :global(.noise-ref a:hover) {
        text-decoration: underline;
    }

    :global(.noise-ref code) {
        font-family: var(--mono);
    }

    :global(.noise-ref :focus-visible) {
        outline: 2px solid var(--accent);
        outline-offset: 2px;
        border-radius: 4px;
    }

    @media (prefers-reduced-motion: reduce) {
        :global(.noise-ref *) {
            animation: none !important;
            transition: none !important;
        }
    }

    /* ---- Sticky bar ------------------------------------------------------- */
    .bar {
        position: sticky;
        top: 0;
        z-index: 20;

        background: rgba(245, 246, 249, 0.86);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid var(--line);
    }

    .bar-inner {
        max-width: 1180px;
        margin: 0 auto;
        padding: 10px 24px;

        display: flex;
        align-items: center;
        gap: 16px;
        flex-wrap: wrap;
    }

    .brand {
        font-family: var(--mono);
        font-weight: 600;
        font-size: 15px;
        letter-spacing: -0.01em;
        white-space: nowrap;
    }

    .brand .dim {
        color: var(--ink-3);
        font-weight: 400;
    }

    @media (max-width: 560px) {
        .brand {
            display: none;
        }
    }

    .bar-tools {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-left: auto;
        flex-wrap: wrap;
    }

    .chips {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
    }

    .chip {
        font-family: var(--mono);
        font-size: 12px;
        padding: 6px 11px;
        border: 1px solid var(--line);
        border-radius: 999px;
        background: var(--surface);
        color: var(--ink-2);
        cursor: pointer;
        transition: 0.12s;
    }

    .chip:hover {
        border-color: var(--accent);
        color: var(--accent);
    }

    .chip.on {
        background: var(--accent);
        border-color: var(--accent);
        color: #fff;
    }

    .nref-search {
        width: 180px;
        padding: 7px 11px;

        font-family: var(--mono);
        font-size: 13px;
        color: var(--ink);

        background: var(--surface);
        border: 1px solid var(--line);
        border-radius: 8px;
        outline: none;
    }

    .nref-search:focus {
        border-color: var(--accent);
        box-shadow: 0 0 0 3px var(--accent-soft);
    }

    /* ---- Layout ----------------------------------------------------------- */
    main {
        max-width: 1180px;
        margin: 0 auto;
        padding: 0 24px 80px;
    }

    .empty {
        text-align: center;
        padding: 60px 20px;

        font-family: var(--mono);
        font-size: 14px;
        color: var(--ink-3);
    }

    footer {
        margin-top: 60px;
        padding: 28px 0;
        border-top: 1px solid var(--line);

        color: var(--ink-3);
        font-size: 13px;
    }

    .foot-inner {
        max-width: 1180px;
        margin: 0 auto;
        padding: 0 24px;
    }

    /* Win over the :global(.noise-ref a) accent color for footer links. */
    .noise-ref footer a {
        color: var(--ink-2);
    }
</style>

{#if menuIsOpen}
    <Menu />
{/if}

<div class="noise-ref">
    <div class="bar">
        <div class="bar-inner">
            <TopNav compact />
            <span class="brand">Noise <span class="dim">· handshake patterns</span></span>

            <div class="bar-tools">
                <div class="chips">
                    {#each FILTERS as [value, label]}
                        <button class="chip" class:on={curFilter === value} onclick={() => (curFilter = value)}>
                            {label}
                        </button>
                    {/each}
                </div>
                <input
                    class="nref-search"
                    type="search"
                    placeholder="search patterns…"
                    bind:value={curQuery}
                    aria-label="Search patterns"
                />
            </div>
        </div>
    </div>

    <main>
        <NoiseHero />
        <NotationPrimer />
        <GradeGuide />

        {#each SECT as sec (sec.g)}
            {@const sectionCards = CARDS.filter((c) => c.g === sec.g && matches(c))}
            {#if sectionCards.length}
                <PatternGrid section={sec} cards={sectionCards} />
            {/if}
        {/each}

        {#if totalVisible === 0}
            <div class="empty">No patterns match.</div>
        {/if}

        <SectionHead
            title="Pre-shared keys (PSK)"
            count="modifier"
            desc="An independent secret layered onto any base pattern."
        />
        <PskSection />
    </main>

    <footer>
        <div class="foot-inner">
            Pattern definitions, security grades, and identity-hiding grades from
            <a href="https://noiseprotocol.org/noise.html">The Noise Protocol Framework</a>, rev. 34
            (public domain). Built by wetfish as a developer community resource —
            <a href="/community">join us for monthly show &amp; tell</a>.
        </div>
    </footer>

    <Tooltip />
</div>
