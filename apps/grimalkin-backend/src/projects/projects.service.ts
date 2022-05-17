import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Company as CompanyEntity } from "../companies/company.entity";
import { CreateProjectDto, Project } from "@grimalkin/contracts";
import { Project as ProjectEntity } from "./project.entity";

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(ProjectEntity)
    private projectsRepository: Repository<ProjectEntity>,
    @InjectRepository(CompanyEntity)
    private companiesRepository: Repository<CompanyEntity>
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    // Get company
    const company = await this.companiesRepository.findOne(createProjectDto.companyId);

    const project = new ProjectEntity();
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
