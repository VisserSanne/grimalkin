import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Company as CompanyEntity } from "./company.entity";
import { CompanyModel, CreateCompanyDto } from "@grimalkin/contracts";

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(CompanyEntity)
    private companiesRepository: Repository<CompanyEntity>
  ) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<CompanyModel> {
    const company = new CompanyEntity();
    company.name = createCompanyDto.name;

    return this.companiesRepository.save(company);
  }

  async findAll(): Promise<CompanyModel[]> {
    return this.companiesRepository.find();
  }

  findOne(id: string): Promise<CompanyModel> {
    return this.companiesRepository.findOne(id);
  }

  findCompanyByUserID(userId: string): Promise<CompanyModel> {
    return this.companiesRepository
      .createQueryBuilder('company')
      .innerJoin('company.employees', 'employees')
      .where('employees.id = :userId', { userId })
      .getOne();
  }

  async remove(id: string): Promise<void> {
    await this.companiesRepository.delete(id);
  }
}
