<!--
    GradeBadge.svelte — a single colored grade chip (e.g. a "2" or an en-dash).

    Used both for interactive grade values in the cards (which carry a tooltip)
    and for the static legend swatches in the grades guide (no tooltip). The
    `badge` prop is the object produced by badge() in patterns.js, or any
    { v, cls, tip, label } shape; tip/label may be empty for legend use.
-->
<script>
    import { tooltip } from './tooltip.js';

    let { badge } = $props();

    /* Only behaves as a hoverable tooltip target when it has descriptive text. */
    const interactive = $derived(!!badge.tip);
</script>

<style>
    .gb {
        display: inline-flex;
        min-width: 18px;
        height: 18px;
        align-items: center;
        justify-content: center;

        padding: 0 5px;
        border-radius: 5px;

        font-family: var(--mono);
        font-size: 11px;
        font-weight: 600;

        vertical-align: middle;
        white-space: nowrap;
        flex-shrink: 0;
    }

    .gb.interactive {
        cursor: help;
    }

    /* Severity palette, theme-driven. */
    .g-ok {
        background: var(--fs-bg);
        color: var(--fs-tx);
    }

    .g-mid {
        background: var(--ss-bg);
        color: var(--ss-tx);
    }

    .g-bad {
        background: var(--send-bg);
        color: var(--send-tx);
    }

    .g-na {
        background: var(--pre-bg);
        color: var(--ink-3);
    }
</style>

<span class="gb {badge.cls}" class:interactive use:tooltip={{ key: badge.label, text: badge.tip }}>
    {badge.v}
</span>
