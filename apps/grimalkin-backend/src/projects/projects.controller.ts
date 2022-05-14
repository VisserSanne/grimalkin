import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { TestResult } from "../testresults/testresult.entity";
import { Test } from "../tests/test.entity";
import { TestsService } from "../tests/tests.service";
import { CreateProjectDto } from "./dto/create-project.dto";
import { Project } from "./project.entity";
import { ProjectsService } from "./projects.service";

@Controller("projects")
export class ProjectsController {
  constructor(
    private readonly projectsService: ProjectsService,
    private readonly testsService: TestsService
    ) {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto): Promise<Project> {
    return this.projectsService.create(createProjectDto);
  }

  @Get()
  findAll(): Promise<Project[]> {
    return this.projectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Project> {
    return this.projectsService.findOne(id);
  }

  @Get(':id/run/:runnum')
  findTestAndResulByRun(@Param('id') id: string, @Param('runnum') runnum: number): Promise<Test[]> {
    return this.testsService.findTestAndResultByRun(id, runnum);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.projectsService.remove(id);
  }
}
