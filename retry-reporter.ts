import {
  FullConfig,
  FullResult,
  Reporter,
  Suite,
  TestCase,
  TestError,
  TestResult,
  TestStep,
} from "@playwright/test/reporter";

import { write } from "fs-jetpack";

class RetryReporter implements Reporter {
  onError(error: TestError): void {
    console.log(`new error`)
  }
}

export default RetryReporter;
