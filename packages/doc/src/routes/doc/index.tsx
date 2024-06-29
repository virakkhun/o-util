import { createAsync, RouteSectionProps } from "@solidjs/router";
import { useFilename } from "~/lib/use-filename";
import { Title } from "@solidjs/meta";
import { MarkdownWrapper } from "~/components/markdown-wrapper";
import { useTitle } from "~/lib/use-title";
import { useStringToMd } from "~/utils/str-to-markdown";
import gettingStarted from "~/contents/getting-started";

const getContent = (markdown: string) => {
  "use server";
  return useStringToMd(markdown);
};

export default function (props: RouteSectionProps<{ markdown: string }>) {
  const filename = useFilename(props, "ts");
  const title = useTitle(filename);
  const content = createAsync(() =>
    getContent(props?.data?.markdown || gettingStarted),
  );

  return (
    <>
      <Title>{title}</Title>
      <MarkdownWrapper innerHTML={content()!} />
    </>
  );
}
