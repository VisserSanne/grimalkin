import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Company } from "../companies/company.entity";
import { User } from "./user.entity";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
  imports: [TypeOrmModule.forFeature([User]), TypeOrmModule.forFeature([Company])],
  providers: [UsersService],
  controllers: [UsersController],
})

export class UsersModule {}
