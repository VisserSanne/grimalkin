import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CompaniesModule } from '../companies/companies.module';
import { Company } from '../companies/company.entity';
import { environment } from '../environments/environment';
import { Project } from '../projects/project.entity';
import { ProjectsModule } from '../projects/projects.module';
import { TestResult } from '../testresults/testresult.entity';
import { TestResultsModule } from '../testresults/testresult.module';
import { Test } from '../tests/test.entity';
import { TestsModule } from '../tests/tests.module';
import { User } from '../users/user.entity';
import { UsersModule } from '../users/users.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: environment.dbHost,
      port: environment.dbPort,
      username: environment.dbUsername,
      password: environment.dbPassword,
      database: 'grimalkin',
      // Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
      synchronize: process.env.NODE_ENV === 'development',
      entities: [
        Company,
        Project,
        User,
        Test,
        TestResult,
      ],
    }),
    CompaniesModule,
    ProjectsModule,
    UsersModule,
    TestsModule,
    TestResultsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  constructor(private connection: Connection) {}
}
