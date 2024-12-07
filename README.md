# wasm-to-dts

This is a standalone port of [Deno](https://deno.land)'s `wasm_module_to_dts` compiled to wasm. The idea is to be able to load this in deno/the browser/etc and give it a WASM module and get a typescript .d.ts file out the other side. 

This was built as a part of [Side Project Saturdays](https://just-be.dev/e/side-project-saturdays)

## Building

This project uses [`mise`](https://mise.jdx.dev/installing-mise.html) to manage dependencies and for building. 

To setup the project:

```
mise install
```

To build, run:

```
mise run build
```