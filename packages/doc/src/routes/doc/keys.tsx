import { RouteSectionProps } from "@solidjs/router";
import Page from "./index";
import keys from "~/contents/keys";

export default function (props: RouteSectionProps<unknown>) {
  return Page({ ...props, data: { markdown: keys } });
}
