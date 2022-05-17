import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { TestModel, CreateProjectDto, ProjectModel } from "@grimalkin/contracts";
import { TestsService } from "../tests/tests.service";
import { ProjectsService } from "./projects.service";

@Controller("projects")
export class ProjectsController {
  constructor(
    private readonly projectsService: ProjectsService,
    private readonly testsService: TestsService
    ) {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto): Promise<ProjectModel> {
    return this.projectsService.create(createProjectDto);
  }

  @Get()
  findAll(): Promise<ProjectModel[]> {
    return this.projectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProjectModel> {
    return this.projectsService.findOne(id);
  }

  @Get(':id/run/:runnum')
  findTestAndResulByRun(@Param('id') id: string, @Param('runnum') runnum: number): Promise<TestModel[]> {
    return this.testsService.findTestAndResultByRun(id, runnum);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.projectsService.remove(id);
  }
}
