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
    import { tick } from 'svelte';
    import MenuButton from '$lib/components/MenuButton.svelte';
    import Menu from '$lib/components/Menu.svelte';
    import logo from '$lib/images/wetfish-logo.png';
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

    /* The sticky bar and the results container, used to scroll the freshly
       filtered results into view (clicking a chip otherwise looks like nothing
       happened when the matching cards are already below the fold). */
    let barEl = $state(null);
    let resultsEl = $state(null);

    async function selectFilter(value) {
        curFilter = value;
        // Wait for the grid to re-render with the new filter before measuring.
        await tick();
        if (!resultsEl) return;
        const barHeight = barEl ? barEl.offsetHeight : 64;
        const top = resultsEl.getBoundingClientRect().top + window.scrollY - barHeight - 12;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }

    /* Smooth-scroll to an element id, leaving room for the sticky bar. */
    function scrollToId(id) {
        const el = document.getElementById(id);
        if (!el) return;
        const barHeight = barEl ? barEl.offsetHeight : 64;
        const top = el.getBoundingClientRect().top + window.scrollY - barHeight - 12;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
        history.replaceState(null, '', '#' + id);
    }

    /*
     * Inline pattern links (a.pl) point at "#p-CODE" cards. Handle them here so
     * that a link still works when its target is currently filtered out: clear
     * the filter and search first, then scroll once the card is back in the DOM.
     */
    async function handlePatternLink(event) {
        const link = event.target.closest && event.target.closest('a.pl');
        if (!link) return;
        const href = link.getAttribute('href') || '';
        if (!href.startsWith('#')) return;

        event.preventDefault();
        const id = href.slice(1);

        if (!document.getElementById(id)) {
            curFilter = 'all';
            curQuery = '';
            await tick();
        }
        scrollToId(id);
    }

    /*
     * Delegate clicks from the page root so the inline pattern links (which are
     * injected via {@html} and can't carry a Svelte handler of their own) are
     * intercepted by handlePatternLink. Using an action instead of an inline
     * onclick keeps this off a non-interactive element; the real <a> tags stay
     * keyboard-accessible and fire click on Enter, so that path works too.
     */
    function patternLinks(node) {
        node.addEventListener('click', handlePatternLink);
        return {
            destroy() {
                node.removeEventListener('click', handlePatternLink);
            }
        };
    }
</script>

<svelte:head>
    <title>Noise handshake patterns · Wetfish</title>
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

    /*
     * Inline references to a pattern (e.g. "XK" in the prose) link to that
     * pattern's card. They keep the monospace, accented look of inline code but
     * carry a faint underline (solid on hover) and a pointer cursor so it's
     * clear they're clickable.
     */
    :global(.noise-ref a.pl) {
        font-family: var(--mono);
        white-space: nowrap;
        cursor: pointer;
        text-decoration: underline;
        text-decoration-color: rgba(75, 67, 201, 0.35);
        text-underline-offset: 2px;
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

    /*
     * Default (narrow) layout: a single centered row matching the page's
     * content column (max-width 1180, 24px padding). Logo, the brand + tools
     * group, and the menu all flow inline here.
     */
    .bar-inner {
        max-width: 1180px;
        margin: 0 auto;
        padding: 10px 24px;

        display: flex;
        align-items: center;
        gap: 16px;
    }

    /* The Wetfish logo (left) and menu (right) are "site chrome". */
    .bar-logo {
        display: flex;
        align-self: start;
        flex-shrink: 0;
    }

    /*
     * Oversized on purpose: the logo is taller than the bar and hangs out of
     * the bottom (the cursive descender drops below the divider) for a playful
     * "sticker on the page" look. The negative bottom margin stops the bar from
     * growing to the logo's full height, so only the descender spills over.
     */
    .bar-logo img {
        height: 65px;
        display: block;
        margin-bottom: -22px;
    }

    .bar-logo img:hover {
        animation: bar-logo-trippy 2s linear infinite;
    }

    @keyframes bar-logo-trippy {
        0% { filter: hue-rotate(0deg); }
        50% { filter: hue-rotate(180deg); }
        100% { filter: hue-rotate(360deg); }
    }

    .menu-slot {
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }

    /*
     * The brand + tools group is the "reference guide" content. It fills the
     * space between the logo and menu so the brand sits at the content's left
     * edge and the tools at its right edge.
     */
    .bar-center {
        flex: 1;
        min-width: 0;

        display: flex;
        align-items: center;
        gap: 16px;
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

    @media (max-width: 640px) {
        .brand {
            display: none;
        }
    }

    /*
     * The shared MenuButton is built for the dark theme: it paints its glyph
     * white (invisible on this light bar) and pins its height to 32px. Under
     * this page's border-box reset, that 32px ends up including the padding and
     * border, which squashes the ≡ glyph. Recolor it and let it size to its
     * own content so the glyph sits centered with room to breathe.
     */
    :global(.noise-ref .bar .menu-button) {
        color: var(--ink);
        height: auto !important;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        font-size: 24px;
        padding: 8px 10px;
    }

    .bar-tools {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-left: auto;
        flex-wrap: wrap;
    }

    /*
     * Wide layout: once the viewport is wide enough to have real gutters
     * (~110px each side, room for the ~96px logo), break the logo and menu out
     * into those gutters while the brand + tools stay locked to the same
     * 1180px content column as the page body below. The three-column grid is
     * 1fr | content | 1fr, so the center column is viewport-centered and its
     * 24px padding lines the brand and tools up exactly with the main content.
     */
    @media (min-width: 1400px) {
        .bar-inner {
            max-width: none;
            padding: 10px 0;

            display: grid;
            grid-template-columns: 1fr minmax(0, 1180px) 1fr;
            gap: 0;
        }

        .bar-logo {
            grid-column: 1;
            justify-self: start;
            padding-left: 24px;
        }

        .bar-center {
            grid-column: 2;
            padding: 0 24px;
        }

        .menu-slot {
            grid-column: 3;
            justify-self: end;
            padding-right: 24px;
        }
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

<div class="noise-ref" use:patternLinks>
    <div class="bar" bind:this={barEl}>
        <div class="bar-inner">
            <a href="/" class="bar-logo" aria-label="Wetfish home">
                <img src={logo} alt="Wetfish logo" />
            </a>

            <div class="bar-center">
                <div class="brand">noise://<span class="dim">handshake-patterns</span></div>

                <div class="bar-tools">
                    <div class="chips">
                        {#each FILTERS as [value, label]}
                            <button class="chip" class:on={curFilter === value} onclick={() => selectFilter(value)}>
                                {label}
                            </button>
                        {/each}
                    </div>
                    <input
                        class="nref-search"
                        type="search"
                        placeholder="filter… e.g. XK, mutual"
                        bind:value={curQuery}
                        aria-label="Search patterns"
                    />
                </div>
            </div>

            <div class="menu-slot">
                <MenuButton />
            </div>
        </div>
    </div>

    <main>
        <NoiseHero />
        <NotationPrimer />
        <GradeGuide />

        <div class="results" bind:this={resultsEl}>
            {#each SECT as sec (sec.g)}
                {@const sectionCards = CARDS.filter((c) => c.g === sec.g && matches(c))}
                {#if sectionCards.length}
                    <PatternGrid section={sec} cards={sectionCards} />
                {/if}
            {/each}

            {#if totalVisible === 0}
                <div class="empty">No patterns match.</div>
            {/if}
        </div>

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
            (public domain). <br />
            Built by Wetfish as a developer community resource.
            <a href="/community">Join us for monthly show &amp; tell</a>.
        </div>
    </footer>

    <Tooltip />
</div>