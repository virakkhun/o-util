import { ComponentProps } from "solid-js";
import { Logo } from "~/components/logo";
import { Nav } from "~/components/nav";

export function DocLayout(props: ComponentProps<"div">) {
  return (
    <div class="grid grid-cols-12 h-svh">
      <nav class="col-span-2 border-r border-gray-700 h-full">
        <div class="flex items-center justify-center border-b border-gray-700">
          <Logo />
        </div>

        <div class="flex flex-col items-center gap-3 mt-10">
          <Nav />
        </div>
      </nav>
      <main class="col-span-10 p-8 overflow-y-auto">{props.children}</main>
    </div>
  );
}
