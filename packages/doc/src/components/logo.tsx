import { A } from "@solidjs/router";

export function Logo() {
  return (
    <header class="py-4">
      <A href="/">
        <h1 class="text-2xl font-bold text-pink-600">o-util</h1>
      </A>
    </header>
  );
}
