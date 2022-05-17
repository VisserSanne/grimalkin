import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateTestResultDto, TestResult } from "@grimalkin/contracts";
import { TestResultsService } from "./testresults.service";

@Controller("testresults")
export class TestResultsController {
  constructor(private readonly testResultsService: TestResultsService) {}

  @Post()
  create(@Body() createTestResultDto: CreateTestResultDto): Promise<TestResult> {
    return this.testResultsService.create(createTestResultDto);
  }

  @Get()
  findAll(): Promise<TestResult[]> {
    return this.testResultsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<TestResult> {
    return this.testResultsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.testResultsService.remove(id);
  }
}
