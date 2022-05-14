export class CreateTestResultDto {
  testrun: number;
  localRun: boolean;
  testId: string;
  runTime: number;
  executiondate: Date;
  failCategory: string;
  output: string;
}