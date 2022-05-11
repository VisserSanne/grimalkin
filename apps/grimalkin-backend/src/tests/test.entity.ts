import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Project } from "../projects/project.entity";
import { TestResult } from "../testresults/testresult.entity";

@Entity()
export class Test {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Project, (project) => project.tests)
  project: Project;

  @Column()
  testsuite: string;

  @OneToMany(() => TestResult, (testresult) => testresult.test)
  testresults: TestResult[];
}