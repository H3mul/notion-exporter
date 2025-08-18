import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts", "src/action.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
})
