import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
      introspection: true
    }),
  ],
})
export class AppModule {}
