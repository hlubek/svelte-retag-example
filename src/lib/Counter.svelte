<svelte:options customElement="my-counter" />

<!-- We include the global stylesheet, cause shadow DOM... -->
<link rel="stylesheet" href="/static/tailwind/output.css" />

<script lang="ts">
    import {createEventDispatcher, onMount} from 'svelte';

    /** @type {HTMLElement} */
    let element;

    onMount(() => {
        // console.debug("Enabling htmx, the hard way!", element)
        // htmx.process(element);
    });

    const dispatch = createEventDispatcher();

    let count: number = 0
    const increment = () => {
        count += 1

        dispatch('incremented', "I was incremented!");
    }
</script>

<div bind:this={element} hx-boost={true}>
<button on:click={increment} class="bg-amber-300 hover:bg-amber-200 transition-colors px-4 py-1.5 rounded-md">
    count is {count}
</button>
<a href="/projects">Go to projects (&lt;a&gt; inside a Svelte WC)</a>
<button on:click={() => dispatch("custom", "foo")}>bubble click</button>
</div>