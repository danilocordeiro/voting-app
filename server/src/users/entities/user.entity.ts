import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
@ObjectType()
export class User {

  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  userName: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
