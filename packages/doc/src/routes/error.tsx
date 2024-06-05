import { Logo } from "~/components/logo";

export function ErrorFallback(props: Error) {
  return (
    <div class="fixed top-0 left-0 z-50 bg-gray-900 w-full h-svh flex flex-col items-center justify-center">
      <h1 class="text-3xl mb-4 text-white">Something went wrong</h1>
      <p class="text-base font-bold text-gray-500">{props?.message}</p>
      <Logo />
    </div>
  );
}
