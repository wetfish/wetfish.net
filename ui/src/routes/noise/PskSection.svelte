<!--
    PskSection.svelte — explains the pre-shared-key modifier and shows worked
    placements as real diagrams (built from PSKEX via analyse()), plus a table
    of common variants. The diagrams use HandshakeDiagram, so no {@html} SVG;
    only the short captions carry trusted inline markup.
-->
<script>
    import HandshakeDiagram from './HandshakeDiagram.svelte';
    import { PSKEX, analyse } from './patterns.js';

    /* Build each worked example's analysis once, alongside its caption. */
    const examples = PSKEX.map((p) => ({
        code: p.c,
        pattern: p,
        analysis: analyse(p),
        cap: p.cap
    }));
</script>

<style>
    .psk {
        margin-top: 18px;
        background: var(--surface);
        border: 1px solid var(--line);
        border-radius: 14px;
        padding: 26px 28px;
    }

    .psk-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 28px;
        margin-top: 6px;
    }

    @media (max-width: 820px) {
        .psk-grid {
            grid-template-columns: 1fr;
        }
    }

    .psk h3 {
        margin: 0 0 8px;

        font-family: var(--mono);
        font-size: 13px;
        color: var(--ink);
    }

    .psk h3.mt {
        margin-top: 18px;
    }

    .psk p {
        margin: 0 0 12px;
        font-size: 14px;
        color: var(--ink-2);
    }

    .psk p b {
        color: var(--ink);
        font-weight: 500;
    }

    .psk code {
        color: var(--accent);
        font-size: 13px;
    }

    .psk .fine {
        margin-top: 12px;
        font-size: 12.5px;
        color: var(--ink-3);
    }

    .psk-ex {
        margin-top: 6px;
    }

    .psk-ex .cap {
        margin: 14px 0 4px;

        font-family: var(--mono);
        font-size: 12px;
        color: var(--ink-2);
    }

    .psk-ex .cap :global(b) {
        color: var(--ink);
    }

    /* The diagram wrapper mirrors the card diagram styling. */
    .psk-ex .diagram {
        background: var(--surface-2);
        border: 1px solid var(--line-2);
        border-radius: 10px;
        padding: 6px 8px;
    }

    table.pskt {
        width: 100%;
        border-collapse: collapse;
        margin-top: 6px;
        font-size: 12.5px;
    }

    table.pskt th {
        text-align: left;
        padding: 6px 8px;
        border-bottom: 1px solid var(--line);

        font-family: var(--mono);
        font-weight: 500;
        font-size: 10.5px;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--ink-3);
    }

    table.pskt td {
        padding: 6px 8px;
        border-bottom: 1px solid var(--line-2);
        color: var(--ink-2);
    }

    table.pskt td:first-child {
        font-family: var(--mono);
        color: var(--ink);
    }

    table.pskt code {
        font-family: var(--mono);
        color: var(--accent);
    }
</style>

<div class="psk">
    <div class="psk-grid">
        <div>
            <h3>What it adds</h3>
            <p>
                A <b>pre-shared symmetric key</b> is a 32-byte secret both parties already hold. A
                <code>psk</code> token mixes it into <b>both</b> the encryption key and the
                transcript hash, via <code>MixKeyAndHash</code>.
            </p>
            <p>
                It's an <b>independent layer</b> of authentication and secrecy. Even if the DH math
                is broken, a static key leaks, or a quantum computer arrives, an attacker without the
                PSK can neither read nor forge the session. <b>WireGuard</b> uses exactly this —
                <code>Noise_IKpsk2</code> — as an optional post-quantum / defense-in-depth hedge.
            </p>
            <h3>Where it goes</h3>
            <p>
                A modifier names the placement: <code>psk0</code> puts the token at the
                <b>start of message 1</b>; <code>psk1</code>, <code>psk2</code>, … put it at the
                <b>end of message 1, 2, …</b>. The name carries it: <code>NNpsk0</code>,
                <code>XXpsk3</code>, <code>IKpsk2</code>.
            </p>
            <h3>Pitfalls</h3>
            <p>
                The PSK must be a real <b>256-bit secret distributed out of band</b> — never a
                password. There's a validity rule: you can't encrypt anything after a
                <code>psk</code> token until you've also sent an ephemeral, so the PSK-derived key
                stays randomized. And for patterns that transmit the initiator's static
                (<code>X</code>/<code>I</code>), the responder often can't look up the right pairwise
                PSK until it decrypts that key, so <code>psk1</code> is preferred over
                <code>psk0</code> there.
            </p>
        </div>

        <div class="psk-ex">
            <h3>Worked placements</h3>
            {#each examples as ex (ex.code)}
                <div class="cap">{@html ex.cap}</div>
                <div class="diagram">
                    <HandshakeDiagram pattern={ex.pattern} analysis={ex.analysis} uid={ex.code} />
                </div>
            {/each}

            <h3 class="mt">Common variants</h3>
            <table class="pskt">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>placement</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Npsk0</td><td><code>psk</code> opens the one-way message</td></tr>
                    <tr><td>NNpsk0 / NNpsk2</td><td>start of msg 1 / end of msg 2</td></tr>
                    <tr><td>XXpsk3</td><td>end of message 3</td></tr>
                    <tr><td>XKpsk3</td><td>end of message 3</td></tr>
                    <tr><td>IKpsk1 / IKpsk2</td><td>end of msg 1 / end of msg 2</td></tr>
                    <tr><td>Xpsk1</td><td>after the initiator's static (preferred for X)</td></tr>
                </tbody>
            </table>
            <p class="fine">
                Any PSK modifier can be applied to almost any base pattern, so they multiply the
                catalog. The six above are the spec's recommended placements.
            </p>
        </div>
    </div>
</div>
