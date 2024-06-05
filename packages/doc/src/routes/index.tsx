import { A, cache, createAsync } from "@solidjs/router";
import { CodeSnippet } from "~/components/code-snippet";
import { readContentFromMarkdown } from "~/utils/read-content-from-markdown.util";
import { Title } from "@solidjs/meta";

const getSnippet = cache(async () => {
  "use server";
  return readContentFromMarkdown("example.md");
}, "snippet");

export const route = {
  load: getSnippet,
};

export default function Index() {
  const snippet = createAsync(() => getSnippet());

  return (
    <>
      <Title>o-util</Title>

      <header class="py-4">
        <h1 class="text-2xl font-bold text-pink-600">o-util</h1>
      </header>
      <section role="main">
        <p>o-util is minimal library for working with Object in javascript.</p>
        <p>provide very useful api to interact object, type safe...</p>
      </section>

      <section role="navigation" class="mt-10 flex items-center gap-2">
        <A
          href="/doc?content=getting-started"
          class="px-6 py-2 rounded-full border-2 border-cyan-300 bg-white text-gray-500 hover:transition-all hover:shadow-lime-100 hover:shadow-2xl hover:backdrop-blur-lg"
        >
          Get started
        </A>
        <div class="flex items-center gap-2">
          <a
            href="https://github.com/virakkhun/o-utils"
            class="text-green-400 hover:text-green-500"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://www.npmjs.com/package/o-util"
            class="text-green-400 hover:text-green-500"
            target="_blank"
          >
            npm
          </a>
        </div>
      </section>
      <CodeSnippet snippet={snippet()!} filename="example.ts" />
    </>
  );
}
