import { ComponentProps } from "solid-js";

export function MainLayout(props: ComponentProps<"div">) {
  return <div class="mx-auto container md:px-32 px-4">{props.children}</div>;
}
