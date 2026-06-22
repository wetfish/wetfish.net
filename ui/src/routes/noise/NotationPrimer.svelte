<!--
    NotationPrimer.svelte — two side-by-side reference panels: how to read the
    pattern notation, and a legend for the diagram colors. Static content.
-->
<style>
    .primer {
        margin: 32px 0 0;
        display: grid;
        grid-template-columns: 1.15fr 0.85fr;
        gap: 20px;
    }

    @media (max-width: 820px) {
        .primer {
            grid-template-columns: 1fr;
        }
    }

    .panel {
        background: var(--surface);
        border: 1px solid var(--line);
        border-radius: 14px;
        padding: 22px 24px;
    }

    .panel h2 {
        margin: 0 0 14px;

        font-family: var(--mono);
        font-weight: 600;
        font-size: 15px;
        letter-spacing: -0.01em;
        color: var(--ink);
    }

    /* "Reading the notation": a list of term/definition rows. */
    .rule {
        display: flex;
        gap: 12px;
        padding: 11px 0;
        border-top: 1px solid var(--line-2);
    }

    .rule:first-of-type {
        border-top: 0;
        padding-top: 0;
    }

    .rule .k {
        min-width: 104px;
        flex-shrink: 0;
        padding-top: 1px;

        font-family: var(--mono);
        font-size: 13px;
        color: var(--accent);
    }

    .rule .v {
        font-size: 14px;
        color: var(--ink-2);
    }

    .rule .v b {
        color: var(--ink);
        font-weight: 500;
    }

    .rule .v code {
        color: var(--accent);
    }

    /* "Diagram legend": a swatch next to its meaning. */
    .legend-row {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 0;
    }

    .legend-row .v {
        font-size: 13.5px;
        color: var(--ink-2);
    }

    .legend-row .v b {
        color: var(--ink);
        font-weight: 500;
    }

    .swatch {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 34px;
        padding: 3px 9px;
        border-radius: 6px;
        border: 1px solid;
        flex-shrink: 0;

        font-family: var(--mono);
        font-size: 12px;
        font-weight: 500;
    }

    .sw-send {
        background: var(--send-bg);
        border-color: var(--send-bd);
        color: var(--send-tx);
    }

    .sw-fs {
        background: var(--fs-bg);
        border-color: var(--fs-bd);
        color: var(--fs-tx);
    }

    .sw-auth {
        background: var(--auth-bg);
        border-color: var(--auth-bd);
        color: var(--auth-tx);
    }

    .sw-ss {
        background: var(--ss-bg);
        border-color: var(--ss-bd);
        color: var(--ss-tx);
    }

    .sw-dash {
        border-style: dashed;
    }

    .swatch-pre {
        background: var(--pre-bg);
        border-color: var(--pre-bd);
        color: var(--pre-tx);
    }
</style>

<div class="primer">
    <div class="panel">
        <h2>Reading the notation</h2>

        <div class="rule">
            <div class="k">Two letters</div>
            <div class="v">
                <b>Initiator's static key, then responder's.</b> N = none, K = known to the peer
                beforehand, X = transmitted in-handshake, I = transmitted immediately in
                message&nbsp;1.
            </div>
        </div>
        <div class="rule">
            <div class="k">One letter</div>
            <div class="v">
                A token like <code>e</code> or <code>s</code> means <b>send that public key</b> onto
                the wire.
            </div>
        </div>
        <div class="rule">
            <div class="k">Two-letter token</div>
            <div class="v">
                <code>ee es se ss</code> means <b>do a Diffie–Hellman</b> — nothing is sent, a
                shared secret is stirred into the key. First letter = initiator's key, second =
                responder's.
            </div>
        </div>
        <div class="rule">
            <div class="k">Who's authed</div>
            <div class="v">
                A DH that touches a party's <b>static</b> key authenticates that party.
                <code>es</code> → responder, <code>se</code> → initiator, <code>ee</code> → secrecy
                only.
            </div>
        </div>
        <div class="rule">
            <div class="k">The dots</div>
            <div class="v">
                <code>...</code> separates keys <b>known in advance</b> (out of band) from the live
                handshake below.
            </div>
        </div>
        <div class="rule">
            <div class="k">The “1”</div>
            <div class="v">
                A deferred variant: that side's authenticating DH is pushed to a
                <b>later message</b>.
            </div>
        </div>
        <div class="rule">
            <div class="k">Encryption</div>
            <div class="v">
                Once any DH runs, a key exists, so a key sent <b>after</b> it is encrypted; one sent
                before goes out in cleartext.
            </div>
        </div>
    </div>

    <div class="panel">
        <h2>Diagram legend</h2>

        <div class="legend-row">
            <span class="swatch sw-send">e&nbsp;s</span>
            <div class="v"><b>Send a key.</b> Ephemeral or static public key onto the wire.</div>
        </div>
        <div class="legend-row">
            <span class="swatch sw-send sw-dash">s</span>
            <div class="v"><b>Dashed = cleartext.</b> A static key sent before any DH is unencrypted.</div>
        </div>
        <div class="legend-row">
            <span class="swatch sw-fs">ee</span>
            <div class="v"><b>Forward secrecy.</b> DH between the two ephemerals.</div>
        </div>
        <div class="legend-row">
            <span class="swatch sw-auth">es</span>
            <div class="v"><b>Authentication.</b> DH with a static key (es → responder, se → initiator).</div>
        </div>
        <div class="legend-row">
            <span class="swatch sw-ss">ss</span>
            <div class="v"><b>Static–static DH.</b> Mixes both static keys; KCI-vulnerable.</div>
        </div>
        <div class="legend-row">
            <span class="swatch swatch-pre">s</span>
            <div class="v"><b>Known in advance.</b> A static key shared out of band, above the dots.</div>
        </div>
    </div>
</div>
