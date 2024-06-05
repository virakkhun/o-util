import { Logo } from "~/components/logo";

export default function NotFound() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4 h-svh flex justify-center items-center flex-col">
      <h1 class="max-6-xs text-6xl font-thin uppercase text-green-600">
        Not Found
      </h1>
      <p class="mt-8">
        powered by{" "}
        <a
          href="https://solidjs.com"
          target="_blank"
          class="text-green-600 hover:underline"
        >
          solidjs.com
        </a>{" "}
      </p>
      <Logo />
    </main>
  );
}
