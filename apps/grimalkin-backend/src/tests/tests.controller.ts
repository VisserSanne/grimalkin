import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateTestDto } from "./dto/create-test.dto";
import { Test } from "./test.entity";
import { TestsService } from "./tests.service";

@Controller("tests")
export class TestsController {
  constructor(private readonly testsService: TestsService) {}

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
  findTestResultsByTestID(@Param('id') id: string): Promise<Test> {
    return this.testsService.findTestResultsByTestID(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.testsService.remove(id);
  }
}
