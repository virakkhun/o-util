import { RouteSectionProps } from "@solidjs/router";
import Page from "./index";
import removeUselessProps from "~/contents/remove-useless-props";

export default function (props: RouteSectionProps<unknown>) {
  return Page({ ...props, data: { markdown: removeUselessProps } });
}
