export type TestResult = {
  id: string;
  testrun: number;
  localrun: boolean;
  executiondate: Date;
  runtime: number;
  failcategory: string;
  output: string;
}
