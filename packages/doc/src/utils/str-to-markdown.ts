import { parseAsync } from "mdx-util";

export function useStringToMd(str: string) {
  return parseAsync(
    str
      .replaceAll(/\]/g, "`")
      .replaceAll(/((\[.*\`))/g, (str) => str.replace("`", "]")),
  );
}
