import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { TestResult } from "../testresults/testresult.entity";
import { TestResultsService } from "../testresults/testresults.service";
import { CreateTestDto } from "./dto/create-test.dto";
import { Test } from "./test.entity";
import { TestsService } from "./tests.service";

@Controller("tests")
export class TestsController {
  constructor(
    private readonly testsService: TestsService, 
    private readonly testResultsService: TestResultsService
    ) {}

  @Post()
  create(@Body() createTestDto: CreateTestDto): Promise<Test> {
    return this.testsService.create(createTestDto);
  }

  @Get()
  findAll(): Promise<Test[]> {
    return this.testsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Test> {
    return this.testsService.findOne(id);
  }

  @Get(':id/testresults')
  findTestResultsByTestID(@Param('id') id: string): Promise<TestResult[]> {
    return this.testResultsService.findTestResultsByTestID(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.testsService.remove(id);
  }
}
