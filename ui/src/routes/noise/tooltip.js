/*
 * tooltip.js — a small Svelte action and shared store that together replace
 * the original page's global document-level mouseover handler.
 *
 * Usage:
 *   import { tooltip } from './tooltip.js';
 *   <span use:tooltip={{ key: 'es', text: 'Authenticates the responder.' }}>…</span>
 *
 * The action publishes hover state to `tooltipState`; a single <Tooltip />
 * component (rendered once per page) subscribes and draws the floating box.
 * Because actions attach to any element, this works for SVG <g> nodes too.
 */
import { writable } from 'svelte/store';

/* Shared, page-wide tooltip state. Only one tooltip is visible at a time. */
export const tooltipState = writable({
    visible: false,
    key: '',
    text: '',
    x: 0,
    y: 0
});

/*
 * The action. `params` is { key, text }; an empty/absent text means "no
 * tooltip" and the element simply does nothing on hover.
 */
export function tooltip(node, params) {
    let current = params;

    function show(event) {
        if (!current || !current.text) return;
        tooltipState.set({
            visible: true,
            key: current.key || '',
            text: current.text,
            x: event.clientX,
            y: event.clientY
        });
    }

    function move(event) {
        tooltipState.update((state) =>
            state.visible ? { ...state, x: event.clientX, y: event.clientY } : state
        );
    }

    function hide() {
        tooltipState.update((state) => ({ ...state, visible: false }));
    }

    node.addEventListener('mouseenter', show);
    node.addEventListener('mousemove', move);
    node.addEventListener('mouseleave', hide);

    return {
        // Keep the displayed text in sync if the bound params change.
        update(next) {
            current = next;
        },
        destroy() {
            node.removeEventListener('mouseenter', show);
            node.removeEventListener('mousemove', move);
            node.removeEventListener('mouseleave', hide);
        }
    };
}
