/*
 * patterns.js — Noise handshake pattern data and derivations.
 *
 * Everything in here is pure data and logic: the pattern catalogue, the
 * spec's security/identity grades, the human-readable notes, and the helper
 * functions that turn those into view-models. There is no DOM access and no
 * markup generation — the Svelte components in this directory consume these
 * exports and render the actual HTML/SVG.
 *
 * Pattern token sequences, security grades (Section 7.7 / 18.2), and
 * identity-hiding grades (Section 7.8) are transcribed from the Noise
 * Protocol Framework specification, revision 34 (public domain).
 */

/*
 * Message direction markers. These short aliases keep the large pattern and
 * grade tables below compact and aligned with the spec's own notation:
 *   A ("->")  initiator -> responder
 *   B ("<-")  responder -> initiator
 */
export const A = '->';
export const B = '<-';

/*
 * The pattern catalogue. Each entry:
 *   c   — the pattern code (e.g. "XK")
 *   g   — group: 'oneway' | 'fundamental' | 'deferred'
 *   pre — pre-shared keys known out of band, as [dir, [tokens]]
 *   m   — handshake messages, each as [dir, [tokens]]
 */
export const P = [
    { c: 'N', g: 'oneway', pre: [[B, ['s']]], m: [[A, ['e', 'es']]] },
    { c: 'K', g: 'oneway', pre: [[A, ['s']], [B, ['s']]], m: [[A, ['e', 'es', 'ss']]] },
    { c: 'X', g: 'oneway', pre: [[B, ['s']]], m: [[A, ['e', 'es', 's', 'ss']]] },
    { c: 'NN', g: 'fundamental', pre: [], m: [[A, ['e']], [B, ['e', 'ee']]] },
    { c: 'NK', g: 'fundamental', pre: [[B, ['s']]], m: [[A, ['e', 'es']], [B, ['e', 'ee']]] },
    { c: 'NX', g: 'fundamental', pre: [], m: [[A, ['e']], [B, ['e', 'ee', 's', 'es']]] },
    { c: 'XN', g: 'fundamental', pre: [], m: [[A, ['e']], [B, ['e', 'ee']], [A, ['s', 'se']]] },
    { c: 'XK', g: 'fundamental', pre: [[B, ['s']]], m: [[A, ['e', 'es']], [B, ['e', 'ee']], [A, ['s', 'se']]] },
    { c: 'XX', g: 'fundamental', pre: [], m: [[A, ['e']], [B, ['e', 'ee', 's', 'es']], [A, ['s', 'se']]] },
    { c: 'KN', g: 'fundamental', pre: [[A, ['s']]], m: [[A, ['e']], [B, ['e', 'ee', 'se']]] },
    { c: 'KK', g: 'fundamental', pre: [[A, ['s']], [B, ['s']]], m: [[A, ['e', 'es', 'ss']], [B, ['e', 'ee', 'se']]] },
    { c: 'KX', g: 'fundamental', pre: [[A, ['s']]], m: [[A, ['e']], [B, ['e', 'ee', 'se', 's', 'es']]] },
    { c: 'IN', g: 'fundamental', pre: [], m: [[A, ['e', 's']], [B, ['e', 'ee', 'se']]] },
    { c: 'IK', g: 'fundamental', pre: [[B, ['s']]], m: [[A, ['e', 'es', 's', 'ss']], [B, ['e', 'ee', 'se']]] },
    { c: 'IX', g: 'fundamental', pre: [], m: [[A, ['e', 's']], [B, ['e', 'ee', 'se', 's', 'es']]] },
    { c: 'NK1', g: 'deferred', pre: [[B, ['s']]], m: [[A, ['e']], [B, ['e', 'ee', 'es']]] },
    { c: 'NX1', g: 'deferred', pre: [], m: [[A, ['e']], [B, ['e', 'ee', 's']], [A, ['es']]] },
    { c: 'X1N', g: 'deferred', pre: [], m: [[A, ['e']], [B, ['e', 'ee']], [A, ['s']], [B, ['se']]] },
    { c: 'X1K', g: 'deferred', pre: [[B, ['s']]], m: [[A, ['e', 'es']], [B, ['e', 'ee']], [A, ['s']], [B, ['se']]] },
    { c: 'XK1', g: 'deferred', pre: [[B, ['s']]], m: [[A, ['e']], [B, ['e', 'ee', 'es']], [A, ['s', 'se']]] },
    { c: 'X1K1', g: 'deferred', pre: [[B, ['s']]], m: [[A, ['e']], [B, ['e', 'ee', 'es']], [A, ['s']], [B, ['se']]] },
    { c: 'X1X', g: 'deferred', pre: [], m: [[A, ['e']], [B, ['e', 'ee', 's', 'es']], [A, ['s']], [B, ['se']]] },
    { c: 'XX1', g: 'deferred', pre: [], m: [[A, ['e']], [B, ['e', 'ee', 's']], [A, ['es', 's', 'se']]] },
    { c: 'X1X1', g: 'deferred', pre: [], m: [[A, ['e']], [B, ['e', 'ee', 's']], [A, ['es', 's']], [B, ['se']]] },
    { c: 'K1N', g: 'deferred', pre: [[A, ['s']]], m: [[A, ['e']], [B, ['e', 'ee']], [A, ['se']]] },
    { c: 'K1K', g: 'deferred', pre: [[A, ['s']], [B, ['s']]], m: [[A, ['e', 'es']], [B, ['e', 'ee']], [A, ['se']]] },
    { c: 'KK1', g: 'deferred', pre: [[A, ['s']], [B, ['s']]], m: [[A, ['e']], [B, ['e', 'ee', 'se', 'es']]] },
    { c: 'K1K1', g: 'deferred', pre: [[A, ['s']], [B, ['s']]], m: [[A, ['e']], [B, ['e', 'ee', 'es']], [A, ['se']]] },
    { c: 'K1X', g: 'deferred', pre: [[A, ['s']]], m: [[A, ['e']], [B, ['e', 'ee', 's', 'es']], [A, ['se']]] },
    { c: 'KX1', g: 'deferred', pre: [[A, ['s']]], m: [[A, ['e']], [B, ['e', 'ee', 'se', 's']], [A, ['es']]] },
    { c: 'K1X1', g: 'deferred', pre: [[A, ['s']]], m: [[A, ['e']], [B, ['e', 'ee', 's']], [A, ['se', 'es']]] },
    { c: 'I1N', g: 'deferred', pre: [], m: [[A, ['e', 's']], [B, ['e', 'ee']], [A, ['se']]] },
    { c: 'I1K', g: 'deferred', pre: [[B, ['s']]], m: [[A, ['e', 'es', 's']], [B, ['e', 'ee']], [A, ['se']]] },
    { c: 'IK1', g: 'deferred', pre: [[B, ['s']]], m: [[A, ['e', 's']], [B, ['e', 'ee', 'se', 'es']]] },
    { c: 'I1K1', g: 'deferred', pre: [[B, ['s']]], m: [[A, ['e', 's']], [B, ['e', 'ee', 'es']], [A, ['se']]] },
    { c: 'I1X', g: 'deferred', pre: [], m: [[A, ['e', 's']], [B, ['e', 'ee', 's', 'es']], [A, ['se']]] },
    { c: 'IX1', g: 'deferred', pre: [], m: [[A, ['e', 's']], [B, ['e', 'ee', 'se', 's']], [A, ['es']]] },
    { c: 'I1X1', g: 'deferred', pre: [], m: [[A, ['e', 's']], [B, ['e', 'ee', 's']], [A, ['se', 'es']]] }
];

