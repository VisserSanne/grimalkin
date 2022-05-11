import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Project } from "../projects/project.entity";
import { User } from "../users/user.entity";

@Entity()
export class Company {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column() 
  name: string;

  @OneToMany(() => Project, (project) => project.company)
  projects: Project[];

  @OneToMany(() => User, (user) => user.company)
  employees: User[];
}