<!--
    SectionHead.svelte — the heading row shown above each pattern group and
    above the PSK section: a title, a small count/label, and a right-aligned
    description. Shared so the count can be a number (pattern groups) or a word
    like "modifier" (the PSK section).
-->
<script>
    let { title, count, desc } = $props();
</script>

<style>
    .section-head {
        display: flex;
        align-items: baseline;
        gap: 14px;
        margin: 48px 0 4px;
    }

    .section-head h2 {
        margin: 0;

        font-family: var(--mono);
        font-weight: 600;
        font-size: 20px;
        letter-spacing: -0.01em;
        color: var(--ink);
    }

    .section-head .count {
        font-family: var(--mono);
        font-size: 13px;
        color: var(--ink-3);
    }

    .section-head p {
        margin: 0 0 0 auto;
        max-width: 42ch;

        font-size: 13.5px;
        color: var(--ink-3);
        text-align: right;
    }

    @media (max-width: 680px) {
        .section-head p {
            display: none;
        }
    }
</style>

<section class="section-head">
    <h2>{title}</h2>
    <span class="count">{count}</span>
    <p>{desc}</p>
</section>
