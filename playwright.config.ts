import { defineConfig } from "@playwright/test";

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: "tests",
  workers: 1,
  reporter: [
    ["junit", { outputFile: "report/results.xml" }],
  ],
  //   reporter: "./my-reporter.ts",
});
