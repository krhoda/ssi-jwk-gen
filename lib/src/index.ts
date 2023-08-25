export * from "./index_core.js";
import jwkgen from "./pkg/jwkgen_bg.wasm";
import {setWasmInit} from "./jwkgen.js"

// @ts-ignore
setWasmInit(() => jwkgen());
