<!--
    PatternCard.svelte — one handshake pattern: code, name, tags, diagram,
    prose summary, security grades, and a "when to use it" note.

    The `card` prop is a view-model from buildCard() in patterns.js. The note
    and summary list items contain trusted, author-written inline markup
    (<b>/<code>) and are rendered with {@html}; the diagram is real SVG markup
    (no {@html}). See the project notes on why these two cases differ.
-->
<script>
    import HandshakeDiagram from './HandshakeDiagram.svelte';
    import GradeTable from './GradeTable.svelte';
    import Tag from './Tag.svelte';

    let { card } = $props();
</script>

<style>
    .card {
        background: var(--surface);
        border: 1px solid var(--line);
        border-radius: 14px;
        padding: 20px 22px;

        display: flex;
        flex-direction: column;
        gap: 14px;

        animation: nref-fade 0.4s ease both;
    }

    .card-top {
        display: flex;
        align-items: flex-start;
        gap: 14px;
    }

    .code {
        padding-top: 2px;

        font-family: var(--mono);
        font-weight: 600;
        font-size: 24px;
        letter-spacing: -0.01em;
        line-height: 1;
    }

    /* The deferred "1" digit is accented within the code. */
    .code .one {
        color: var(--accent);
    }

    .titles {
        flex: 1;
        min-width: 0;
    }

    .dname {
        font-size: 15px;
        font-weight: 500;
        color: var(--ink);
        line-height: 1.3;
    }

    .nick {
        margin-top: 2px;
        font-size: 13px;
        color: var(--ink-3);
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        margin-top: 6px;
    }

    .diagram {
        background: var(--surface-2);
        border: 1px solid var(--line-2);
        border-radius: 10px;
        padding: 6px 8px;
    }

    .summary {
        font-size: 13.5px;
        color: var(--ink-2);
        line-height: 1.55;
    }

    .summary .verdict {
        margin-bottom: 7px;
        font-weight: 500;
        color: var(--ink);
    }

    .summary ul {
        margin: 0;
        padding-left: 18px;
        display: flex;
        flex-direction: column;
        gap: 3px;
    }

    .summary li {
        padding-left: 2px;
    }

    /* Injected (un-scoped) markup inside the prose needs :global selectors. */
    .summary :global(b) {
        color: var(--ink);
        font-weight: 500;
    }

    .note {
        font-size: 13.5px;
        color: var(--ink-2);
        line-height: 1.55;
        border-left: 2px solid var(--accent-soft);
        padding-left: 13px;
    }

    .note .lead {
        display: block;
        margin-bottom: 4px;

        font-family: var(--mono);
        font-size: 10.5px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--ink-3);
    }

    .note-body :global(b) {
        color: var(--ink);
        font-weight: 500;
    }

    .note-body :global(code) {
        font-family: var(--mono);
        font-size: 12.5px;
        color: var(--accent);
    }

    .wild {
        margin-top: 9px;
        padding: 8px 11px;

        font-size: 12.5px;
        color: var(--ink-2);
        background: var(--accent-soft);
        border: 1px solid #d8d5f5;
        border-radius: 8px;
    }

    .wild b {
        color: var(--accent);
        font-weight: 600;
    }

    @keyframes nref-fade {
        from {
            opacity: 0;
            transform: translateY(6px);
        }
        to {
            opacity: 1;
            transform: none;
        }
    }
</style>

<div class="card">
    <div class="card-top">
        <div class="code">
            {#each card.codeParts as part}
                {#if part.one}<span class="one">{part.ch}</span>{:else}{part.ch}{/if}
            {/each}
        </div>
        <div class="titles">
            <div class="dname">{card.name}</div>
            {#if card.nick}
                <div class="nick">{card.nick}</div>
            {/if}
            <div class="tags">
                {#each card.tags as tag}
                    <Tag {tag} />
                {/each}
            </div>
        </div>
    </div>

    <div class="diagram">
        <HandshakeDiagram pattern={card.p} analysis={card.an} uid={card.c} />
    </div>

    <div class="summary">
        <div class="verdict">{card.verdict}</div>
        <ul>
            {#each card.li as item}
                <li>{@html item}</li>
            {/each}
        </ul>
    </div>

    {#if card.grade}
        <GradeTable grade={card.grade} />
    {/if}

    <div class="note">
        <span class="lead">when to use it</span>
        <span class="note-body">{@html card.note}</span>
        {#if card.wild}
            <div class="wild"><b>In the wild:</b> {@html card.wild}</div>
        {/if}
    </div>
</div>
