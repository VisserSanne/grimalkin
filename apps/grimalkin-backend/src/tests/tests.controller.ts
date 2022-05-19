import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { TestResultsService } from "../testresults/testresults.service";
import { TestResultModel, CreateTestDto, TestModel } from "@grimalkin/contracts";
import { TestsService } from "./tests.service";

@Controller("tests")
export class TestsController {
  constructor(
    private readonly testsService: TestsService, 
    private readonly testResultsService: TestResultsService
    ) {}

  @Post()
  create(@Body() createTestDto: CreateTestDto): Promise<TestModel> {
    return this.testsService.create(createTestDto);
  }

  @Get()
  findAll(): Promise<TestModel[]> {
    return this.testsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<TestModel> {
    return this.testsService.findOne(id);
  }

  @Get(':id/testresults')
  findTestResultsByTestID(@Param('id') id: string): Promise<TestResultModel[]> {
    return this.testResultsService.findTestResultsByTestID(id);
  }

  @Get('/project/:id')
  findTestsByProjectId(@Param('id') projectId: string): Promise<TestModel[]> {
    return this.testsService.findTestsByProjectId(projectId);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.testsService.remove(id);
  }
}
