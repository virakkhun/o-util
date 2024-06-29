import { RouteSectionProps } from "@solidjs/router";

export function useFilename(props: RouteSectionProps<unknown>, ext: string) {
  return `${props.location.query.content}.${ext}`;
}
