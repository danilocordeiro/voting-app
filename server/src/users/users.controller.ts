import { Controller, Get, Param, Response } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response as Res } from 'express';

@Controller('users')
export class UsersController {

  constructor(
    private readonly usersService: UsersService
  ){}

  @Get('/confirm/:id')
  async confirmEmail(@Param('id') id: string, @Response() res: Res) {
    return this.usersService.confirmEmail(id, res);
  }

}
