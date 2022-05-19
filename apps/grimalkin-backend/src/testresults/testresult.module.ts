import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Test } from "../tests/test.entity";
import { TestResult } from "./testresult.entity";
import { TestResultsController } from "./testresults.controller";
import { TestResultsService } from "./testresults.service";

@Module({
  imports: [TypeOrmModule.forFeature([TestResult]), TypeOrmModule.forFeature([Test])],
  providers: [TestResultsService],
  controllers: [TestResultsController],
})

export class TestResultsModule {}
