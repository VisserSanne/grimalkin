import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../users/user.entity";
import { UsersService } from "../users/users.service";
import { CompaniesController } from "./companies.controller";
import { CompaniesService } from "./companies.service";
import { Company } from "./company.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Company]), TypeOrmModule.forFeature([User])],
  providers: [CompaniesService, UsersService],
  controllers: [CompaniesController],
  exports: [CompaniesService],
})

export class CompaniesModule {}
