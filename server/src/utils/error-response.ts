import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ErrorResponse {
  @Field()
  message: string;
  @Field()
  path: string;

}