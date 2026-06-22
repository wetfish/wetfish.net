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
    <h1>The Noise handshake patterns,<br />one diagram at a time.</h1>

    <p class="lead">
        The Noise Protocol Framework is a toolkit for building encrypted connections — the
        handshakes underneath WireGuard, the Lightning Network, and WhatsApp. Rather than one
        fixed protocol, Noise is a family of handshake patterns, each making different tradeoffs:
        who proves their identity, whose identity stays hidden, how soon you can send data, and
        what an attacker can do. Every pattern gets a terse code like <code>XK</code> or
        <code>NK1</code>, built from a tiny token language.
    </p>

    <p class="lead">
        The official spec is precise but dense. This guide exists to make the patterns
        approachable — decoding all <b>38</b> of them into plain-English names, sequence diagrams,
        the spec's <b>security grades</b>, and notes on when to reach for each. Token sequences and
        grades come from the <a href="https://noiseprotocol.org/noise.html">official spec (rev 34)</a>.
    </p>
</section>
