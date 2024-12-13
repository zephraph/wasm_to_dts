#!/usr/bin/env -S deno run --allow-net --allow-write

const WASM_RS_URL =
  "https://raw.githubusercontent.com/denoland/deno_graph/main/src/source/wasm.rs";
const OUTPUT_PATH = "src/wasm.rs";

async function main() {
  try {
    // Download the file
    const response = await fetch(WASM_RS_URL);
    if (!response.ok) {
      throw new Error(`Failed to download file: ${response.statusText}`);
    }

    const content = await response.text();

    // Add header comment
    const finalContent = [
      "// [DO NOT EDIT] This file is downloaded from deno_graph",
      "// https://raw.githubusercontent.com/denoland/deno_graph/main/src/source/wasm.rs",
      "",
      content,
    ].join("\n");

    // Write the content to src/wasm.rs
    await Deno.writeTextFile(OUTPUT_PATH, finalContent);
    console.log(`Successfully updated ${OUTPUT_PATH}`);
  } catch (error) {
    console.error("Error:", error);
    Deno.exit(1);
  }
}

if (import.meta.main) {
  await main();
}
