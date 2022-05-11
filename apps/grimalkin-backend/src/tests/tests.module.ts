import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Project } from "../projects/project.entity";
import { Test } from "./test.entity";
import { TestsController } from "./tests.controller";
import { TestsService } from "./tests.service";

@Module({
  imports: [TypeOrmModule.forFeature([Test]), TypeOrmModule.forFeature([Project])],
  providers: [TestsService],
  controllers: [TestsController],
})

export class TestsModule {}
