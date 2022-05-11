import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Company } from "../companies/company.entity";
import { CreateProjectDto } from "./dto/create-project.dto";
import { Project } from "./project.entity";

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectsRepository: Repository<Project>,
    @InjectRepository(Company)
    private companiesRepository: Repository<Company>
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    // Get company
    const company = await this.companiesRepository.findOne(createProjectDto.companyId);

    const project = new Project();
    project.name = createProjectDto.name;
    project.company = company;

    return this.projectsRepository.save(project);
  }

  findAll(): Promise<Project[]> {
    return this.projectsRepository.find();
  }

  findOne(id: string): Promise<Project> {
    return this.projectsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.projectsRepository.delete(id);
  }
}
