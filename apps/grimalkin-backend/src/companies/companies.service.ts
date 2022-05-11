import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Company } from "./company.entity";
import { CreateCompanyDto } from "./dto/create-company.dto";

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private companiesRepository: Repository<Company>
  ) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const company = new Company();
    company.name = createCompanyDto.name;

    return this.companiesRepository.save(company);
  }

  async findAll(): Promise<Company[]> {
    return this.companiesRepository.find();
  }

  findOne(id: string): Promise<Company> {
    return this.companiesRepository.findOne(id);
  }

  findTestResultsByTestID(id: string): Promise<Company> {
    return this.companiesRepository.findOne({
      where: {id},
      relations: ["employees"]
    })
  }

  async remove(id: string): Promise<void> {
    await this.companiesRepository.delete(id);
  }
}
