import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorResponse } from 'src/utils/error-response';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UsersRepository)
    private readonly usersRepository: UsersRepository
  ){}

  async create(createUserInput: CreateUserInput): Promise<ErrorResponse[] | null> {
    const userExists = await this.usersRepository.findOne({where: {email: createUserInput.email }});
    if(userExists) {
      return [
        {
          path: 'email',
          message: 'invalid email or password'
        }
      ]
    }
    
    await this.usersRepository.save({...createUserInput});
    return null;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
