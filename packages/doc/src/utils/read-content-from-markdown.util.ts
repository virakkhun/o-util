import { spawn } from "child_process";
import { readFile } from "fs/promises";
import { parseAsync } from "mdx-util";
import path from "path";

const rootDir = import.meta.env.PROD ? import.meta.env.CWD : process.cwd();

const CONTENT_ROOT_DIR = path.join(rootDir, "/src/contents");

export async function readContentFromMarkdown(filename: string) {
  const ls = spawn("ls", ["-ls"]);
  ls.stdout.on("data", (data) => {
    console.info(`stdout: ${data}`);
  });

  ls.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  ls.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
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
