import { RouteSectionProps } from "@solidjs/router";
import Page from "./index";
import find from "~/contents/find";

export default function (props: RouteSectionProps<unknown>) {
  return Page({ ...props, data: { markdown: find } });
}
