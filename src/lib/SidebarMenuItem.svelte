<script>
    import classNames from 'classnames';

    export let href = "#";
    export let current = undefined;
    export let label = "";

    // Gotcha: attributes will always be strings!
    let isCurrent = current !== undefined && current !== "false";
</script>

<li>
    <a
            href={href}
            class={classNames("group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold", {
              "bg-indigo-700 text-white": isCurrent,
              "text-indigo-200 hover:text-white hover:bg-indigo-700": !isCurrent,
            })}
    >
        <svg class="h-6 w-6 shrink-0 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
             stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
        </svg>
        {label}
    </a>
</li>