/*
 * Spec security grades (rev 34, Section 7.7 + 18.2).
 *   one      — one-way patterns: [source, destination] for the single message
 *   hs       — handshake message grades, aligned to m: [[src, dst], ...]
 *   tp       — transport (post-handshake) rows: [dir, src, dst]
 */
export const GRADES = {
    N: { one: [0, 2] }, K: { one: [1, 2] }, X: { one: [1, 2] },
    NN: { hs: [[0, 0], [0, 1]], tp: [[A, 0, 1]] },
    NK: { hs: [[0, 2], [2, 1]], tp: [[A, 0, 5]] },
    NX: { hs: [[0, 0], [2, 1]], tp: [[A, 0, 5]] },
    XN: { hs: [[0, 0], [0, 1], [2, 1]], tp: [[B, 0, 5]] },
    XK: { hs: [[0, 2], [2, 1], [2, 5]], tp: [[B, 2, 5]] },
    XX: { hs: [[0, 0], [2, 1], [2, 5]], tp: [[B, 2, 5]] },
    KN: { hs: [[0, 0], [0, 3]], tp: [[A, 2, 1], [B, 0, 5]] },
    KK: { hs: [[1, 2], [2, 4]], tp: [[A, 2, 5], [B, 2, 5]] },
    KX: { hs: [[0, 0], [2, 3]], tp: [[A, 2, 5], [B, 2, 5]] },
    IN: { hs: [[0, 0], [0, 3]], tp: [[A, 2, 1], [B, 0, 5]] },
    IK: { hs: [[1, 2], [2, 4]], tp: [[A, 2, 5], [B, 2, 5]] },
    IX: { hs: [[0, 0], [2, 3]], tp: [[A, 2, 5], [B, 2, 5]] },
    NK1: { hs: [[0, 0], [2, 1]], tp: [[A, 0, 5]] },
    NX1: { hs: [[0, 0], [0, 1], [0, 3]], tp: [[B, 2, 1], [A, 0, 5]] },
    X1N: { hs: [[0, 0], [0, 1], [0, 1], [0, 3]], tp: [[A, 2, 1]] },
    X1K: { hs: [[0, 2], [2, 1], [0, 5], [2, 3]], tp: [[A, 2, 5], [B, 2, 5]] },
    XK1: { hs: [[0, 0], [2, 1], [2, 5]], tp: [[B, 2, 5]] },
    X1K1: { hs: [[0, 0], [2, 1], [0, 5], [2, 3]], tp: [[A, 2, 5], [B, 2, 5]] },
    X1X: { hs: [[0, 0], [2, 1], [0, 5], [2, 3]], tp: [[A, 2, 5], [B, 2, 5]] },
    XX1: { hs: [[0, 0], [0, 1], [2, 3]], tp: [[B, 2, 5], [A, 2, 5]] },
    X1X1: { hs: [[0, 0], [0, 1], [0, 3], [2, 3]], tp: [[A, 2, 5], [B, 2, 5]] },
    K1N: { hs: [[0, 0], [0, 1], [2, 1]], tp: [[B, 0, 5]] },
    K1K: { hs: [[0, 2], [2, 1], [2, 5]], tp: [[B, 2, 5]] },
    KK1: { hs: [[0, 0], [2, 3]], tp: [[A, 2, 5], [B, 2, 5]] },
    K1K1: { hs: [[0, 0], [2, 1], [2, 5]], tp: [[B, 2, 5]] },
    K1X: { hs: [[0, 0], [2, 1], [2, 5]], tp: [[B, 2, 5]] },
    KX1: { hs: [[0, 0], [0, 3], [2, 3]], tp: [[B, 2, 5], [A, 2, 5]] },
    K1X1: { hs: [[0, 0], [0, 1], [2, 3]], tp: [[B, 2, 5], [A, 2, 5]] },
    I1N: { hs: [[0, 0], [0, 1], [2, 1]], tp: [[B, 0, 5]] },
    I1K: { hs: [[0, 2], [2, 1], [2, 5]], tp: [[B, 2, 5]] },
    IK1: { hs: [[0, 0], [2, 3]], tp: [[A, 2, 5], [B, 2, 5]] },
    I1K1: { hs: [[0, 0], [2, 1], [2, 5]], tp: [[B, 2, 5]] },
    I1X: { hs: [[0, 0], [2, 1], [2, 5]], tp: [[B, 2, 5]] },
    IX1: { hs: [[0, 0], [0, 3], [2, 3]], tp: [[B, 2, 5], [A, 2, 5]] },
    I1X1: { hs: [[0, 0], [0, 1], [2, 3]], tp: [[B, 2, 5], [A, 2, 5]] }
};

