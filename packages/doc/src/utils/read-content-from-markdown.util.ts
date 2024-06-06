import { readFile } from "fs/promises";
import { parseAsync } from "mdx-util";
import path from "path";

const isProd = import.meta.env.NODE_ENV === "production";

const CONTENT_ROOT_DIR = path.join(
  process.cwd(),
  `${isProd ? "/contents" : "/public/contents"}`,
);

export async function readContentFromMarkdown(filename: string) {
  try {
    const buf = await readFile(`${CONTENT_ROOT_DIR}/${filename}`);
    const str = buf.toString();
    const html = await parseAsync(str);
    return html;
  } catch (_) {
    throw new Error("can't read file");
  }
}
