import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CompaniesService } from "./companies.service";
import { CompanyModel, CreateCompanyDto } from "@grimalkin/contracts";

@Controller("companies")
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto): Promise<CompanyModel> {
    return this.companiesService.create(createCompanyDto);
  }

  @Get()
  findAll(): Promise<CompanyModel[]> {
    return this.companiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<CompanyModel> {
    return this.companiesService.findOne(id);
  }

  @Get(':id/users')
  findUsersByCompanyID(@Param('id') id: string): Promise<CompanyModel> {
    return this.companiesService.findUsersByCompanyID(id);
  }

  @Get('user/:user')
  findCompanyByUserID(@Param('user') userId: string): Promise<CompanyModel> {
    return this.companiesService.findCompanyByUserID(userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.companiesService.remove(id);
  }
}
