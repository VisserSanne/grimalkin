import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Company } from "../companies/company.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Company)
    private companiesRepository: Repository<Company>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    // Get company
    const company = await this.companiesRepository.findOne(createUserDto.companyId);

    const user = new User();
    user.name = createUserDto.name;
    user.company = company;

    return this.usersRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne({
      where: { id }
    });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}