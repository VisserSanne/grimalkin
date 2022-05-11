import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Project } from "../projects/project.entity";
import { TestResult } from "../testresults/testresult.entity";
import { TestResultsService } from "../testresults/testresults.service";
import { Test } from "./test.entity";
import { TestsController } from "./tests.controller";
import { TestsService } from "./tests.service";

@Module({
  imports: [TypeOrmModule.forFeature([Test]), TypeOrmModule.forFeature([Project]), TypeOrmModule.forFeature([TestResult])],
  providers: [TestsService, TestResultsService],
  controllers: [TestsController],
})

export class TestsModule {}
