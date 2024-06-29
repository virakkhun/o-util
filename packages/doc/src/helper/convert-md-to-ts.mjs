import { readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

try {
  const rootDir = process.cwd();
  const dir = "/src/contents";
  const fullPath = path.join(rootDir, dir);
  const files = await readdir(fullPath);

  for (const file of files) {
    const buffer = await readFile(`${fullPath}/${file}`);
    const content = buffer.toString();
    const replacedContent = content.replaceAll(/\`/g, "]");
    const newFileName = file.replace(".md", ".ts");
    const template = "export default `\n$t`";
    const newContent = template.replace("$t", replacedContent);
    await writeFile(`${fullPath}/${newFileName}`, newContent);
    if (file.includes(".md")) await rm(`${fullPath}/${file}`);
  }
} catch (err) {
  console.error(err);
}
