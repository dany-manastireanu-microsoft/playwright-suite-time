import {
  FullConfig,
  FullResult,
  Reporter,
  Suite,
  TestCase,
  TestResult,
  TestStep,
} from "@playwright/test/reporter";

import { write } from "fs-jetpack";

class MyReporter implements Reporter {
  private executionTime = {};
  private outputFile: string;

  constructor(options: { outputFile?: string } = {}) {
    this.outputFile = options.outputFile ?? "/report/results.json";
  }

  onBegin(config: FullConfig, suite: Suite) {
    console.log(`xxx=> Starting the run with ${suite.allTests().length} tests`);
  }

  onTestEnd(test: TestCase, result: TestResult) {
    if (!this.executionTime.hasOwnProperty(test.parent.titlePath()[2])) {
      this.executionTime[test.parent.titlePath()[2]] = 0;
    }
    this.executionTime[test.parent.titlePath()[2]] += result.duration;
  }

  onEnd(result: FullResult) {
    console.log(
      `Finished the run: ${result.status}. Execution times. Save in ${this.outputFile}`
    );
    write(this.outputFile, JSON.stringify(this.executionTime, null, 2));
    console.table(this.executionTime);
  }

  onStepEnd(test: TestCase, result: TestResult, step: TestStep): void {
    if (step.title === "After Hooks" || step.title === "Before Hooks") {
      if (!this.executionTime.hasOwnProperty(test.parent.titlePath()[2])) {
        this.executionTime[test.parent.titlePath()[2]] = 0;
      }
      this.executionTime[test.parent.titlePath()[2]] += step.duration;
    }
  }
}

export default MyReporter;
