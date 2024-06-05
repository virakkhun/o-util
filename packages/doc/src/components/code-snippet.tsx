export function CodeSnippet(props: { snippet: string; filename: string }) {
  return (
    <div class="rounded-md mt-10 drop-shadow-lg">
      <p
        class="ml-1.5 rounded-t-md px-4 py-1 w-fit border-t border-l border-r border-green-400 relative"
        style={{ background: "hsl(220, 13%, 18%)" }}
      >
        {props.filename}

        <span
          class="w-full h-4 absolute -bottom-2 left-0"
          style={{ background: "hsl(220, 13%, 18%)" }}
        ></span>
      </p>
      <div
        class="border border-green-400 rounded-md"
        innerHTML={props.snippet}
      />
    </div>
  );
}
