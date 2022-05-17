import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Test } from "../tests/test.entity";
import { CreateTestResultDto, TestResult } from "@grimalkin/contracts";
import { TestResult as TestResultEntity } from "./testresult.entity";

@Injectable()
export class TestResultsService {
  constructor(
    @InjectRepository(TestResultEntity)
    private testResultsRepository: Repository<TestResult>,
    @InjectRepository(Test)
    private testsRepository: Repository<Test>
  ) {}

  async create(createTestResultDto: CreateTestResultDto): Promise<TestResult> {
    // Get Test
    const test = await this.testsRepository.findOne(createTestResultDto.testId);

    const testResult = new TestResultEntity();
    testResult.test = test;
    testResult.testrun = createTestResultDto.testrun;
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

  findTestResultsByTestID(id: string): Promise<TestResult[]> {
    return this.testResultsRepository.find({
      where: {
        test: id
      }
    })
  }

  async remove(id: string): Promise<void> {
    await this.testResultsRepository.delete(id);
  }
}
