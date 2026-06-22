<!--
    HandshakeDiagram.svelte — renders a Noise pattern as a sequence diagram.

    This replaces the original page's string-concatenation SVG generator (which
    was injected with {@html}). The geometry is computed here as plain data and
    drawn with real SVG elements via {#each}, so:
      - there is no {@html},
      - pill fills come from CSS classes (reliable) rather than var() set as
        SVG presentation attributes (which is not portable across browsers),
      - tooltips attach with the `use:tooltip` action, including on <g> nodes.

    Props:
      pattern  — a pattern object from patterns.js ({ c, g, pre, m })
      analysis — the result of analyse(pattern)
      uid      — a unique string (the pattern code) used to scope the SVG
                 arrowhead marker id so multiple diagrams don't collide
-->
<script>
    import { A, pillTip } from './patterns.js';
    import { tooltip } from './tooltip.js';

    let { pattern, analysis, uid } = $props();

    /* ---- fixed geometry (matches the original reference proportions) ---- */
    const W = 520;        // viewBox width
    const IX = 92;        // initiator lifeline x
    const RX = 428;       // responder lifeline x
    const MID = (IX + RX) / 2;
    const TOP = 8;        // top padding
    const HEAD_H = 26;    // header box height
    const BASE = TOP + HEAD_H;
    const PRE_H = 26;     // vertical step between pre-shared rows
    const ROW_H = 50;     // vertical step between messages

    /* Width of a token pill, sized to its label. */
    function pillWidth(tok) {
        return Math.max(28, tok.length * 9 + 15);
    }

    /* Map a pill's semantic type to its CSS class (drives fill/stroke). */
    function pillClass(type) {
        switch (type) {
            case 'fs': return 'pill--fs';
            case 'auth': return 'pill--auth';
            case 'ss': return 'pill--ss';
            case 'psk': return 'pill--psk';
            default: return 'pill--send';
        }
    }

    /* Lay out one centered row of token pills at vertical position cy. */
    function layoutPills(pills, cy) {
        let total = 0;
        pills.forEach((p) => (total += pillWidth(p.tok)));
        total += (pills.length - 1) * 6;

        let x = MID - total / 2;
        return pills.map((p) => {
            const w = pillWidth(p.tok);
            const [tipKey, tipText] = pillTip(p);
            const out = {
                x,
                y: cy - 11,
                w,
                textX: x + w / 2,
                textY: cy + 4,
                tok: p.tok,
                cls: pillClass(p.type),
                cleartext: !!(p.stat && !p.enc),
                tipKey,
                tipText
            };
            x += w + 6;
            return out;
        });
    }

    /*
     * Build the complete diagram layout from the pattern + analysis. Returns
     * everything the template needs to draw, plus the final height.
     */
    const layout = $derived.by(() => {
        const markerId = 'noise-arrow-' + uid.replace(/[^A-Za-z0-9]/g, '');
        const msgs = analysis.msgs;

        const preRows = [];
        let preCaption = null;
        let preDivider = null;
        let msgStartY;

        if (pattern.pre.length) {
            const n = pattern.pre.length;
            const preStartY = BASE + 8;
            const lastBottom = preStartY + 8 + (n - 1) * PRE_H + 10;
            const captionBaseline = lastBottom + 15;
            const dividerY = captionBaseline + 7;
            msgStartY = dividerY + 18;

            pattern.pre.forEach((pr, i) => {
                const cy = preStartY + 8 + i * PRE_H;
                const dir = pr[0];
                const fromX = dir === A ? IX : RX;
                const toX = dir === A ? RX : IX;
                const owner = dir === A ? 'initiator' : 'responder';
                const knower = dir === A ? 'responder' : 'initiator';
                const tipText =
                    'The ' + owner + '\u2019s static key, known to the ' + knower +
                    ' in advance (shared out of band, never transmitted live).';

                const tokens = pr[1].map((tok, j) => {
                    const px = (dir === A ? IX + 22 : RX - 44) + j * 26;
                    return { x: px, y: cy - 10, textX: px + 11, textY: cy + 4, tok, tipKey: tok + ' (pre-shared)', tipText };
                });

                preRows.push({
                    line: {
                        x1: fromX + (dir === A ? 10 : -10),
                        y1: cy,
                        x2: toX + (dir === A ? -12 : 12),
                        y2: cy
                    },
                    markerId,
                    tokens
                });
            });

            preCaption = { x: W - 36, y: captionBaseline };
            preDivider = { x1: 36, y1: dividerY, x2: W - 36, y2: dividerY };
        } else {
            msgStartY = BASE + 18;
        }

        const height = msgStartY + msgs.length * ROW_H + 10;
        const lifelineTop = BASE + 6;
        const lifelineBottom = height - 8;

        let y = msgStartY;
        const messages = msgs.map((m, i) => {
            const arrowY = y + 30;
            const pillsY = y + 8;
            const dir = m.dir;
            const fromX = dir === A ? IX : RX;
            const toX = dir === A ? RX : IX;

            const row = {
                index: i + 1,
                pills: layoutPills(m.pills, pillsY),
                arrow: {
                    x1: fromX + (dir === A ? 8 : -8),
                    y1: arrowY,
                    x2: toX + (dir === A ? -10 : 10),
                    y2: arrowY,
                    markerId
                },
                number: { x: 10, y: arrowY + 4, text: i + 1 }
            };
            y += ROW_H;
            return row;
        });

        return {
            markerId,
            width: W,
            height,
            lifelines: [
                { x: IX, y1: lifelineTop, y2: lifelineBottom },
                { x: RX, y1: lifelineTop, y2: lifelineBottom }
            ],
            headers: [
                { cx: IX, label: 'initiator' },
                { cx: RX, label: 'responder' }
            ],
            preRows,
            preCaption,
            preDivider,
            messages
        };
    });
</script>

<style>
    svg {
        display: block;
        width: 100%;
        height: auto;
    }

    /* Lifelines and the pre-shared divider: thin dashed verticals/horizontals. */
    .lifeline {
        stroke: #d6d9e2;
        stroke-width: 1;
        stroke-dasharray: 3 4;
    }

    .pre-divider {
        stroke: #dfe1ea;
        stroke-width: 1;
        stroke-dasharray: 2 4;
    }

    .pre-line {
        stroke: #c7cad6;
        stroke-width: 1;
        stroke-dasharray: 2 3;
    }

    .msg-arrow {
        stroke: #aab0c0;
        stroke-width: 1.3;
    }

    .arrow-head {
        fill: none;
        stroke: #9aa0b0;
        stroke-width: 1.4;
        stroke-linecap: round;
        stroke-linejoin: round;
    }

    /* Party header boxes ("initiator" / "responder"). */
    .header-box {
        fill: #fff;
        stroke: #dfe1ea;
    }

    .header-label {
        font-family: var(--mono);
        font-size: 12.5px;
        font-weight: 500;
        fill: #3a4055;
    }

    .msg-number {
        font-family: var(--mono);
        font-size: 11px;
        fill: #b3b8c6;
    }

    .pre-caption {
        font-family: var(--mono);
        font-size: 10.5px;
        fill: #a7adbd;
    }

    /* Token pills. The fill/stroke palette is theme-driven via CSS variables
       inherited from the .noise-ref root; class selectors keep var() out of
       SVG presentation attributes. */
    .pill {
        cursor: help;
    }

    .pill__label {
        font-family: var(--mono);
        font-size: 12.5px;
        font-weight: 500;
        text-anchor: middle;
    }

    .pill--send .pill__box {
        fill: var(--send-bg);
        stroke: var(--send-bd);
    }
    .pill--send .pill__label {
        fill: var(--send-tx);
    }

    .pill--fs .pill__box {
        fill: var(--fs-bg);
        stroke: var(--fs-bd);
    }
    .pill--fs .pill__label {
        fill: var(--fs-tx);
    }

    .pill--auth .pill__box {
        fill: var(--auth-bg);
        stroke: var(--auth-bd);
    }
    .pill--auth .pill__label {
        fill: var(--auth-tx);
    }

    .pill--ss .pill__box {
        fill: var(--ss-bg);
        stroke: var(--ss-bd);
    }
    .pill--ss .pill__label {
        fill: var(--ss-tx);
    }

    .pill--psk .pill__box {
        fill: var(--accent-soft);
        stroke: #b9b4ee;
    }
    .pill--psk .pill__label {
        fill: var(--accent);
    }

    /* A static key sent before any DH exists goes out in the clear: dashed. */
    .pill__box.cleartext {
        stroke-dasharray: 3 3;
    }

    /* Pre-shared key boxes (above the dotted "known in advance" divider). */
    .pre-key {
        cursor: help;
    }
    .pre-key__box {
        fill: var(--pre-bg);
        stroke: var(--pre-bd);
    }
    .pre-key__label {
        font-family: var(--mono);
        font-size: 11.5px;
        fill: var(--pre-tx);
        text-anchor: middle;
    }
</style>

<svg
    viewBox="0 0 {layout.width} {layout.height}"
    role="img"
    aria-label="Sequence diagram for the {pattern.c} pattern"
    xmlns="http://www.w3.org/2000/svg"
>
    <!-- Arrowhead marker, scoped to this diagram by a unique id. -->
    <defs>
        <marker
            id={layout.markerId}
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6.5"
            markerHeight="6.5"
            orient="auto-start-reverse"
        >
            <path class="arrow-head" d="M2 1L8 5L2 9" />
        </marker>
    </defs>

    <!-- Lifelines -->
    {#each layout.lifelines as line}
        <line class="lifeline" x1={line.x} y1={line.y1} x2={line.x} y2={line.y2} />
    {/each}

    <!-- Party headers -->
    {#each layout.headers as header}
        <rect class="header-box" x={header.cx - 58} y={TOP} width="116" height={HEAD_H} rx="7" />
        <text class="header-label" x={header.cx} y={TOP + HEAD_H / 2 + 4} text-anchor="middle">
            {header.label}
        </text>
    {/each}

    <!-- Pre-shared keys (optional) -->
    {#each layout.preRows as pre}
        <line
            class="pre-line"
            x1={pre.line.x1}
            y1={pre.line.y1}
            x2={pre.line.x2}
            y2={pre.line.y2}
            marker-end="url(#{pre.markerId})"
        />
        {#each pre.tokens as t}
            <g class="pre-key" use:tooltip={{ key: t.tipKey, text: t.tipText }}>
                <rect class="pre-key__box" x={t.x} y={t.y} width="22" height="20" rx="5" />
                <text class="pre-key__label" x={t.textX} y={t.textY}>{t.tok}</text>
            </g>
        {/each}
    {/each}

    {#if layout.preCaption}
        <text class="pre-caption" x={layout.preCaption.x} y={layout.preCaption.y} text-anchor="end">
            known in advance
        </text>
    {/if}
    {#if layout.preDivider}
        <line
            class="pre-divider"
            x1={layout.preDivider.x1}
            y1={layout.preDivider.y1}
            x2={layout.preDivider.x2}
            y2={layout.preDivider.y2}
        />
    {/if}

    <!-- Handshake messages -->
    {#each layout.messages as msg}
        {#each msg.pills as pill}
            <g class="pill {pill.cls}" use:tooltip={{ key: pill.tipKey, text: pill.tipText }}>
                <rect
                    class="pill__box"
                    class:cleartext={pill.cleartext}
                    x={pill.x}
                    y={pill.y}
                    width={pill.w}
                    height="22"
                    rx="6"
                />
                <text class="pill__label" x={pill.textX} y={pill.textY}>{pill.tok}</text>
            </g>
        {/each}

        <line
            class="msg-arrow"
            x1={msg.arrow.x1}
            y1={msg.arrow.y1}
            x2={msg.arrow.x2}
            y2={msg.arrow.y2}
            marker-end="url(#{msg.arrow.markerId})"
        />
        <text class="msg-number" x={msg.number.x} y={msg.number.y}>{msg.number.text}</text>
    {/each}
</svg>
