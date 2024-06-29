import { A, useLocation } from "@solidjs/router";
import { For } from "solid-js";

const routes = [
  { name: "concat", link: "/doc/concat?content=concat" },
  { name: "filter", link: "/doc/filter?content=filter" },
  { name: "find", link: "/doc/find?content=find" },
  { name: "keys", link: "/doc/keys?content=keys" },
  { name: "merge", link: "/doc/merge?content=merge" },
  {
    name: "remove-useless-props",
    link: "/doc/remove-useless-props?content=remove-useless-props",
  },
];

export function Nav() {
  const location = useLocation();
  const isActive = (link: string) =>
    location.pathname === link.replace(/(\?.*)/g, "");

  return (
    <For each={routes}>
      {({ name, link }) => (
        <A
          href={link}
          class={`hover:bg-white hover:text-gray-900 w-full text-center py-1 ${isActive(link) && "bg-white text-gray-900"}`}
        >
          {name}
        </A>
      )}
    </For>
  );
}
