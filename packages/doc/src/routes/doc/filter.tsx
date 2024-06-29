import { RouteSectionProps } from "@solidjs/router";
import Page from "./index";
import filter from "~/contents/filter";

export default function (props: RouteSectionProps<unknown>) {
  return Page({ ...props, data: { markdown: filter } });
}
