<!--
    NoiseHero.svelte — the page's opening explanation. The copy describes what
    Noise is, why it exists as a family of patterns, and why this friendlier
    guide was built alongside the dense official spec.
-->
<style>
    .hero {
        padding: 56px 0 28px;
        border-bottom: 1px solid var(--line);
    }

    .eyebrow {
        margin: 0 0 14px;

        font-family: var(--mono);
        font-size: 12px;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--accent);
    }

    .hero h1 {
        margin: 0 0 18px;

        font-family: var(--mono);
        font-weight: 600;
        font-size: clamp(28px, 5vw, 44px);
        line-height: 1.08;
        letter-spacing: -0.02em;
        color: var(--ink);
    }

    /*
     * The forced break gives a deliberate two-line headline on desktop. On
     * narrow screens the first line wraps on its own, so the extra break reads
     * awkwardly; drop it there and let the headline flow as one sentence.
     */
    @media (max-width: 640px) {
        .hero h1 .hb {
            display: none;
        }
    }

    .lead {
        max-width: 64ch;
        margin: 0 0 14px;

        font-size: 17px;
        color: var(--ink-2);
    }

    .lead:last-child {
        margin-bottom: 0;
    }

    .lead b {
        color: var(--ink);
        font-weight: 500;
    }

    .lead code {
        font-family: var(--mono);
        color: var(--accent);
    }
</style>

<section class="hero">
    <p class="eyebrow">A visual reference</p>
    <h1>The Noise handshake patterns, <br class="hb" />one diagram at a time.</h1>

    <p class="lead">
        The Noise Protocol Framework is a toolkit for building encrypted connections. It is what
        the handshakes underneath WireGuard, the Lightning Network, and WhatsApp are built from.
        Noise is not one fixed protocol but a family of handshake patterns, and each pattern makes
        a different set of tradeoffs about who proves their identity, whose identity stays hidden,
        how soon you can send data, and what an attacker can do. Every pattern has a short code
        like <a class="pl" href="#p-XK">XK</a> or <a class="pl" href="#p-NK1">NK1</a>, written in a
        small token language.
    </p>

    <p class="lead">
        The official spec is precise, but it can be a lot to take in. This guide is meant to make
        the patterns easier to follow. It lays out all <b>38</b> of them with plain-English names,
        sequence diagrams, the spec's <b>security grades</b>, and notes on when each one is a
        reasonable choice. The token sequences and grades come from the
        <a href="https://noiseprotocol.org/noise.html">official spec (rev 34)</a>.
    </p>
</section>