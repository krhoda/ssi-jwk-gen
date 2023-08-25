mod utils;

use serde::{Deserialize, Serialize};
use serde_json::{from_str, to_string};
use ssi::jwk::JWK;
use tsify::Tsify;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn generate_key() -> Result<String, String> {
    crate::utils::set_panic_hook();
    let key = JWK::generate_ed25519()
        .map_err(|error| format!("failed to generate session key: {}", error))?;
    let s =
        to_string(&key).map_err(|error| format!("failed to stringify session key: {}", error))?;
    Ok(s)
}