/* Identity-hiding grades (Section 7.8). "NA" is the spec's en-dash placeholder. */
export const NA = '\u2013';

/* Fundamental patterns' [initiator, responder] identity-hiding grades. */
const IDH_FUND = {
    N: [NA, 3], K: [5, 5], X: [4, 3],
    NN: [NA, NA], NK: [NA, 3], NX: [NA, 1],
    XN: [2, NA], XK: [8, 3], XX: [8, 1],
    KN: [7, NA], KK: [5, 5], KX: [7, 6],
    IN: [0, NA], IK: [4, 3], IX: [0, 6]
};

/* Deferred patterns that override the inherited fundamental grade. */
const IDH_OVR = { NK1: [NA, 9], XK1: [8, 9], IK1: [0, 9] };

/* Resolve identity-hiding grades for a code; deferred variants inherit their base. */
export function idh(code) {
    if (IDH_OVR[code]) return IDH_OVR[code];
    const base = code.replace(/1/g, '');
    return IDH_FUND[base] || [NA, NA];
}

/* Short, friendly nicknames for the one-way and fundamental patterns. */
export const NICK = {
    N: 'Sealed sender — public-key encryption', K: 'Pre-shared sender', X: 'Self-revealing sender',
    NN: 'Unauthenticated DH', NK: 'Known responder', NX: 'Anonymous initiator',
    XN: 'Revealed initiator only', XK: 'Named initiator, known responder', XX: 'Mutual introduction',
    KN: 'Pre-shared initiator only', KK: 'Pre-shared mutual', KX: 'Pre-shared initiator, revealed responder',
    IN: 'Upfront initiator only', IK: '0-RTT to a known responder', IX: 'Upfront mutual'
};

/* "In the wild" callouts for patterns with notable real-world deployments. */
export const WILD = {
    XK: 'The Lightning Network transport (BOLT #8) is built on Noise_XK.',
    IK: 'WireGuard uses Noise_IKpsk2 — this pattern plus a pre-shared key.'
};

