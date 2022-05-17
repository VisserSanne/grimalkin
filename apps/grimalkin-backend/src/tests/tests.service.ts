import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Project } from "../projects/project.entity";
import { CreateTestDto, Test } from "@grimalkin/contracts";
import { Test as TestEntity } from "./test.entity";

@Injectable()
export class TestsService {
  constructor(
    @InjectRepository(TestEntity)
    private testsRepository: Repository<Test>,
    @InjectRepository(Project)
    private projectRepository: Repository<Project>
  ) {}

  async create(createTestDto: CreateTestDto): Promise<Test> {
    // Get project
    const project = await this.projectRepository.findOne(createTestDto.projectId);

    const test = new TestEntity();
    test.name = createTestDto.name;
    test.testsuite = createTestDto.testSuite;
    test.project = project;

    return this.testsRepository.save(test);
  }

  findAll(): Promise<Test[]> {
    return this.testsRepository.find();
  }

  findOne(id: string): Promise<Test> {
    return this.testsRepository.findOne(id);
  }

  async findTestsByProjectId(projectId: string): Promise<Test[]> {
    return this.testsRepository.find({
      where: {
        project: projectId
      }
    })
  }

  async findTestAndResultByRun(projectId: string, runnum: number): Promise<Test[]> {
    return this.testsRepository
      .createQueryBuilder('test')
      .innerJoinAndSelect('test.testresults', 'testresults')
      .where('test.projectId = :projectId', {projectId})
      .andWhere('testresults.testrun = :runnum', {runnum})
      .getMany();
  }

  async remove(id: string): Promise<void> {
    await this.testsRepository.delete(id);
  }
}
