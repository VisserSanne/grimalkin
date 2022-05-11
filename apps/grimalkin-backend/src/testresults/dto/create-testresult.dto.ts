export class CreateTestResultDto {
  localRun: boolean;
  testId: string;
  runTime: number;
  executiondate: Date;
  failCategory: string;
  output: string;
}