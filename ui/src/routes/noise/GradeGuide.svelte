<!--
    GradeGuide.svelte — explains the spec's three grade scales and offers a
    short decision guide for choosing a pattern. Static content; the small
    grade swatches reuse the GradeBadge atom (with no tooltip text).
-->
<script>
    import GradeBadge from './GradeBadge.svelte';

    /* Legend swatches: value + severity class, no tooltip. */
    const b = (v, cls) => ({ v, cls, tip: '', label: '' });
</script>

<style>
    .guide {
        margin-top: 20px;
        background: var(--surface);
        border: 1px solid var(--line);
        border-radius: 14px;
        padding: 22px 24px;
    }

    .guide h2 {
        margin: 0 0 4px;

        font-family: var(--mono);
        font-weight: 600;
        font-size: 15px;
        color: var(--ink);
    }

    .guide .sub {
        margin: 0 0 18px;
        font-size: 13.5px;
        color: var(--ink-3);
    }

    .guide-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 22px;
    }

    @media (max-width: 880px) {
        .guide-grid {
            grid-template-columns: 1fr;
        }
    }

    .scale h3 {
        margin: 0 0 9px;

        font-family: var(--mono);
        font-size: 12px;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--ink-2);
    }

    .scale .row {
        display: flex;
        gap: 9px;
        padding: 4px 0;

        font-size: 12.5px;
        color: var(--ink-2);
        line-height: 1.4;
    }

    .scale .row b {
        color: var(--ink);
        font-weight: 500;
    }

    .scale .row code {
        color: var(--accent);
    }

    .muted {
        color: var(--ink-3);
    }

    .choose {
        margin-top: 20px;
        border-top: 1px solid var(--line-2);
        padding-top: 16px;
    }

    .choose h3 {
        margin: 0 0 9px;

        font-family: var(--mono);
        font-size: 12px;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--ink-2);
    }

    .choose p {
        margin: 0 0 8px;
        font-size: 13.5px;
        color: var(--ink-2);
    }

    .choose p b {
        color: var(--ink);
        font-weight: 500;
    }

    .choose code {
        color: var(--accent);
    }
</style>

<div class="guide">
    <h2>How the grades work</h2>
    <p class="sub">
        Each card lists the spec's per-message grades. Higher is stronger. They quantify the words
        on the card — "encrypted, no forward secrecy" becomes a precise number with a known attack
        model.
    </p>

    <div class="guide-grid">
        <div class="scale">
            <h3>Source <span class="muted">· sender auth (0–2)</span></h3>
            <div class="row"><GradeBadge badge={b(0, 'g-bad')} /><div>No authentication — could be anyone, including an attacker.</div></div>
            <div class="row"><GradeBadge badge={b(1, 'g-mid')} /><div>Authenticated, but <b>KCI-vulnerable</b> — forgeable if the recipient's key leaks (the <code>ss</code> case).</div></div>
            <div class="row"><GradeBadge badge={b(2, 'g-ok')} /><div>Authenticated and <b>KCI-resistant</b> (an <code>es</code>/<code>se</code> DH).</div></div>
        </div>

        <div class="scale">
            <h3>Destination <span class="muted">· confidentiality (0–5)</span></h3>
            <div class="row"><GradeBadge badge={b(0, 'g-bad')} /><div>Cleartext.</div></div>
            <div class="row"><GradeBadge badge={b(1, 'g-bad')} /><div>Forward-secret, but the recipient isn't authenticated (could be an attacker).</div></div>
            <div class="row"><GradeBadge badge={b(2, 'g-mid')} /><div>To a known recipient, <b>no forward secrecy</b>, replayable.</div></div>
            <div class="row"><GradeBadge badge={b(3, 'g-mid')} /><div>Weak forward secrecy — recipient's ephemeral binding unverified.</div></div>
            <div class="row"><GradeBadge badge={b(4, 'g-mid')} /><div>Weak forward secrecy if the <b>sender's</b> key was compromised.</div></div>
            <div class="row"><GradeBadge badge={b(5, 'g-ok')} /><div>Strong forward secrecy to an authenticated recipient.</div></div>
        </div>

        <div class="scale">
            <h3>Identity hiding <span class="muted">· per key (categorical)</span></h3>
            <div class="row"><GradeBadge badge={b(0, 'g-bad')} /><div>Static key sent in clear.</div></div>
            <div class="row"><GradeBadge badge={b('1–2', 'g-mid')} /><div>Encrypted with forward secrecy, but to/from an unauthenticated party.</div></div>
            <div class="row"><GradeBadge badge={b(3, 'g-mid')} /><div>Not sent, but a passive attacker can test guesses for the key.</div></div>
            <div class="row"><GradeBadge badge={b('4–7', 'g-mid')} /><div>Various: encrypted without full FS, or guessable by an active attacker.</div></div>
            <div class="row"><GradeBadge badge={b(8, 'g-ok')} /><div>Encrypted with forward secrecy to an authenticated party (best).</div></div>
            <div class="row"><GradeBadge badge={b(9, 'g-mid')} /><div>Not sent; only an active attacker who records a run can probe it.</div></div>
            <div class="row"><GradeBadge badge={b('–', 'g-na')} /><div>No static key, or not applicable.</div></div>
        </div>
    </div>

    <div class="choose">
        <h3>Choosing a pattern</h3>
        <p>
            <b>Do you already hold the peer's key?</b> If you've pinned the server's key, use
            <code>NK</code> (anonymous client) or <code>XK</code> (authenticated client — Lightning's
            choice). If neither side knows the other, use <code>XX</code> — the safe default.
        </p>
        <p>
            <b>Need 0-RTT (data in the first message)?</b> Use a pattern ending in <code>K</code>:
            <code>IK</code> is the classic 0-RTT mutual handshake (WireGuard's base), at the cost of a
            replayable, non-forward-secret first message.
        </p>
        <p>
            <b>Care about hiding identities?</b> <code>XX</code> and <code>XK</code> give the
            initiator the strongest identity protection (grade 8); <code>IN</code>/<code>IK</code>
            send it in the clear or without forward secrecy for speed.
        </p>
    </div>
</div>
