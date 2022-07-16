import { Body, Controller, Post } from '@nestjs/common';
import { user as User } from '@prisma/client';
import { AddUserDTO } from '../dtos/add-user.dto';
import { AddUserService } from '../services/add/add-user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly addUser: AddUserService) {}

  @Post()
  async index(@Body() data: AddUserDTO): Promise<User> {
    return await this.addUser.add(data);
  }
}
