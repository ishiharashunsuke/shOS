import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  // Architectural boundary: shared components/ must never depend on a
  // specific app's code. Cross-feature needs go through src/services/ or a
  // feature's own public index.ts instead.
  {
    files: ["src/components/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/features/*", "@/app/*"],
              message:
                "components/ must not import from features/ or app/. Shared UI stays app-agnostic — move app-specific code into features/<app>/ instead.",
            },
          ],
        },
      ],
    },
  },
  // Only the home feature may reach into other features' public barrels
  // (it aggregates cross-app data for the dashboard). Every other feature
  // must stay isolated from its siblings.
  {
    files: ["src/features/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/features/*"],
              message:
                "Only features/home may import from another feature's public barrel. Cross-feature needs otherwise go through src/services/.",
            },
          ],
        },
      ],
    },
  },
  {
    // Override: home is the one feature allowed to aggregate other features.
    files: ["src/features/home/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": "off",
    },
  },
]);

export default eslintConfig;
