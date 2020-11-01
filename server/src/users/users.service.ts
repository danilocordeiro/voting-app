import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { confirmEmailLink } from '../utils/confirmEmailLink';
import { ErrorResponse } from '../utils/error-response';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UsersRepository } from './users.repository';
import { sendEmail } from '../utils/sendEmail';
import { redis } from '../configs/redis';
import { Response } from 'express';
import { CONFIRM_EMAIL_PREFIX } from 'src/constants';

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
    
    const user = await this.usersRepository.save({...createUserInput});
    await sendEmail(user.email, await confirmEmailLink(user.id))
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

  async confirmEmail(id: string, res: Response) {
    const userId = await redis.get(`${CONFIRM_EMAIL_PREFIX}${id}`);
    if(!userId) {
      throw new NotFoundException();
    }

    await this.usersRepository.update({id: userId}, {confirmed: true});
    res.send('ok');
  }
}
