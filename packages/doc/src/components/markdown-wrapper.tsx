import { ComponentProps } from "solid-js";
import "~/assets/css/custom-markdown.css";

export function MarkdownWrapper(props: ComponentProps<"div">) {
  return (
    <>
      <div class="md-wrapper" {...props} />
    </>
  );
}