/*
 * Hand-written "when to use it" notes for the one-way and fundamental
 * patterns. These contain trusted inline <b>/<code> markup and are rendered
 * via {@html} in the note component. Deferred patterns generate their note
 * programmatically (see deferredNote).
 */
export const NOTES = {
    N: 'Public-key encryption with no sender identity — anyone can encrypt to a known recipient, like libsodium\u2019s sealed boxes. <b>Strength:</b> dead simple, sender stays anonymous. <b>Pitfall:</b> zero sender authentication and the message is replayable. <b>Use</b> to encrypt files or records to a known public key.',
    K: 'Both keys known in advance; the sender is authenticated by a static\u2013static DH. <b>Strength:</b> authenticated one-way stream with no key transmitted. <b>Pitfall:</b> the auth is KCI-vulnerable (a leaked recipient key lets an attacker forge sender messages) and there\u2019s no ephemeral forward secrecy. <b>Use</b> for pre-provisioned device telemetry.',
    X: 'Like K, but the sender ships its static key (encrypted) instead of it being pre-known. <b>Strength:</b> the sender can be any party the recipient learns on the fly. <b>Pitfall:</b> same KCI and replay caveats as K. <b>Use</b> for encrypted submissions to a known endpoint.',
    NN: 'Pure unauthenticated DH. <b>Strength:</b> a forward-secret channel with zero setup. <b>Pitfall:</b> no authentication at all — trivially MITM\u2019d, so it\u2019s only safe if you authenticate by some other means afterward. <b>Use</b> for testing, or as a base you layer auth onto.',
    NK: 'Anonymous client to a server whose key you already trust (pinned). <b>Strength:</b> responder is authenticated and the client can send 0-RTT data encrypted to it. <b>Pitfall:</b> no client auth, and that 0-RTT data has no forward secrecy and is replayable. <b>Use</b> when you\u2019ve pinned a server key and the client needn\u2019t identify itself.',
    NX: 'Anonymous client; the server reveals and proves its identity in-handshake. <b>Strength:</b> no prior key distribution, server authenticated, server identity hidden from passive eavesdroppers. <b>Pitfall:</b> no client auth, and the server\u2019s key is exposed to an active attacker who completes a handshake. <b>Use</b> for opportunistic encryption to a self-describing server.',
    XN: 'Client proves its identity; the server stays anonymous. <b>Strength:</b> server-side anonymity with authenticated clients. <b>Pitfall:</b> the server is unauthenticated, so the client can\u2019t be sure who it\u2019s talking to. Rare on its own.',
    XK: 'Client knows the server\u2019s key in advance and transmits its own — mutual auth against a pinned server. <b>Strength:</b> full mutual authentication with the strongest initiator identity hiding (grade 8). <b>Pitfall:</b> needs the server key out of band; no 0-RTT. The Lightning Network\u2019s transport.',
    XX: 'The workhorse. Neither side needs prior knowledge; both transmit and prove their static keys mid-handshake. <b>Strength:</b> mutual auth, both identities encrypted, maximal flexibility — the right default when in doubt. <b>Pitfall:</b> 1.5 round trips and no 0-RTT. <b>Use</b> for general client\u2013server channels.',
    KN: 'The server already knows the client\u2019s key; the server is anonymous. <b>Strength:</b> authenticated client without transmitting its key. <b>Pitfall:</b> server unauthenticated; the client\u2019s first reply has only weak forward secrecy until the server answers. Niche.',
    KK: 'Both keys pre-shared; 0-RTT mutual auth. <b>Strength:</b> the fastest mutual handshake when both peers already hold each other\u2019s keys. <b>Pitfall:</b> the first message is KCI-vulnerable (source 1) and not forward-secret. <b>Use</b> for fixed pairs of peers provisioned ahead of time.',
    KX: 'Client key pre-known; the server transmits its own. <b>Strength:</b> authenticated client, server proves identity in-band. <b>Pitfall:</b> the client\u2019s identity hiding is weak (grade 7). Niche, for asymmetric provisioning.',
    IN: 'Client sends its static immediately, in the clear; server anonymous. <b>Strength:</b> one round trip, minimal. <b>Pitfall:</b> the client\u2019s identity is exposed to any eavesdropper (grade 0) and the server is unauthenticated. <b>Use</b> only where client privacy doesn\u2019t matter.',
    IK: 'Client knows the server\u2019s key and sends its own immediately for 0-RTT mutual auth. <b>Strength:</b> the fastest mutual 0-RTT handshake. <b>Pitfall:</b> the client\u2019s key is encrypted only to the server\u2019s static (no forward secrecy, identity grade 4) and the first message is replayable and KCI-vulnerable. WireGuard\u2019s base pattern.',
    IX: 'Client sends its static immediately (cleartext); the server transmits its own. <b>Strength:</b> mutual auth in one round trip with no prior key distribution. <b>Pitfall:</b> client identity is fully exposed to eavesdroppers (grade 0). <b>Use</b> where speed beats client privacy.'
};

