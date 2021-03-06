import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Test } from "../tests/test.entity";

@Entity()
export class TestResult {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  testrun: number;

  @Column()
  localrun: boolean;

  @ManyToOne(() => Test, (test) => test.testresults, { onDelete: 'CASCADE' })
  test: Test;

  @Column()
  executiondate: Date;

  @Column()
  runtime: number;

  @Column()
  failcategory: string;

  @Column()
  output: string;
}
