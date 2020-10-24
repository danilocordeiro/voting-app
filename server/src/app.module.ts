import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { typeOrmConfig } from './configs/database/database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      typeOrmConfig
    ),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
      introspection: true
    }), UsersModule,
  ],
})
export class AppModule {}
