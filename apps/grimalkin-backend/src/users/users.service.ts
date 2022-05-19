import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Company } from "../companies/company.entity";
import { CreateUserDto, UserModel } from "@grimalkin/contracts";
import { User as UserEntity } from "./user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserModel>,
    @InjectRepository(Company)
    private companiesRepository: Repository<Company>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserModel> {
    // Get company
    const company = await this.companiesRepository.findOne(createUserDto.companyId);

    const user = new UserEntity();
    user.name = createUserDto.name;
    user.company = company;

    return this.usersRepository.save(user);
  }

  findAll(): Promise<UserModel[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<UserModel> {
    return this.usersRepository.findOne({
      where: { id }
    });
  }

  findUsersByCompanyID(companyId: string): Promise<UserModel[]> {
    return this.usersRepository.find({
      where: { company: companyId }
    });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
