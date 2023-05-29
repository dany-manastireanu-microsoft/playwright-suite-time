const config = {
  testDir: "tests",
  workers: 1,
  reporter: [
    ["junit", { outputFile: "report/results.xml" }],
    ["./my-reporter.ts", { outputFile: "report/results.json" }],
    ["list"],
    ["./retry-reporter.ts"],
  ],
};
export default config;
