import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { typeOrmConfig } from './configs/database/database.config';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      typeOrmConfig
    ),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true
    }), UsersModule,
  ],
})
export class AppModule {}
