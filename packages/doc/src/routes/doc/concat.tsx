import { RouteSectionProps } from "@solidjs/router";
import Page from "./index";
import concat from "~/contents/concat";

export default function (props: RouteSectionProps<unknown>) {
  return Page({ ...props, data: { markdown: concat } });
}
