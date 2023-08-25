import init, {InitInput, generate_key} from "./pkg/jwkgen.js";

export type LoadOpts =  {
	wasm?: InitInput
};

let wasmInit: (() => InitInput) | undefined = undefined;
export const setWasmInit = (arg: () => InitInput) => {
  wasmInit = arg;
};

let initialized: Promise<void> | undefined = undefined;

export class JWKGen {
	private constructor() {}

	public static initialize = async (options?: LoadOpts): Promise<JWKGen> => {
		if (initialized === undefined) {
			//@ts-ignore
			const loadModule = options?.wasm ?? wasmInit();
			initialized = init(loadModule).then(() => void 0);
		}

		await initialized;
		return new JWKGen();
	}

	public generate_key = () => {
		return generate_key();
	}
}
