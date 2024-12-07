mod wasm;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn generate_dts(wasm_bytes: &[u8]) -> Result<String, String> {
    wasm::wasm_module_to_dts(wasm_bytes).map_err(|e| e.to_string())
}
