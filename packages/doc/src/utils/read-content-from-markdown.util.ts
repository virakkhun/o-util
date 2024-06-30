import { readFile } from "fs/promises";
import { parseAsync } from "mdx-util/node";
import path from "path";

const rootDir = import.meta.env.PROD ? import.meta.env.CWD : process.cwd();

const CONTENT_ROOT_DIR = path.join(rootDir, "/src/contents");

export async function readContentFromMarkdown(filename: string) {
  try {
    const buf = await readFile(`${CONTENT_ROOT_DIR}/${filename}`);
    const str = buf.toString();
    const html = await parseAsync(str);
    return html;
  } catch (err) {
    console.error(err);
    throw new Error("can't read file");
  }
}
