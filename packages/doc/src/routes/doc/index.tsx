import { RouteSectionProps, cache, createAsync } from "@solidjs/router";
import { useFilename } from "~/lib/use-filename";
import { readContentFromMarkdown } from "~/utils/read-content-from-markdown.util";
import { Title } from "@solidjs/meta";
import { MarkdownWrapper } from "~/components/markdown-wrapper";
import { useTitle } from "~/lib/use-title";

const getContent = cache(async (filename: string) => {
  "use server";
  return readContentFromMarkdown(filename);
}, `doc`);

export const routes = {
  load: getContent,
};

export default function (props: RouteSectionProps<unknown>) {
  const filename = useFilename(props);
  const content = createAsync(() => getContent(filename));
  const title = useTitle(filename);

  return (
    <>
      <Title>{title}</Title>
      <MarkdownWrapper innerHTML={content()} />
    </>
  );
}
