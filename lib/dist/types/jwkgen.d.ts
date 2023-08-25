import { InitInput } from "./pkg/jwkgen.js";
export type LoadOpts = {
    wasm?: InitInput;
};
export declare const setWasmInit: (arg: () => InitInput) => void;
export declare class JWKGen {
    private constructor();
    static initialize: (options?: LoadOpts) => Promise<JWKGen>;
    generate_key: () => string;
}
