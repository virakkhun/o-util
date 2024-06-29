import { RouteSectionProps } from "@solidjs/router";
import Page from "./index";
import merge from "~/contents/merge";

export default function (props: RouteSectionProps<unknown>) {
  return Page({ ...props, data: { markdown: merge } });
}