/* Word maps for building human-readable pattern names. */
const IW = { N: 'Anonymous', K: 'Pre-shared', X: 'Self-revealing', I: 'Upfront' };
const RW = { N: 'anonymous', K: 'pre-known', X: 'self-revealing' };

/*
 * Split a code into its initiator/responder bases and deferred ("1") flags.
 * Returns { i, iD, r, rD } — i/r are the base letters, iD/rD whether deferred.
 */
export function bases(code) {
    const mm = code.match(/^([NKXI])(1?)([NKX])(1?)$/);
    if (mm) return { i: mm[1], iD: mm[2] === '1', r: mm[3], rD: mm[4] === '1' };
    return { i: code, iD: false, r: null, rD: false };
}

/* Build the plain-English descriptive name for a pattern. */
export function descName(p) {
    const b = bases(p.c);
    if (p.g === 'oneway') {
        return ({
            N: 'Anonymous sender → known recipient',
            K: 'Pre-shared sender → known recipient',
            X: 'Self-revealing sender → known recipient'
        })[p.c];
    }
    let s = IW[b.i] + ' initiator → ' + RW[b.r] + ' responder';
    if (b.iD && b.rD) s += ' · both auths deferred';
    else if (b.iD) s += ' · initiator auth deferred';
    else if (b.rD) s += ' · responder auth deferred';
    return s;
}

/* Generate the "when to use it" note for a deferred pattern (trusted markup). */
export function deferredNote(p) {
    const base = p.c.replace(/1/g, '');
    const bp = P.find((x) => x.c === base);
    const b = bases(p.c);
    const side = b.iD && b.rD
        ? 'both parties\u2019 authenticating DHs are'
        : b.iD ? 'the initiator\u2019s authenticating DH is'
            : 'the responder\u2019s authenticating DH is';
    let t = 'Same trust model as <code>' + base + '</code>, but ' + side + ' pushed to a later message.';
    const extra = p.m.length - bp.m.length;
    if (extra > 0) {
        t += ' That costs ' + extra + ' extra message' + (extra > 1 ? 's' : '') +
            ' (' + p.m.length + ' total vs ' + bp.m.length + ').';
    }
    t += ' <b>Choose it</b> when you hold the responder\u2019s key but want to skip 0-RTT data, or to keep the option of swapping a DH for a signature or KEM in a future Noise extension.';
    if (IDH_OVR[p.c]) {
        t += ' <b>Bonus:</b> it hardens the responder\u2019s identity — probing the server\u2019s key now needs an active attacker, not a passive eavesdropper.';
    }
    return t;
}

/*
 * Analyse a pattern's tokens into per-message "pills" plus summary facts.
 * Each pill carries a semantic type the diagram and prose both read from:
 *   send | fs | auth | ss | psk
 * Returns { msgs, eeMsg, esMsg, seMsg, ss, iStat, rStat }.
 */
export function analyse(p) {
    let hasKey = false, eeSeen = false;
    const msgs = p.m.map((mm, mi) => {
        const party = mm[0] === A ? 'initiator' : 'responder';
        const pills = mm[1].map((tok) => {
            if (tok === 'e') return { tok, type: 'send' };
            if (tok === 's') return { tok, type: 'send', stat: true, enc: hasKey, fs: eeSeen, party, msg: mi + 1 };
            if (tok === 'ee') { eeSeen = true; hasKey = true; return { tok, type: 'fs' }; }
            if (tok === 'es') { hasKey = true; return { tok, type: 'auth', who: 'responder' }; }
            if (tok === 'se') { hasKey = true; return { tok, type: 'auth', who: 'initiator' }; }
            if (tok === 'ss') { hasKey = true; return { tok, type: 'ss' }; }
            if (tok === 'psk') { return { tok, type: 'psk' }; }
            return { tok, type: 'send' };
        });
        return { dir: mm[0], party, pills };
    });

    let eeMsg, esMsg, seMsg, ss = false;
    const statics = [];
    msgs.forEach((m, i) => m.pills.forEach((pl) => {
        if (pl.type === 'fs' && !eeMsg) eeMsg = i + 1;
        if (pl.type === 'auth' && pl.who === 'responder' && !esMsg) esMsg = i + 1;
        if (pl.type === 'auth' && pl.who === 'initiator' && !seMsg) seMsg = i + 1;
        if (pl.type === 'ss') ss = true;
        if (pl.stat) statics.push(pl);
    }));

    return {
        msgs, eeMsg, esMsg, seMsg, ss,
        iStat: statics.find((s) => s.party === 'initiator'),
        rStat: statics.find((s) => s.party === 'responder')
    };
}

/* Render an arrow glyph for a direction. */
export function arr(d) { return d === A ? '\u2192' : '\u2190'; }

