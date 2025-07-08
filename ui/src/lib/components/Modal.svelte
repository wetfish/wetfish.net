<script lang="ts">
    interface ComponentProps {
        open: Boolean,
        closeModal: () => void;
    }

	let { open, closeModal}: ComponentProps = $props();
    // import Blob from '$lib/components/Blob.svelte';
    // import modalCorner from '$lib/images/modal-corner.svg';
    // let dialog = $state();
    // import { createEventDispatcher } from 'svelte';
    // const dispatch = createEventDispatcher();
    // function closeModal() {
    //     console.log('close modal called');
    //     dispatch('modalClose', { message: 'Modal Closed' });
    // }
</script>
<style>
    .modal {
        position:fixed;
        top: 0%;
        left: 0%;
        padding-top: 25vh;
        width: 100%;
        z-index: 99;
        max-height: 75vh;
        overflow:auto;
    }
    @media screen and (min-width: 600px) {
        .modal {
            padding-top: 0;
            overflow: visible;
            top: 15%;
            left: 10%;
            width: 80%;
        }
    }
    .modal-content {
        position: relative;
        margin: 0 10% 0 20%;
        padding: 3rem 2rem 1rem;
        background: rgba(0,0,0,0.3);
        border-top: 4px solid rgba(14, 229, 163, 1);
        border-radius: 30px;
        border-top-right-radius: 0;
    }
    @media screen and (min-width: 600px) {
        .modal-content {
            margin: 0 10% 0 25%;
            padding: 5rem 4rem 4rem;
        }
    }
    @media screen and (min-width: 1024px) {
        .modal-content {
            padding: 5rem 0 4rem 10%; /* global 80% text width */
        }
    }
    .modal-corner {
        display: block;
        position: absolute;
        width: 50%;
        height: 100%;
        left: -25%;
        top: -5rem;
        background-image: url('$lib/images/modal-corner.svg');
        background-size: 100% auto;
        background-repeat: no-repeat;
        min-width: 160px;
        max-width: 360px;
    }
    @media screen and (min-width: 1024px) {
        .modal-corner {
            top: -7.5rem;
        }
    }
    .modal-corner-image {
        position: relative;
        padding: 20px 15px 0;
    }
    .modal-corner-image img {
        width: 80%;
        position: absolute;
        top: 0;
        display: block;
        right: 0;
        /*max-width: 100%;*/
    }
    .modal-backdrop {
        position: fixed;
        display: block;
        top: 0;
        left: 0;
        z-index: 98;
        width: 100vw;
        height: 100vh;
        background-color: rgba(44, 13, 93, 0.8);  /*Optional: Adjust background color and opacity*/
        backdrop-filter: blur(10px); /*Apply blur effect*/
        -webkit-backdrop-filter: blur(10px); /* For Webkit browsers */
    }
    .close-button {
        display: block;
        cursor: pointer;
        border: none;
        background: none;
        appearance: none;
        -webkit-appearance: none;
        position: absolute;
        top: -55px;
        right: -8px;
        font-size: 40px;
        color: rgba(14, 229, 163, 1);

    }
</style>
{#if open}
    <div class="modal">
        <div class="modal-content">
            <div class="modal-corner">
                <div class="modal-corner-image">
                    <slot name="image" />
                </div>
            </div>
            <h3></h3>
            <h2 style="color: white;"><slot name="heading"/></h2>
            <div><slot name="content"/></div>
            <!-- <button autofocus onclick={() => dialog.close()}>close modal</button> -->
            <button class="close-button" autofocus on:click={closeModal} aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </div>
<div class="modal-backdrop"></div>
{/if}