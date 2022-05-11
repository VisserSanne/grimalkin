import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Company } from "../companies/company.entity";
import { Project } from "./project.entity";
import { ProjectsController } from "./projects.controller";
import { ProjectsService } from "./projects.service";

@Module({
  imports: [TypeOrmModule.forFeature([Project]), TypeOrmModule.forFeature([Company])],
  providers: [ProjectsService],
  controllers: [ProjectsController],
})

export class ProjectsModule {}