/* Describe how/when a static key was sent, for the prose summary. */
function fsNote(st) {
    if (!st) return null;
    if (!st.enc) return 'sent in cleartext (message ' + st.msg + ')';
    if (st.enc && !st.fs) return 'sent encrypted, no forward secrecy (message ' + st.msg + ')';
    return 'sent encrypted with forward secrecy (message ' + st.msg + ')';
}

/*
 * Tooltip copy keyed by the entity it annotates. These are surfaced via the
 * tooltip action; the diagram pills, grade badges, and tags all read from them.
 */
export const TAG_TIP = {
    'mutual auth': 'Both parties prove their identities to each other during the handshake. The purple matches the es/se authentication steps in the diagram.',
    'responder auth': 'The responder proves its identity to the initiator (via es); the initiator stays anonymous. The purple matches the es step in the diagram.',
    'initiator auth': 'The initiator proves its identity to the responder (via se); the responder stays anonymous. The purple matches the se step in the diagram.',
    'unauthenticated': 'Neither party proves its identity, so the channel is open to an active man-in-the-middle unless you authenticate some other way.',
    'sender auth': 'The sender proves its identity to the recipient, via a static\u2013static DH (which is KCI-vulnerable). The purple matches the authentication step in the diagram.',
    'sender anonymous': 'The sender proves no identity \u2014 like a sealed box that anyone could have sent.',
    '0-RTT capable': 'The initiator already knows the responder\u2019s key, so it can encrypt useful data in the very first message with no waiting round-trip. The catch: that first payload has no forward secrecy and can be replayed.',
    'one-way': 'A single sender streams to a recipient with no reply \u2014 for files, records, or stored messages.',
    'deferred': 'A \u201c1\u201d variant: one side\u2019s authenticating DH is pushed to a later message, trading an extra round-trip or weaker early-payload protection for added flexibility.'
};

/* Per-token tooltip [key, text] for diagram pills. */
export function pillTip(p) {
    switch (p.tok) {
        case 'e':
            return ['e', 'Ephemeral key: a fresh, single-use public key generated for this session and sent in the clear.'];
        case 's': {
            const who = p.party === 'initiator' ? 'initiator' : 'responder';
            const how = !p.enc
                ? 'sent in the clear, because no key exists yet'
                : (p.fs ? 'sent encrypted, with forward secrecy' : 'sent encrypted, but without forward secrecy');
            return ['s', 'Static key: the ' + who + '\u2019s long-term identity key \u2014 ' + how + '.'];
        }
        case 'ee':
            return ['ee', 'Diffie\u2013Hellman between the two ephemeral keys. Provides forward secrecy. Nothing is transmitted \u2014 a shared secret is mixed into the key.'];
        case 'es':
            return ['es', 'Diffie\u2013Hellman between the initiator\u2019s ephemeral and the responder\u2019s static key. Authenticates the responder.'];
        case 'se':
            return ['se', 'Diffie\u2013Hellman between the initiator\u2019s static and the responder\u2019s ephemeral key. Authenticates the initiator.'];
        case 'ss':
            return ['ss', 'Diffie\u2013Hellman between both static keys. Adds confidentiality but is KCI-vulnerable. Nothing is transmitted.'];
        case 'psk':
            return ['psk', 'Mixes the pre-shared key into both the encryption key and the transcript hash.'];
        default:
            return [p.tok, ''];
    }
}

/* Source-authentication grade tooltips (0\u20132). */
export const SRC_TIP = {
    0: 'No authentication \u2014 this payload could have been sent by anyone, including an active attacker.',
    1: 'Authenticated, but vulnerable to key-compromise impersonation: based on a static\u2013static DH, so it can be forged by anyone who steals the recipient\u2019s static key.',
    2: 'Authenticated and KCI-resistant \u2014 based on an ephemeral\u2013static DH (es or se) that cannot be forged.'
};

/* Destination-confidentiality grade tooltips (0\u20135). */
export const DST_TIP = {
    0: 'No confidentiality \u2014 sent in cleartext.',
    1: 'Encrypted with forward secrecy, but the recipient isn\u2019t authenticated, so it might be received by an active attacker.',
    2: 'Encrypted to the recipient\u2019s static key only: no forward secrecy, and the message can be replayed.',
    3: 'Weak forward secrecy \u2014 the recipient\u2019s ephemeral key isn\u2019t bound to its identity, so an active attacker could forge it and later decrypt.',
    4: 'Weak forward secrecy only if the sender\u2019s own static key was previously compromised; otherwise strong.',
    5: 'Strong forward secrecy to a fully authenticated recipient.'
};

