import svelteRetag from 'svelte-retag';

import Counter from "./lib/Counter.svelte";

svelteRetag({
    component: Counter,
    tagname: 'my-counter',

    shadow: false,
});

import SidebarLayout from "./lib/SidebarLayout.svelte";

svelteRetag({
    component: SidebarLayout,
    tagname: 'ui-sidebar-layout',

    shadow: false,
});

import Sidebar from "./lib/Sidebar.svelte";

svelteRetag({
    component: Sidebar,
    tagname: 'ui-sidebar',

    shadow: false,
});

import SidebarMenu from "./lib/SidebarMenu.svelte";

svelteRetag({
    component: SidebarMenu,
    tagname: 'ui-sidebar-menu',

    shadow: false,
});

import SidebarMenuItem from "./lib/SidebarMenuItem.svelte";

svelteRetag({
    component: SidebarMenuItem,
    tagname: 'ui-sidebar-menu-item',

    attributes: ['href', 'label', 'current'],
    shadow: false,
});
