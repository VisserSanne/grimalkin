import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Company } from "../companies/company.entity";
import { Test } from "../tests/test.entity";
import { TestsService } from "../tests/tests.service";
import { Project } from "./project.entity";
import { ProjectsController } from "./projects.controller";
import { ProjectsService } from "./projects.service";

@Module({
  imports: [TypeOrmModule.forFeature([Project]), TypeOrmModule.forFeature([Company]), TypeOrmModule.forFeature([Test])],
  providers: [ProjectsService, TestsService],
  controllers: [ProjectsController],
})

export class ProjectsModule {}
