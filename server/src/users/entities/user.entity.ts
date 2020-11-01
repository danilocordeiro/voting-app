import { ObjectType, Field, ID, HideField } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('users')
export class User {

  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  userName: string;

  @Column()
  email: string;

  @Column()
  @HideField()
  password: string;

  @Column({default: false})
  confirmed: boolean;
}
