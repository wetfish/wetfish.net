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
        Each card lists the spec's per-message grades, where higher is stronger. They put a number
        on the words on the card, so "encrypted, no forward secrecy" turns into a specific value
        with a known attack model.
    </p>

    <div class="guide-grid">
        <div class="scale">
            <h3>Source <span class="muted">· sender auth (0 to 2)</span></h3>
            <div class="row"><GradeBadge badge={b(0, 'g-bad')} /><div>No authentication; could be anyone, including an attacker.</div></div>
            <div class="row"><GradeBadge badge={b(1, 'g-mid')} /><div>Authenticated, but <b>KCI-vulnerable</b>: forgeable if the recipient's key leaks (the <code>ss</code> case).</div></div>
            <div class="row"><GradeBadge badge={b(2, 'g-ok')} /><div>Authenticated and <b>KCI-resistant</b> (an <code>es</code>/<code>se</code> DH).</div></div>
        </div>

        <div class="scale">
            <h3>Destination <span class="muted">· confidentiality (0 to 5)</span></h3>
            <div class="row"><GradeBadge badge={b(0, 'g-bad')} /><div>Cleartext.</div></div>
            <div class="row"><GradeBadge badge={b(1, 'g-bad')} /><div>Forward-secret, but the recipient isn't authenticated (could be an attacker).</div></div>
            <div class="row"><GradeBadge badge={b(2, 'g-mid')} /><div>To a known recipient, <b>no forward secrecy</b>, replayable.</div></div>
            <div class="row"><GradeBadge badge={b(3, 'g-mid')} /><div>Weak forward secrecy; the recipient's ephemeral binding is unverified.</div></div>
            <div class="row"><GradeBadge badge={b(4, 'g-mid')} /><div>Weak forward secrecy if the <b>sender's</b> key was compromised.</div></div>
            <div class="row"><GradeBadge badge={b(5, 'g-ok')} /><div>Strong forward secrecy to an authenticated recipient.</div></div>
        </div>

        <div class="scale">
            <h3>Identity hiding <span class="muted">· per key (categorical)</span></h3>
            <div class="row"><GradeBadge badge={b(0, 'g-bad')} /><div>Static key sent in clear.</div></div>
            <div class="row"><GradeBadge badge={b('1-2', 'g-mid')} /><div>Encrypted with forward secrecy, but to or from an unauthenticated party.</div></div>
            <div class="row"><GradeBadge badge={b(3, 'g-mid')} /><div>Not sent, but a passive attacker can test guesses for the key.</div></div>
            <div class="row"><GradeBadge badge={b('4-7', 'g-mid')} /><div>Various cases: encrypted without full forward secrecy, or guessable by an active attacker.</div></div>
            <div class="row"><GradeBadge badge={b(8, 'g-ok')} /><div>Encrypted with forward secrecy to an authenticated party (best).</div></div>
            <div class="row"><GradeBadge badge={b(9, 'g-mid')} /><div>Not sent; only an active attacker who records a run can probe it.</div></div>
            <div class="row"><GradeBadge badge={b('\u2013', 'g-na')} /><div>No static key, or not applicable.</div></div>
        </div>
    </div>

    <div class="choose">
        <h3>Choosing a pattern</h3>
        <p>
            <b>Do you already hold the peer's key?</b> If you have pinned the server's key, use
            <a class="pl" href="#p-NK">NK</a> for an anonymous client, or
            <a class="pl" href="#p-XK">XK</a> for an authenticated one (the Lightning Network's
            choice). If neither side knows the other ahead of time,
            <a class="pl" href="#p-XX">XX</a> is a reasonable default.
        </p>
        <p>
            <b>Need 0-RTT (data in the first message)?</b> Use a pattern whose responder is known in
            advance, like <a class="pl" href="#p-IK">IK</a>, the standard 0-RTT mutual handshake that
            WireGuard builds on. The cost is a first message that can be replayed and is not
            forward-secret.
        </p>
        <p>
            <b>Care about hiding identities?</b> <a class="pl" href="#p-XX">XX</a> and
            <a class="pl" href="#p-XK">XK</a> give the initiator the strongest identity protection
            (grade 8). <a class="pl" href="#p-IN">IN</a> and <a class="pl" href="#p-IK">IK</a> send
            it in the clear or without forward secrecy in exchange for speed.
        </p>
    </div>
</div>