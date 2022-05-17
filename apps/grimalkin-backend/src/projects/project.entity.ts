import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "../companies/company.entity";
import { Test } from "../tests/test.entity";

@Entity()
export class Project {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Company, (company) => company.projects, { onDelete: 'CASCADE' })
  company: Company;

  @OneToMany(() => Test, (test) => test.project)
  tests: Test[];
}