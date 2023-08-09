import "./lib/Counter.svelte";
import "./lib/Wrapper.svelte";
import "./lib/SidebarLayout.svelte";
import "./lib/Sidebar.svelte";
import "./lib/SidebarMenu.svelte";
import "./lib/SidebarMenuItem.svelte";

const el = document.body.querySelector('my-counter');
el.addEventListener('custom', (e) => {
    console.log('custom event emitted by my-counter (direct listener)', e);
})

document.addEventListener('custom', (e) => {
    console.log('custom event emitted by my-counter (document listener, bubbled)', e);
})