/* Identity-hiding grade tooltips (categorical). */
export const IDH_TIP = {
    0: 'Sent in clear \u2014 visible to any eavesdropper.',
    1: 'Encrypted with forward secrecy, but an anonymous initiator can probe for this key.',
    2: 'Encrypted with forward secrecy, but sent to an anonymous responder.',
    3: 'Not transmitted, but a passive attacker can test guesses for the responder\u2019s private key (and link repeated runs to the same responder).',
    4: 'Encrypted to the responder\u2019s static key without forward secrecy \u2014 a leaked responder key reveals it.',
    5: 'Not transmitted, but a passive attacker can test guesses for the (responder key, initiator key) pair.',
    6: 'Encrypted, but with weak forward secrecy: an active attacker posing as the initiator who later learns the initiator\u2019s key can decrypt it.',
    7: 'Not transmitted, but an active attacker posing as the initiator who later learns the initiator\u2019s key can test guesses for it.',
    8: 'Encrypted with forward secrecy to an authenticated party \u2014 the strongest protection.',
    9: 'Not transmitted; only an active attacker who poses as the initiator and records a full run can test guesses for the responder\u2019s key.'
};

export const NA_TIP = 'This party has no static key, or identity hiding doesn\u2019t apply here.';

/*
 * Build the prose summary for a card: a one-line verdict, a list of facts
 * (trusted inline markup), and the descriptive tags.
 */
function describe(p, an) {
    const b = bases(p.c);
    let verdict, authTag, authClass;

    if (p.g === 'oneway') {
        if (p.c === 'N') {
            verdict = 'Anonymous sender encrypts to a known recipient — like a sealed box.';
            authTag = 'sender anonymous';
            authClass = 'auth-none';
        } else {
            verdict = 'Sender authenticated via a static\u2013static DH (KCI-vulnerable).';
            authTag = 'sender auth';
            authClass = 'auth-one';
        }
    } else {
        const ra = !!an.esMsg, ia = !!an.seMsg;
        if (ra && ia) { verdict = 'Mutual authentication.'; authTag = 'mutual auth'; authClass = 'auth-mutual'; }
        else if (ra) { verdict = 'Responder authenticated; initiator stays anonymous.'; authTag = 'responder auth'; authClass = 'auth-one'; }
        else if (ia) { verdict = 'Initiator authenticated; responder stays anonymous.'; authTag = 'initiator auth'; authClass = 'auth-one'; }
        else { verdict = 'No authentication — open to active attackers.'; authTag = 'unauthenticated'; authClass = 'auth-none'; }
    }

    const li = [];
    if (p.g === 'oneway') {
        li.push('Recipient\u2019s key is <b>known in advance</b>; one-way channel (no reply).');
        li.push('No ephemeral\u2013ephemeral DH, so <b>limited forward secrecy</b>.');
        if (p.c === 'X') li.push('Sender\u2019s key is <b>' + fsNote(an.iStat) + '</b>.');
    } else {
        if (an.eeMsg) li.push('Forward secrecy from <b>message ' + an.eeMsg + '</b> (ee).');
        if (an.esMsg) li.push('Responder authenticated at <b>message ' + an.esMsg + '</b> (es).');
        if (an.seMsg) li.push('Initiator authenticated at <b>message ' + an.seMsg + '</b> (se).');
        const iId = b.i === 'N'
            ? 'no static key (fully anonymous)'
            : (p.pre.some((x) => x[0] === A) ? 'known to the responder in advance, never sent' : fsNote(an.iStat));
        const rId = b.r === 'N'
            ? 'no static key'
            : (p.pre.some((x) => x[0] === B) ? 'known to the initiator in advance, never sent' : fsNote(an.rStat));
        if (iId) li.push('Initiator identity: <b>' + iId + '</b>.');
        if (rId) li.push('Responder identity: <b>' + rId + '</b>.');
        if (an.ss) li.push('Includes a <b>static\u2013static DH</b> (ss) — extra confidentiality, KCI-vulnerable.');
    }

    const tags = [
        { text: authTag, cls: authClass },
        { text: p.m.length + ' message' + (p.m.length > 1 ? 's' : ''), cls: '' }
    ];
    if (p.g !== 'oneway' && b.r === 'K') tags.push({ text: '0-RTT capable', cls: '' });
    if (p.g === 'oneway') tags.push({ text: 'one-way', cls: '' });
    if (p.g === 'deferred') tags.push({ text: 'deferred', cls: '' });

    return { verdict, li, tags };
}

/*
 * Turn a numeric grade into a display badge: its value, a severity class
 * (g-ok / g-mid / g-bad / g-na), the tooltip text, and an accessible label.
 */
