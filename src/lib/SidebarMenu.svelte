<svelte:options customElement="ui-sidebar-menu" />

<!-- We include the global stylesheet, cause shadow DOM... -->
<link rel="stylesheet" href="/static/tailwind/output.css" />

<ul role="list" class="-mx-2 space-y-1">
    <slot></slot>
</ul>