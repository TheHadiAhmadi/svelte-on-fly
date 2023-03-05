import { rollup } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import { compile } from "svelte/compiler";

// compile svelte files
export async function GET({ params, fetch, url }) {
  const module = params.module.toLowerCase();

  const isSSR = url.searchParams.has("ssr");

  const output = await rollup({
    input: `${module}.svelte`,
    plugins: [
      {
        name: "resolve_svelte",
        resolveId: (name) => {
          if (!name.endsWith(".svelte")) return null;
          if (name.startsWith("./")) name = name.slice(2);
          return name;
        },
        async load(id) {
          if (!id.endsWith(".svelte")) return null;
          const result = await fetch(id).then((res) => res.text());
          return result;
        },
        async transform(file, id) {
          if (!id.endsWith(".svelte")) return;

          const compiled = compile(file, {
            generate: isSSR ? "ssr" : "dom",
            hydratable: true,
          });

          const result = compiled.js;
          return result;
        },
      },
      resolve(),
    ],
  });
  const output2 = await output.generate({ name: "test", format: "esm" });
  const code = output2.output[0].code;

  return new Response(code, {
    headers: {
      "Content-Type": "text/javascript",
    },
  });
}
