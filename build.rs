use std::fs;
use std::path::Path;

fn main() {
    // Download the file
    let content = reqwest::blocking::get(
        "https://raw.githubusercontent.com/denoland/deno_graph/main/src/source/wasm.rs",
    )
    .expect("Failed to download file")
    .text()
    .expect("Failed to read response text");

    let content = format!(
        "// [DO NOT EDIT] This file is downloaded from deno_graph\n\
         // https://raw.githubusercontent.com/denoland/deno_graph/main/src/source/wasm.rs\n\
         \n\
         {}",
        content
    );

    // Write the content to src/wasm.rs
    fs::write(Path::new("src/wasm.rs"), content).expect("Failed to write wasm.rs");

    println!("cargo:rerun-if-changed=build.rs");
}
