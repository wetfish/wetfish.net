<!--
    Tooltip.svelte — the single floating tooltip box for the Noise page.

    Rendered once near the root of the page. It subscribes to the shared
    tooltipState store (written by the `tooltip` action) and positions itself
    next to the cursor, flipping when it would overflow the viewport. The text
    is plain (never HTML), so it is rendered as text content, not {@html}.
-->
<script>
    import { tooltipState } from './tooltip.js';

    /* The box element, measured to decide whether to flip near screen edges. */
    let boxEl = $state(null);

    /* Computed position, recalculated whenever the state or box size changes. */
    let left = $state(0);
    let top = $state(0);

    $effect(() => {
        const state = $tooltipState;
        if (!state.visible || !boxEl) return;

        const rect = boxEl.getBoundingClientRect();
        const margin = 10;

        // Default: below-right of the cursor.
        let nextLeft = state.x + 14;
        let nextTop = state.y + 18;

        // Flip horizontally / vertically if we'd run off the viewport.
        if (nextLeft + rect.width > window.innerWidth - margin) {
            nextLeft = state.x - rect.width - 14;
        }
        if (nextTop + rect.height > window.innerHeight - margin) {
            nextTop = state.y - rect.height - 18;
        }

        left = Math.max(margin, nextLeft);
        top = Math.max(margin, nextTop);
    });
</script>

<style>
    .tooltip {
        position: fixed;
        z-index: 200;
        max-width: 300px;
        padding: 9px 12px;
        border-radius: 9px;

        background: #1b2030;
        color: #edeef3;
        font-family: var(--sans);
        font-size: 12.5px;
        line-height: 1.45;

        box-shadow: 0 8px 30px rgba(20, 24, 40, 0.28);
        pointer-events: none;

        /* Hidden by default; the .visible modifier fades it in. */
        opacity: 0;
        transform: translateY(3px);
        transition:
            opacity 0.1s ease,
            transform 0.1s ease;
    }

    .tooltip.visible {
        opacity: 1;
        transform: none;
    }

    /* The monospace key (e.g. "es") shown above the description. */
    .tooltip__key {
        display: block;
        margin-bottom: 3px;

        font-family: var(--mono);
        font-weight: 600;
        font-size: 11px;
        letter-spacing: 0.02em;
        color: #a7a0f0;
    }

    @media (prefers-reduced-motion: reduce) {
        .tooltip {
            transition: none;
        }
    }
</style>

<div
    class="tooltip"
    class:visible={$tooltipState.visible}
    role="tooltip"
    bind:this={boxEl}
    style="left: {left}px; top: {top}px;"
>
    {#if $tooltipState.key}
        <span class="tooltip__key">{$tooltipState.key}</span>
    {/if}
    {$tooltipState.text}
</div>
