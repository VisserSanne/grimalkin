import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Project } from "../projects/project.entity";
import { CreateTestDto } from "./dto/create-test.dto";
import { Test } from "./test.entity";

@Injectable()
export class TestsService {
  constructor(
    @InjectRepository(Test)
    private testsRepository: Repository<Test>,
    @InjectRepository(Project)
    private projectRepository: Repository<Project>
  ) {}

  async create(createTestDto: CreateTestDto): Promise<Test> {
    // Get project
    const project = await this.projectRepository.findOne(createTestDto.projectId);

    const test = new Test();
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

  async remove(id: string): Promise<void> {
    await this.testsRepository.delete(id);
  }
}