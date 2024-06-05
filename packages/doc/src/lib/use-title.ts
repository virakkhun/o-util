export function useTitle(str: string) {
  const title = str.replace(/\-|_/g, " ").replace(".md", "");
  const suffix = "o-util";
  return `${title} | ${suffix}`;
}