export function badge(kind, v) {
    let cls = 'g-mid', tip = '', label = '';
    if (v === NA || v === '' || v == null) {
        cls = 'g-na'; tip = NA_TIP; label = 'Not applicable';
    } else if (kind === 'idh') {
        cls = (v === 8 ? 'g-ok' : (v === 0 ? 'g-bad' : 'g-mid'));
        tip = IDH_TIP[v] || ''; label = 'Identity-hiding grade ' + v;
    } else if (kind === 'src') {
        cls = (v >= 2 ? 'g-ok' : (v === 0 ? 'g-bad' : 'g-mid'));
        tip = SRC_TIP[v] || ''; label = 'Source grade ' + v + ' of 2';
    } else {
        cls = (v >= 5 ? 'g-ok' : (v <= 1 ? 'g-bad' : 'g-mid'));
        tip = DST_TIP[v] || ''; label = 'Destination grade ' + v + ' of 5';
    }
    return { v, cls, tip, label };
}

/* Attach tooltip text to a tag descriptor. */
function tagInfo(t) { return { text: t.text, cls: t.cls, tip: TAG_TIP[t.text] || null }; }

/* Split a code into characters, flagging the deferred "1"s for styling. */
function codeParts(c) { return c.split('').map((ch) => ({ ch, one: ch === '1' })); }

/*
 * Build the security-grades table model: one row per handshake message (plus
 * transport rows), each with source/destination badges, and the two
 * identity-hiding badges.
 */
function gradeData(p) {
    const G = GRADES[p.c];
    if (!G) return null;

    const rows = [];
    if (G.one) {
        rows.push({
            label: arr(A) + ' ' + p.m[0][1].join(', '),
            tp: false,
            src: badge('src', G.one[0]),
            dst: badge('dst', G.one[1])
        });
    } else {
        G.hs.forEach((g, i) => rows.push({
            label: arr(p.m[i][0]) + ' ' + p.m[i][1].join(', '),
            tp: false,
            src: badge('src', g[0]),
            dst: badge('dst', g[1])
        }));
        G.tp.forEach((t) => rows.push({
            label: arr(t[0]),
            tp: true,
            src: badge('src', t[1]),
            dst: badge('dst', t[2])
        }));
    }

    const id = idh(p.c);
    return { rows, idhI: badge('idh', id[0]), idhR: badge('idh', id[1]) };
}

/*
 * Assemble the full view-model for one pattern card. Note the raw pattern (p)
 * and its analysis (an) are passed through so the card can hand them to the
 * diagram component, which renders the SVG as real markup. The 'blob' is a
 * lowercased, tag-stripped search index for the filter box.
 */
export function buildCard(p) {
    const an = analyse(p);
    const d = describe(p, an);
    const nk = NICK[p.c] || null;
    const wild = WILD[p.c] || null;
    const note = NOTES[p.c] || deferredNote(p);
    const tags = d.tags.map(tagInfo);
    const blob = (p.c + ' ' + descName(p) + ' ' + (nk || '') + ' ' + d.verdict + ' ' +
        d.tags.map((t) => t.text).join(' ') + ' ' + note)
        .toLowerCase().replace(/<[^>]+>/g, '');

    return {
        c: p.c, g: p.g, p, an,
        codeParts: codeParts(p.c),
        name: descName(p),
        nick: nk,
        tags,
        verdict: d.verdict,
        li: d.li,
        grade: gradeData(p),
        note, wild, blob
    };
}

/* The three sections rendered on the page, in order. */
export const SECT = [
    { g: 'oneway', t: 'One-way patterns', d: 'A single sender streams to a recipient — files, records, sealed messages.' },
    { g: 'fundamental', t: 'Fundamental interactive patterns', d: 'The 12 core handshakes. Initiator is N / K / X / I; responder is N / K / X.' },
    { g: 'deferred', t: 'Deferred patterns', d: 'A \u201c1\u201d pushes one side\u2019s authenticating DH to a later message.' }
];

/* Filter chips for the toolbar: [value, label]. */
export const FILTERS = [
    ['all', 'all'],
    ['oneway', 'one-way'],
    ['fundamental', 'fundamental'],
    ['deferred', 'deferred']
];

/* Worked pre-shared-key examples shown in the PSK section. */
export const PSKEX = [
    { c: 'NNpsk0', pre: [], m: [[A, ['psk', 'e']], [B, ['e', 'ee']]], cap: '<b>NNpsk0</b> — psk opens message 1' },
    { c: 'XXpsk3', pre: [], m: [[A, ['e']], [B, ['e', 'ee', 's', 'es']], [A, ['s', 'se', 'psk']]], cap: '<b>XXpsk3</b> — psk at the end of message 3' },
    { c: 'IKpsk2', pre: [[B, ['s']]], m: [[A, ['e', 'es', 's', 'ss']], [B, ['e', 'ee', 'se', 'psk']]], cap: '<b>IKpsk2</b> — WireGuard\u2019s pattern, psk ending message 2' }
];

/* The fully-built card view-models, ready to render. */
export const CARDS = P.map(buildCard);
