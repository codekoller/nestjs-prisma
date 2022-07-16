import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { AddUserDTO } from '@/modules/users/dtos/add-user.dto';
import { AddUserService } from '@/modules/users/services/add/add-user.service';
import { FindUserService } from '@/modules/users/services/find/find-user.service';
import { FindUserByIdService } from '@/modules/users/services/find-by-id/find-user-by-id.service';
import { FindUserByEmailService } from '../services/find-email/find-user-by-email.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly addUser: AddUserService,
    private readonly findUsers: FindUserService,
    private readonly findUserById: FindUserByIdService,
    private readonly findUserByEmail: FindUserByEmailService,
  ) {}

  @Post()
  async store(@Body() data: AddUserDTO): Promise<User> {
    return await this.addUser.add(data);
  }

  @Get()
  async index(): Promise<User[]> {
    return await this.findUsers.find();
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<User> {
    return await this.findUserById.findById(id);
  }

  @Get(':email/show-email')
  async showEmail(@Param('email') email: string): Promise<User> {
    return await this.findUserByEmail.findByEmail(email);
  }
}
