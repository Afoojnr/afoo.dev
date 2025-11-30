import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

import pluginPrettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      prettier: pluginPrettier
    },
    extends: [prettierConfig],
    rules: {
      "no-console": "warn"
    }
  }
]);

export default eslintConfig;
