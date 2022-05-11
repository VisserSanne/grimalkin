import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CompaniesService } from "./companies.service";
import { Company } from "./company.entity";
import { CreateCompanyDto } from "./dto/create-company.dto";

@Controller("companies")
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companiesService.create(createCompanyDto);
  }

  @Get()
  findAll(): Promise<Company[]> {
    return this.companiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Company> {
    return this.companiesService.findOne(id);
  }

  @Get(':id/users')
  findUsersByCompanyID(@Param('id') id: string): Promise<Company> {
    return this.companiesService.findTestResultsByTestID(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.companiesService.remove(id);
  }
}
