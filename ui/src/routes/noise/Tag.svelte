<!--
    Tag.svelte — a small descriptive pill on a pattern card (e.g. "mutual auth",
    "3 messages", "0-RTT capable"). Carries an optional tooltip.

    The `tag` prop is { text, cls, tip } as produced by tagInfo() in patterns.js.
-->
<script>
    import { tooltip } from './tooltip.js';

    let { tag } = $props();

    const interactive = $derived(!!tag.tip);
</script>

<style>
    .tag {
        font-family: var(--mono);
        font-size: 11px;
        padding: 3px 8px;
        border-radius: 5px;

        background: var(--surface-2);
        border: 1px solid var(--line);
        color: var(--ink-2);

        white-space: nowrap;
    }

    .tag.interactive {
        cursor: help;
    }

    /* Authentication-strength variants. */
    .auth-mutual {
        background: var(--auth-tx);
        border-color: var(--auth-tx);
        color: #fff;
    }

    .auth-one {
        background: var(--auth-bg);
        border-color: var(--auth-bd);
        color: var(--auth-tx);
    }
</style>

<span class="tag {tag.cls}" class:interactive use:tooltip={{ key: tag.text, text: tag.tip }}>
    {tag.text}
</span>
