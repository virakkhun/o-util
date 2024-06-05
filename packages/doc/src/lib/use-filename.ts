import { RouteSectionProps } from "@solidjs/router";

export function useFilename(props: RouteSectionProps<unknown>) {
  return `${props.location.query.content}.md`;
}
