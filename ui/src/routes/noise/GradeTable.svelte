<!--
    GradeTable.svelte — the per-pattern security grades table plus the two
    identity-hiding badges. Reads the `grade` model from gradeData() in
    patterns.js ({ rows, idhI, idhR }).
-->
<script>
    import GradeBadge from './GradeBadge.svelte';

    let { grade } = $props();
</script>

<style>
    .props {
        border: 1px solid var(--line-2);
        border-radius: 10px;
        background: var(--surface-2);
        overflow: hidden;
    }

    .props-head {
        padding: 10px 13px 5px;

        font-family: var(--mono);
        font-size: 10.5px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: var(--ink-3);
    }

    .props-body {
        padding: 2px 13px 12px;
    }

    table.grades {
        width: 100%;
        border-collapse: collapse;
        font-size: 12px;
    }

    table.grades th {
        text-align: left;
        padding: 4px 6px;
        border-bottom: 1px solid var(--line);

        font-family: var(--mono);
        font-weight: 500;
        font-size: 10.5px;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--ink-3);
    }

    /* The two grade columns are centered and narrow. */
    table.grades th:last-child,
    table.grades th:nth-child(2) {
        text-align: center;
        width: 42px;
    }

    table.grades td {
        padding: 5px 6px;
        border-bottom: 1px solid var(--line-2);

        font-family: var(--mono);
        font-size: 11.5px;
        color: var(--ink-2);
    }

    table.grades td:last-child,
    table.grades td:nth-child(2) {
        text-align: center;
    }

    /* Transport (post-handshake) rows are dimmed and italicised. */
    table.grades tr.tp td {
        color: var(--ink-3);
    }

    table.grades tr.tp .tpl {
        font-style: italic;
    }

    table.grades tr:last-child td {
        border-bottom: 0;
    }

    .idh {
        margin-top: 10px;
        display: flex;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;

        font-size: 12.5px;
        color: var(--ink-2);
    }
</style>

<div class="props">
    <div class="props-head">Security grades</div>
    <div class="props-body">
        <table class="grades">
            <thead>
                <tr>
                    <th>payload</th>
                    <th>src</th>
                    <th>dst</th>
                </tr>
            </thead>
            <tbody>
                {#each grade.rows as row}
                    <tr class:tp={row.tp}>
                        <td>
                            {row.label}{#if row.tp} <span class="tpl">transport</span>{/if}
                        </td>
                        <td><GradeBadge badge={row.src} /></td>
                        <td><GradeBadge badge={row.dst} /></td>
                    </tr>
                {/each}
            </tbody>
        </table>

        <div class="idh">
            Identity hiding — initiator
            <GradeBadge badge={grade.idhI} />
            · responder
            <GradeBadge badge={grade.idhR} />
        </div>
    </div>
</div>
