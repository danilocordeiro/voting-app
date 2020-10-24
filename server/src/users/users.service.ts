import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {

  constructor(
    private readonly usersRepository: UsersRepository
  ){}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const userExists = await this.usersRepository.findOne({where: {email: createUserInput.email }});
    if(userExists) {
      throw new InternalServerErrorException('Erro ao criar um usuário');
    }
    
    return await this.usersRepository.save({...createUserInput});;
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
