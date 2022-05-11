import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Test } from "../tests/test.entity";
import { CreateTestResultDto } from "./dto/create-testresult.dto";
import { TestResult } from "./testresult.entity";

@Injectable()
export class TestResultsService {
  constructor(
    @InjectRepository(TestResult)
    private testResultsRepository: Repository<TestResult>,
    @InjectRepository(Test)
    private testsRepository: Repository<Test>
  ) {}

  async create(createTestResultDto: CreateTestResultDto): Promise<TestResult> {
    // Get Test
    const test = await this.testsRepository.findOne(createTestResultDto.testId);

    const testResult = new TestResult();
    testResult.test = test;
    testResult.localrun = createTestResultDto.localRun;
    testResult.runtime = createTestResultDto.runTime;
    testResult.executiondate = createTestResultDto.executiondate;
    testResult.failcategory = createTestResultDto.failCategory;
    testResult.output = createTestResultDto.output;

    return this.testResultsRepository.save(testResult);
  }

  findAll(): Promise<TestResult[]> {
    return this.testResultsRepository.find();
  }

  findOne(id: string): Promise<TestResult> {
    return this.testResultsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.testResultsRepository.delete(id);
  }
}